import sys
import os
import uuid
from typing import Dict, Any, Optional, List, Generator, Tuple
import time
from datetime import datetime
import threading
import json
import queue
import multiprocessing

from fastapi import FastAPI, HTTPException, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import logging
import uvicorn
import re
import gc
import torch
import numpy as np
import cv2
from contextlib import contextmanager
import signal

# Setup logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

# Initialize FastAPI app
app = FastAPI()

# Configure CORS - allow all origins since Cloudflare tunnel URL will change
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins for Cloudflare tunnel
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create directories
UPLOAD_DIR = os.path.join(os.getcwd(), "uploads")
os.makedirs(UPLOAD_DIR, exist_ok=True)

RESULTS_DIR = os.path.join(os.getcwd(), "results")
os.makedirs(RESULTS_DIR, exist_ok=True)

# Cancellation support classes
class CancellationError(Exception):
    """Exception raised when an operation is cancelled."""
    pass

class CancellationToken:
    """A token that can be used to signal cancellation to long-running operations."""
    def __init__(self):
        self._cancelled = False
        self._lock = threading.Lock()

    def cancel(self):
        """Signal cancellation."""
        with self._lock:
            self._cancelled = True

    @property
    def cancelled(self):
        """Check if cancellation has been requested."""
        with self._lock:
            return self._cancelled

    def check_cancelled(self):
        """Check if cancelled and raise CancellationError if so."""
        if self.cancelled:
            raise CancellationError("Operation was cancelled")

class ModelLoadError(Exception):
    """Specific error for model loading failures."""
    pass

@contextmanager
def timeout(seconds):
    """Context manager for timeouts using signals."""
    def timeout_handler(signum, frame):
        raise TimeoutError(f"Function timed out after {seconds} seconds")

    original_handler = signal.getsignal(signal.SIGALRM)
    try:
        signal.signal(signal.SIGALRM, timeout_handler)
        signal.alarm(seconds)
        yield
    finally:
        signal.alarm(0)
        signal.signal(signal.SIGALRM, original_handler)

# Task queue and management
class TaskManager:
    def __init__(self):
        self.tasks = {}  # Store task status
        self.task_queue = queue.Queue()
        self.active_task = None
        self.lock = threading.Lock()
        self.processing_event = threading.Event()
        self.cancellation_tokens = {}  # Map of task_id to cancellation token
        
        # Start worker thread
        self.worker = threading.Thread(target=self._worker_thread, daemon=True)
        self.worker.start()
    
    def _worker_thread(self):
        """Worker thread that processes tasks from the queue one at a time."""
        logger.info("FIFO worker started")
        
        while True:
            try:
                # Get task from queue with timeout
                try:
                    task_data = self.task_queue.get(timeout=1.0)
                except queue.Empty:
                    continue
                
                if task_data is None:  # Shutdown signal
                    logger.info("Worker shutting down")
                    break
                
                task_id = task_data["task_id"]
                task_type = task_data["type"]
                params = task_data["params"]
                
                # Check if task was cancelled before it started
                if self._is_cancelled(task_id):
                    logger.info(f"Task {task_id} was cancelled before processing started")
                    self._update_task_status(task_id, "canceled")
                    self.task_queue.task_done()
                    continue
                
                # Set active task and signal processing started
                with self.lock:
                    self.active_task = task_id
                self.processing_event.set()
                
                # Process the task with cancellation support
                self._update_task_status(task_id, "processing", progress=0.1)
                
                try:
                    # Get cancellation token for this task
                    token = self.cancellation_tokens.get(task_id)
                    if not token:
                        # Create a new token if one doesn't exist
                        token = CancellationToken()
                        with self.lock:
                            self.cancellation_tokens[task_id] = token
                    
                    if task_type == "youtube":
                        self._process_youtube_video(task_id, params["video_url"], params["summary_length"], token)
                    elif task_type == "local":
                        self._process_local_video(task_id, params["file_path"], params["summary_length"], token)
                
                except CancellationError:
                    logger.info(f"Task {task_id} was cancelled during processing")
                    self._update_task_status(task_id, "canceled")
                
                except Exception as e:
                    logger.error(f"Error processing task {task_id}: {str(e)}")
                    self._update_task_status(task_id, "failed", error=str(e))
                
                finally:
                    # Clean up cancellation token
                    with self.lock:
                        self.cancellation_tokens.pop(task_id, None)
                
                # Mark task as done in the queue
                self.task_queue.task_done()
                
                # Clear active task flag
                with self.lock:
                    self.active_task = None
                self.processing_event.clear()
                
            except Exception as e:
                logger.error(f"Worker error: {str(e)}")
                with self.lock:
                    self.active_task = None
                self.processing_event.clear()
                time.sleep(1)  # Avoid tight loop on errors
    
    def _process_youtube_video(self, task_id, video_url, summary_length, token):
        """Process a YouTube video with cancellation support."""
        # Import locally to avoid circular imports
        from test_analyzer import OptimizedVideoBot
        
        bot = None
        try:
            logger.info(f"Starting YouTube video analysis for task {task_id}")
            
            # Create OptimizedVideoBot with cancellation token
            bot = OptimizedVideoBot(sample_rate=10, summary_length=summary_length, 
                                   cancellation_token=token)
            
            # Check cancellation periodically
            token.check_cancelled()
            
            # Update progress after initialization
            self._update_task_status(task_id, "processing", progress=0.2)
            
            # Process video with cancellation support
            bot.process_video(video_url, is_youtube_url=True)
            
            token.check_cancelled()
            self._update_task_status(task_id, "processing", progress=0.6)
            
            # Generate summary
            summary = bot.generate_summary()
            
            token.check_cancelled()
            self._update_task_status(task_id, "processing", progress=0.8)
            
            # Generate interpreted summary
            result = bot.generate_interpreted_summary()
            
            # Save result to file for persistence
            result_file = os.path.join(RESULTS_DIR, f"{task_id}.json")
            with open(result_file, 'w') as f:
                json.dump(result, f)
            
            # Update task status to complete
            self._update_task_status(task_id, "completed", progress=1.0, result_file=f"{task_id}.json")
            
            logger.info(f"Completed YouTube video analysis for task {task_id}")
            
        except CancellationError:
            # Propagate cancellation
            raise
            
        except Exception as e:
            logger.error(f"Error processing YouTube video: {str(e)}")
            self._update_task_status(task_id, "failed", error=str(e))
            raise
        
        finally:
            if bot:
                bot.cleanup()
    
    def _process_local_video(self, task_id, file_path, summary_length, token):
        """Process a local video file with cancellation support."""
        # Import locally to avoid circular imports
        from test_analyzer import OptimizedVideoBot
        
        bot = None
        try:
            logger.info(f"Starting local video analysis for task {task_id}")
            
            if not os.path.exists(file_path):
                raise FileNotFoundError(f"Video file not found: {file_path}")
            
            # Create OptimizedVideoBot with cancellation token
            bot = OptimizedVideoBot(sample_rate=10, summary_length=summary_length,
                                   cancellation_token=token)
                                   
            token.check_cancelled()
            self._update_task_status(task_id, "processing", progress=0.2)
            
            # Process video with cancellation support
            bot.process_video(file_path, is_youtube_url=False)
            
            token.check_cancelled()
            self._update_task_status(task_id, "processing", progress=0.6)
            
            # Generate summary
            summary = bot.generate_summary()
            
            token.check_cancelled()
            self._update_task_status(task_id, "processing", progress=0.8)
            
            # Generate interpreted summary
            result = bot.generate_interpreted_summary()
            
            # Save result to file for persistence
            result_file = os.path.join(RESULTS_DIR, f"{task_id}.json")
            with open(result_file, 'w') as f:
                json.dump(result, f)
            
            # Update task status to complete
            self._update_task_status(task_id, "completed", progress=1.0, result_file=f"{task_id}.json")
            
            logger.info(f"Completed local video analysis for task {task_id}")
            
            # Clean up the uploaded file when analysis is complete
            if os.path.exists(file_path):
                os.remove(file_path)
                logger.info(f"Temporary file removed: {file_path}")
                
        except CancellationError:
            # Propagate cancellation
            raise
            
        except Exception as e:
            logger.error(f"Error processing local video: {str(e)}")
            self._update_task_status(task_id, "failed", error=str(e))
            
            # Clean up on error
            if os.path.exists(file_path):
                os.remove(file_path)
                
            raise
        
        finally:
            if bot:
                bot.cleanup()
    
    def _is_cancelled(self, task_id):
        """Check if a task has been cancelled."""
        with self.lock:
            token = self.cancellation_tokens.get(task_id)
            return token.cancelled if token else False
    
    def add_task(self, task_type, **params):
        """Add a task to the queue."""
        task_id = str(uuid.uuid4())
        
        with self.lock:
            position = self.task_queue.qsize()
            # Set initial position in queue for status reporting
            self.tasks[task_id] = {
                "task_id": task_id,
                "type": task_type,
                "status": "queued",
                "position": position,
                "created_at": datetime.now().isoformat(),
                "updated_at": datetime.now().isoformat(),
                "progress": 0.0
            }
            
            # Create a cancellation token for this task
            self.cancellation_tokens[task_id] = CancellationToken()
        
        # Add to processing queue
        self.task_queue.put({
            "task_id": task_id,
            "type": task_type,
            "params": params
        })
        
        return task_id
    
    def get_task_status(self, task_id):
        """Get the status of a task."""
        with self.lock:
            task_data = self.tasks.get(task_id, {
                "task_id": task_id,
                "status": "not_found"
            })
            
            # If task is queued, update position in queue
            if task_data.get("status") == "queued":
                # Calculate position in queue
                position = 0
                for tid, data in self.tasks.items():
                    if data.get("status") == "queued" and data.get("created_at") < task_data.get("created_at"):
                        position += 1
                task_data["position"] = position
                
                # Check if it's the active task
                if self.active_task and self.processing_event.is_set():
                    task_data["position"] = -1  # Special marker that it's not currently being processed
            
            # If task is completed and has a result file, load the result
            if task_data.get("status") == "completed" and "result_file" in task_data:
                result_file = os.path.join(RESULTS_DIR, task_data["result_file"])
                if os.path.exists(result_file):
                    with open(result_file, 'r') as f:
                        result = json.load(f)
                    # Include the result in the status response
                    task_data["result"] = result
                    # Remove the file reference
                    task_data.pop("result_file", None)
            
            return task_data
    
    def _update_task_status(self, task_id, status, progress=None, result_file=None, error=None):
        """Update the status of a task."""
        with self.lock:
            if task_id not in self.tasks:
                self.tasks[task_id] = {"task_id": task_id}
            
            self.tasks[task_id]["status"] = status
            self.tasks[task_id]["updated_at"] = datetime.now().isoformat()
            
            if progress is not None:
                self.tasks[task_id]["progress"] = progress
            
            if result_file is not None:
                self.tasks[task_id]["result_file"] = result_file
            
            if error is not None:
                self.tasks[task_id]["error"] = error
    
    def cancel_task(self, task_id):
        """Cancel a task with true interruption support."""
        with self.lock:
            if task_id not in self.tasks:
                return False
            
            current_status = self.tasks[task_id]["status"]
            
            # Can't cancel completed or already canceled tasks
            if current_status in ["completed", "failed", "canceled"]:
                return False
                
            # Get the cancellation token for this task
            token = self.cancellation_tokens.get(task_id)
            
            if current_status == "queued":
                # For queued tasks, we can just mark them as canceled
                self.tasks[task_id]["status"] = "canceled"
                self.tasks[task_id]["updated_at"] = datetime.now().isoformat()
                
                # Set the cancellation token if it exists
                if token:
                    token.cancel()
                    
                return True
                
            elif current_status == "processing" and task_id == self.active_task:
                # For processing tasks, mark as canceling and trigger interruption
                self.tasks[task_id]["status"] = "canceling"
                self.tasks[task_id]["updated_at"] = datetime.now().isoformat()
                
                # Set the cancellation token to trigger interruption
                if token:
                    token.cancel()
                    logger.info(f"Cancellation signal sent to task {task_id}")
                
                return True
            
            return False

# Initialize task manager - uses only one worker
task_manager = TaskManager()

class VideoRequest(BaseModel):
    video_url: str
    summary_length: Optional[str] = "medium"  # Default to medium length

class LocalVideoRequest(BaseModel):
    file_path: str
    summary_length: Optional[str] = "medium"  # Default to medium length

@app.post("/analyze-video")
async def analyze_video(request: VideoRequest) -> Dict[str, Any]:
    """Queue a YouTube video for analysis."""
    try:
        logger.info(f"Queueing YouTube video analysis: {request.video_url}")
        task_id = task_manager.add_task(
            "youtube",
            video_url=request.video_url,
            summary_length=request.summary_length
        )
        
        # Get initial position in queue
        status = task_manager.get_task_status(task_id)
        return {"task_id": task_id, "status": "queued", "position": status.get("position", 0)}
    
    except Exception as e:
        logger.error(f"Error queueing YouTube video: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/upload-video")
async def upload_video(file: UploadFile = File(...), summary_length: str = Form("medium")) -> Dict[str, str]:
    """Upload a video file and save it to the server."""
    if not file.filename:
        raise HTTPException(status_code=400, detail="No file uploaded")
    
    # Check if the file is a video
    content_type = file.content_type or ""
    if not content_type.startswith("video/"):
        # Some browsers may not correctly set content type, so we'll also check the extension
        valid_extensions = ['.mp4', '.avi', '.mov', '.wmv', '.mkv', '.webm']
        file_ext = os.path.splitext(file.filename.lower())[1]
        if file_ext not in valid_extensions:
            raise HTTPException(status_code=400, detail="File is not a valid video format")
    
    # Create a unique filename to avoid collisions
    unique_filename = f"{uuid.uuid4().hex}_{file.filename}"
    file_path = os.path.join(UPLOAD_DIR, unique_filename)
    
    try:
        logger.info(f"Uploading video file: {file.filename}")
        # Save the file
        with open(file_path, "wb") as buffer:
            # Read in chunks to handle large files
            chunk_size = 1024 * 1024  # 1MB chunks
            contents = await file.read(chunk_size)
            while contents:
                buffer.write(contents)
                contents = await file.read(chunk_size)
        
        logger.info(f"File uploaded successfully: {file_path}")
        return {"file_path": file_path, "summary_length": summary_length}
    except Exception as e:
        # Clean up if an error occurs
        if os.path.exists(file_path):
            os.remove(file_path)
        logger.error(f"Error uploading file: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Error saving file: {str(e)}")

@app.post("/analyze-local-video")
async def analyze_local_video(request: LocalVideoRequest) -> Dict[str, Any]:
    """Queue a local video for analysis."""
    if not os.path.exists(request.file_path):
        raise HTTPException(status_code=404, detail="Video file not found")
    
    try:
        logger.info(f"Queueing local video analysis: {request.file_path}")
        task_id = task_manager.add_task(
            "local",
            file_path=request.file_path,
            summary_length=request.summary_length
        )
        
        # Get initial position in queue
        status = task_manager.get_task_status(task_id)
        return {"task_id": task_id, "status": "queued", "position": status.get("position", 0)}
    
    except Exception as e:
        logger.error(f"Error queueing local video: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/task-status/{task_id}")
async def get_status(task_id: str) -> Dict[str, Any]:
    """Get the status of a task."""
    try:
        task_status = task_manager.get_task_status(task_id)
        return task_status
    except Exception as e:
        logger.error(f"Error getting task status: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/queue-status")
async def get_queue_status() -> Dict[str, Any]:
    """Get overall queue status."""
    try:
        # Count tasks by status
        counts = {"queued": 0, "processing": 0, "completed": 0, "failed": 0, "canceled": 0, "canceling": 0}
        
        # Get list of tasks in queue by creation time
        queued_tasks = []
        
        with task_manager.lock:
            for task_id, task_data in task_manager.tasks.items():
                status = task_data.get("status", "unknown")
                if status in counts:
                    counts[status] += 1
                
                if status == "queued":
                    queued_tasks.append({
                        "task_id": task_id,
                        "created_at": task_data.get("created_at"),
                        "type": task_data.get("type")
                    })
        
        # Sort queued tasks by creation time
        queued_tasks.sort(key=lambda x: x.get("created_at", ""))
        
        # Get currently processing task
        active_task = None
        if task_manager.active_task:
            with task_manager.lock:
                task_data = task_manager.tasks.get(task_manager.active_task, {})
                if task_data:
                    active_task = {
                        "task_id": task_manager.active_task,
                        "progress": task_data.get("progress", 0),
                        "type": task_data.get("type"),
                        "started_at": task_data.get("updated_at"),
                        "status": task_data.get("status", "processing")
                    }
        
        return {
            "counts": counts,
            "queue_length": len(queued_tasks),
            "active_task": active_task,
            "queued_tasks": queued_tasks[:10]  # Return only first 10 for brevity
        }
    except Exception as e:
        logger.error(f"Error getting queue status: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/results/{task_id}")
async def get_results(task_id: str) -> Dict[str, Any]:
    """Get the results of a completed task."""
    result_file = os.path.join(RESULTS_DIR, f"{task_id}.json")
    
    if not os.path.exists(result_file):
        # Check if task exists but isn't complete
        task_status = task_manager.get_task_status(task_id)
        if task_status.get("status") != "not_found":
            return {"task_id": task_id, "status": task_status.get("status")}
        raise HTTPException(status_code=404, detail="Results not found")
    
    try:
        with open(result_file, 'r') as f:
            result = json.load(f)
        return result
    except Exception as e:
        logger.error(f"Error reading results: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/cancel-task/{task_id}")
async def cancel_task(task_id: str) -> Dict[str, str]:
    """Cancel a task with true interruption capability."""
    try:
        success = task_manager.cancel_task(task_id)
        if success:
            # Get the current status to return
            status = task_manager.get_task_status(task_id)
            return {
                "task_id": task_id, 
                "status": status.get("status", "canceled"),
                "message": "Cancellation signal sent successfully"
            }
        else:
            # Task couldn't be cancelled
            status = task_manager.get_task_status(task_id)
            return {
                "task_id": task_id,
                "status": status.get("status", "unknown"),
                "message": "Could not cancel task - it may be completed, failed, or not found"
            }
    except Exception as e:
        logger.error(f"Error canceling task: {e}")
        raise HTTPException(status_code=500, detail=f"Error canceling task: {str(e)}")

# Cleanup route for manual cleanup if needed
@app.post("/cleanup")
async def cleanup_temp_files() -> Dict[str, str]:
    """Clean up temporary files that might have been left behind."""
    try:
        # Clean up uploads directory
        for file in os.listdir(UPLOAD_DIR):
            file_path = os.path.join(UPLOAD_DIR, file)
            if os.path.isfile(file_path):
                os.remove(file_path)
        return {"status": "cleanup complete"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Cleanup failed: {str(e)}")

if __name__ == "__main__":
    try:
        print("Backend running at port 8000")
        print("Use 'cloudflared tunnel --url http://localhost:8000' in another terminal")
        print("Then update your frontend with the *.trycloudflare.com URL")
        uvicorn.run(app, host="0.0.0.0", port=8000)
    except KeyboardInterrupt:
        print("Shutting down server...")