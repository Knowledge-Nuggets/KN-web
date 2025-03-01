import cv2
import numpy as np
from transformers import pipeline, AutoTokenizer, AutoModelForSeq2SeqLM
import torch
from moviepy import VideoFileClip
import os
import yt_dlp
from PIL import Image
from vosk import Model, KaldiRecognizer
import wave
import json
from youtube_transcript_api import YouTubeTranscriptApi
import re
import pydub
from pydub import AudioSegment
import glob
from torch.utils.data import Dataset, DataLoader
from concurrent.futures import ThreadPoolExecutor
from typing import List, Dict, Optional, Generator, Tuple, Any
import logging
from datetime import datetime
import timm
import gc
import time

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class RetryableError(Exception):
    """Errors that should be retried with backoff."""
    pass

class ModelLoadError(RetryableError):
    """Specific error for model loading failures."""
    pass

def retry_with_backoff(retries=3, backoff_in_seconds=1):
    """Decorator to retry functions with exponential backoff."""
    def decorator(func):
        def wrapper(*args, **kwargs):
            attempt = 0
            while attempt < retries:
                try:
                    return func(*args, **kwargs)
                except RetryableError as e:
                    attempt += 1
                    if attempt == retries:
                        raise
                    sleep_time = backoff_in_seconds * (2 ** (attempt - 1))
                    logger.warning(f"Attempt {attempt} failed: {str(e)}. Retrying in {sleep_time}s")
                    time.sleep(sleep_time)
            return None
        return wrapper
    return decorator

# Efficient frame processing function
def process_frame(frame: np.ndarray) -> torch.Tensor:
    """Process a video frame efficiently for model input."""
    # Use smaller dimensions to reduce memory footprint
    frame = cv2.resize(frame, (224, 224), interpolation=cv2.INTER_AREA)
    # Convert directly to tensor without intermediate numpy array
    frame_tensor = torch.from_numpy(frame).permute(2, 0, 1).float() / 255.0
    return frame_tensor.unsqueeze(0)

# Memory-efficient dataset for streaming frame processing
class StreamingFrameDataset(Dataset):
    """Memory-efficient dataset that doesn't store all frames in memory."""
    def __init__(self, frame_generator, transform=None):
        self.frame_generator = frame_generator
        self.transform = transform
        self.frames = []
        self.total_frames = 0
        
        # Count frames without storing them
        for _ in self.frame_generator():
            self.total_frames += 1
    
    def __len__(self) -> int:
        return self.total_frames
    
    def __getitem__(self, idx: int) -> torch.Tensor:
        # Regenerate frame at index (trading computation for memory)
        for i, frame in enumerate(self.frame_generator()):
            if i == idx:
                if self.transform:
                    return self.transform(frame)
                return torch.from_numpy(frame).permute(2, 0, 1).float() / 255.0
        raise IndexError(f"Index {idx} out of bounds")

# Memory-efficient collate function
def collate_frames(batch):
    """Efficiently collate frames for batched processing."""
    batch = [torch.tensor(b, dtype=torch.float32) if not isinstance(b, torch.Tensor) else b for b in batch]
    batch = [b.unsqueeze(0) if b.dim() == 3 else b for b in batch]
    return torch.cat(batch, dim=0)  # Use cat instead of stack to avoid extra copy

class EnhancedSummarizer:
    """Improved summarizer with better hallucination prevention and content classification."""
    
    def __init__(self, summary_length="medium"):
        """Initialize with configurable summary length."""
        self.summary_length = summary_length
        self.device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
        self.setup_torch_optimizations()
        self.load_models()
        
    def setup_torch_optimizations(self):
        """Setup torch optimizations for better performance."""
        if torch.cuda.is_available():
            torch.backends.cudnn.benchmark = True
            torch.backends.cuda.matmul.allow_tf32 = True
            torch.backends.cudnn.allow_tf32 = True
            torch.set_float32_matmul_precision('high')
            torch.cuda.empty_cache()
        
    @retry_with_backoff(retries=3)
    def load_models(self):
        """Load summarization and classification models with error handling."""
        try:
            # Use specific model loading for better control
            model_name = "facebook/bart-large-cnn"  # Better quality summarization model
            
            self.tokenizer = AutoTokenizer.from_pretrained(model_name)
            self.model = AutoModelForSeq2SeqLM.from_pretrained(model_name)
            
            # Move to appropriate device
            self.model = self.model.to(self.device)
            if torch.cuda.is_available():
                self.model = self.model.half()  # Use half precision on GPU
                
            # Load classifier for content categorization
            if torch.cuda.is_available():
                self.classifier = pipeline(
                    "zero-shot-classification",
                    model="facebook/bart-large-mnli",
                    device=0,
                    torch_dtype=torch.float16
                )
            else:
                self.classifier = pipeline(
                    "zero-shot-classification",
                    model="facebook/bart-large-mnli",
                    device=-1
                )
                
        except Exception as e:
            logger.error(f"Failed to load models: {e}")
            raise ModelLoadError(f"Model loading failed: {e}")
    
    def sanitize_text(self, text: str) -> str:
        """Clean and sanitize text to prevent hallucinations."""
        if not text:
            return ""
            
        # Remove URL-like patterns that might trigger hallucinations
        text = re.sub(r'https?://\S+', '[URL]', text)
        
        # Remove email-like patterns
        text = re.sub(r'\S+@\S+\.\S+', '[EMAIL]', text)
        
        # Remove excessive punctuation repetition
        text = re.sub(r'([.!?]){2,}', r'\1', text)
        
        # Clean up whitespace
        text = re.sub(r'\s+', ' ', text).strip()
        
        return text
    
    def prepare_data_stream(self, visual_content: str, transcription: str, captions: str, chunk_size: int = 1000) -> Generator[str, None, None]:
        """Prepare data in a streaming format with clear section markers."""
        # Sanitize inputs
        visual_content = self.sanitize_text(visual_content) if visual_content else ""
        transcription = self.sanitize_text(transcription) if transcription else ""
        captions = self.sanitize_text(captions) if captions else ""
        
        # Create a clearly formatted document with section markers
        combined_text = ""
        if visual_content:
            combined_text += f"VISUAL CONTENT:\n{visual_content}\n\n"
            
        # Prioritize YouTube captions if available as they're typically more reliable
        if captions and captions not in ["[No captions available]", ""]:
            combined_text += f"TRANSCRIPT:\n{captions}\n\n"
        elif transcription and transcription not in ["[No audio found]", "[Using YouTube captions instead]", ""]:
            combined_text += f"TRANSCRIPT:\n{transcription}\n\n"
            
        # Split into chunks for processing
        for i in range(0, len(combined_text), chunk_size):
            yield combined_text[i:i + chunk_size]
    
    def generate_summary(self, text_chunks_generator):
        """Generate a summary with length based on user preference."""
        try:
            # Collect chunks for processing
            chunks = list(text_chunks_generator)
            
            if not chunks:
                return "Could not generate summary due to insufficient content."
                
            combined_text = " ".join(chunks)
            
            length_settings = {
                "short": {
                    "max_length": 150, 
                    "min_length": 50,
                    "length_penalty": 1.5,  # Penalize longer outputs more
                    "num_beams": 3          # Fewer beams for shorter summaries
                },
                "medium": {
                    "max_length": 250, 
                    "min_length": 100,
                    "length_penalty": 1.0,  # Standard penalty
                    "num_beams": 4          # Standard beam search
                },
                "long": {
                    "max_length": 450, 
                    "min_length": 200,
                    "length_penalty": 0.8,  # Less penalty for length
                    "num_beams": 5          # More beams for better quality
                }
            }
            
            settings = length_settings.get(self.summary_length, length_settings["medium"])
            
            # Use direct model inference for better control
            inputs = self.tokenizer(combined_text, return_tensors="pt", truncation=True, max_length=1024)
            inputs = {k: v.to(self.device) for k, v in inputs.items()}
            
            # Generate with careful parameters to prevent hallucinations
            with torch.no_grad(), torch.amp.autocast('cuda' if torch.cuda.is_available() else 'cpu'):
                outputs = self.model.generate(
                    **inputs,
                    max_length=settings["max_length"],
                    min_length=settings["min_length"],
                    num_beams=settings["num_beams"],
                    length_penalty=settings["length_penalty"],
                    no_repeat_ngram_size=3,  # Avoid repetition
                    early_stopping=True,
                    do_sample=False  # Deterministic generation
                )
            
            # Decode the summary
            summary = self.tokenizer.decode(outputs[0], skip_special_tokens=True)
            
            # Post-processing to ensure quality
            summary = self.sanitize_text(summary)
            
            # Verify the summary doesn't contain suspicious patterns
            if re.search(r'https?://\S+', summary) or re.search(r'go to:', summary, re.IGNORECASE):
                logger.warning("Suspicious patterns detected in summary, regenerating")
                
                # Fallback to more constrained generation
                with torch.no_grad():
                    outputs = self.model.generate(
                        **inputs,
                        max_length=settings["max_length"] // 2,
                        min_length=settings["min_length"] // 2,
                        num_beams=2,
                        no_repeat_ngram_size=5,
                        early_stopping=True,
                        do_sample=False
                    )
                
                summary = self.tokenizer.decode(outputs[0], skip_special_tokens=True)
                summary = self.sanitize_text(summary)
            
            return summary
            
        except Exception as e:
            logger.error(f"Summary generation failed: {e}")
            return "Summary generation failed due to technical issues."
    
    def classify_content(self, text_chunks_generator: Generator[str, None, None]) -> Dict:
        """Classify content type with improved categories."""
        backup_categories = ["general", "educational"]
        
        try:
            # Process sample of content for classification
            sample_text = ""
            count = 0
            max_samples = 3  # Limit chunks to analyze
            
            for chunk in text_chunks_generator:
                if count < max_samples:
                    sample_text += chunk + " "
                    count += 1
                else:
                    break
            
            # Use more relevant video-focused categories
            categories = [
                "educational", "tutorial", "lecture", "documentary",
                "entertainment", "vlog", "gaming", "comedy", 
                "news", "analysis", "review", "sports"
            ]
            
            # Sanitize text before classification
            sample_text = self.sanitize_text(sample_text)
            
            results = self.classifier(
                sample_text,
                categories,
                multi_label=True
            )
            
            return {
                'primary_type': results['labels'][0],
                'confidence': results['scores'][0],
                'additional_types': [
                    {'label': label, 'score': score}
                    for label, score in zip(results['labels'][1:4], results['scores'][1:4])
                    if score > 0.2  # Only include reasonably confident secondary classifications
                ]
            }
                
        except Exception as e:
            logger.error(f"Classification failed, using fallback: {e}")
            return {
                'primary_type': backup_categories[0],
                'confidence': 0.5,
                'additional_types': [{'label': backup_categories[1], 'score': 0.3}]
            }
    
    def extract_key_elements(self, visual_content: str) -> List[str]:
        """Extract meaningful key elements from visual analysis."""
        try:
            elements = []
            
            # Extract elements from visual content descriptions
            if visual_content:
                # Split by newlines or commas to find distinct elements
                content_parts = re.split(r'[,\n]', visual_content)
                
                for part in content_parts:
                    # Extract frequency information if available
                    match = re.search(r'(.+?):\s*(\d+)\s*occurrences', part)
                    if match:
                        element = match.group(1).strip()
                        count = int(match.group(2))
                        if element and count > 0:
                            elements.append(f"{element} ({count} scenes)")
                    else:
                        # Just add the cleaned element if it's substantial
                        element = part.strip()
                        if element and len(element) > 3:
                            elements.append(element)
            
            # Deduplicate and take top 5
            unique_elements = []
            for e in elements:
                normalized = e.lower()
                if not any(normalized in u.lower() for u in unique_elements):
                    unique_elements.append(e)
            
            return unique_elements[:5]
            
        except Exception as e:
            logger.error(f"Element extraction error: {e}")
            return []

    def interpret_content(self, visual_content: str, transcription: str, captions: str) -> Dict:
        """Create a comprehensive interpretation of the video content."""
        try:
            # Create data stream for processing
            text_chunks_generator = self.prepare_data_stream(visual_content, transcription, captions)
            
            # Generate summary from the prepared data
            summary = self.generate_summary(text_chunks_generator)
            
            # Recreate the generator for classification since it was consumed
            text_chunks_generator = self.prepare_data_stream(visual_content, transcription, captions)
            
            # Get content classification
            classification = self.classify_content(text_chunks_generator)
            
            # Extract key visual elements
            visual_elements = self.extract_key_elements(visual_content)
            
            return {
                'summary': summary,
                'content_type': classification['primary_type'],
                'type_confidence': classification['confidence'],
                'additional_types': classification['additional_types'],
                'visual_elements': visual_elements
            }
            
        except Exception as e:
            logger.error(f"Content interpretation failed: {e}")
            return {
                'summary': "Analysis failed due to technical issues.",
                'content_type': "unknown",
                'type_confidence': 0.0,
                'additional_types': [],
                'visual_elements': []
            }


class OptimizedVideoBot:
    """Enhanced video analysis bot with improved summarization and content detection."""
    
    def __init__(self, sample_rate: int = 10, summary_length: str = "medium"):
        """Initialize the video analysis bot with configurable parameters."""
        self.device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
        self.setup_torch_optimizations()
        
        # Configuration parameters
        self.sample_rate = sample_rate
        self.summary_length = summary_length
        self.batch_size = 16
        self.chunk_size = 65536
        self.num_threads = 8
        
        # Analysis data storage
        self.key_frames_indices = []
        self.key_frames = []
        self.transcription = ""
        self.youtube_captions = ""
        
        # Lazy load models only when needed
        self.models_initialized = False
        
        # Setup temporary directory for processing
        self.setup_temp_directory()

    def setup_torch_optimizations(self):
        """Setup torch optimizations for better performance."""
        torch.backends.cudnn.benchmark = True
        if torch.cuda.is_available():
            torch.backends.cuda.matmul.allow_tf32 = True
            torch.backends.cudnn.allow_tf32 = True
            torch.cuda.empty_cache()
            torch.set_float32_matmul_precision('high')

    @retry_with_backoff(retries=3)
    def initialize_models(self):
        """Lazy initialization of models when needed."""
        if self.models_initialized:
            return
            
        try:
            # Scene detection model
            self.scene_detector = cv2.createBackgroundSubtractorMOG2(
                history=100,  # Reduced history
                varThreshold=50,
                detectShadows=False
            )
            
            # Image analysis model
            self.image_analyzer = self.load_image_analyzer()
            if torch.cuda.is_available():
                # Use half precision to save memory
                self.image_analyzer = self.image_analyzer.half().to(self.device)
            else:
                self.image_analyzer = self.image_analyzer.to(self.device)
            
            # Speech recognition model
            model_path = os.path.join(
                os.path.dirname(os.path.abspath(__file__)),
                "models",
                "vosk-model-en-us-0.22"
            )
            self.vosk_model = Model(model_path)
            
            # Initialize the enhanced summarizer
            self.summarizer = EnhancedSummarizer(summary_length=self.summary_length)
            
            self.models_initialized = True
            
        except Exception as e:
            raise ModelLoadError(f"Model initialization failed: {e}")

    @staticmethod
    def load_image_analyzer():
        """Load an efficient image analysis model."""
        model = timm.create_model('efficientnet_b2', pretrained=True)
        model.eval()
        return model

    def setup_temp_directory(self):
        """Setup temporary directory for processing files."""
        self.temp_dir = os.path.join(os.getcwd(), "temp_processing")
        os.makedirs(self.temp_dir, exist_ok=True)

    def get_temp_path(self, prefix: str, suffix: str) -> str:
        """Generate a unique temporary file path."""
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        return os.path.join(
            self.temp_dir,
            f"{prefix}_{timestamp}_{os.getpid()}{suffix}"
        )

    def get_youtube_captions(self, url: str) -> str:
        """Extract captions from a YouTube video."""
        try:
            # Extract video ID from various YouTube URL formats
            video_id = re.search(r'(?:v=|\/)([0-9A-Za-z_-]{11}).*', url)
            if not video_id:
                return "[Could not extract video ID]"
            
            # Attempt to get captions
            transcript_list = YouTubeTranscriptApi.list_transcripts(video_id.group(1))
            try:
                # Try to get manual English captions first
                transcript = transcript_list.find_transcript(['en'])
            except:
                # Fall back to auto-generated captions
                transcript = transcript_list.find_generated_transcript(['en'])
            
            # Fetch and combine captions
            captions = transcript.fetch()
            return ' '.join(entry['text'] for entry in captions)
            
        except Exception as e:
            logger.error(f"Caption error: {e}")
            return "[No captions available]"

    def download_video(self, url: str) -> str:
        """Download a YouTube video efficiently."""
        output_path = self.get_temp_path("video", ".mp4")
        ydl_opts = {
            'format': 'best[height<=480]',  # Lower resolution to save bandwidth and disk space
            'outtmpl': output_path,
            'quiet': True
        }
        
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            ydl.download([url])
        
        return output_path

    def frame_generator(self, cap) -> Generator[np.ndarray, None, None]:
        """Generate frames from video capture with error handling for corrupt frames."""
        frame_idx = 0
        error_count = 0
        max_errors = 10
        
        while error_count < max_errors:
            try:
                ret, frame = cap.read()
                if not ret:
                    break
                    
                if frame_idx % self.sample_rate == 0:
                    yield frame
                    
                frame_idx += 1
            except Exception as e:
                logger.warning(f"Error reading frame {frame_idx}: {e}")
                error_count += 1
                # Try to recover by grabbing next frame
                cap.grab()
                frame_idx += 1

    def process_frames_batch(self, frame_generator) -> List[Dict]:
        """Process frames in batches efficiently."""
        try:
            frames = []
            count = 0
            max_batch = 16  # Batch size for processing
            
            # Process frames in controlled batches
            for frame in frame_generator():
                frames.append(frame)
                count += 1
                
                if count >= max_batch:
                    batch_tensors = []
                    for f in frames:
                        # Resize and normalize
                        f_resized = cv2.resize(f, (224, 224), interpolation=cv2.INTER_AREA)
                        f_rgb = cv2.cvtColor(f_resized, cv2.COLOR_BGR2RGB)
                        f_tensor = torch.from_numpy(f_rgb).permute(2, 0, 1).float() / 255.0
                        
                        if torch.cuda.is_available():
                            f_tensor = f_tensor.half()  # Use half precision on GPU
                            
                        batch_tensors.append(f_tensor)
                    
                    # Free memory
                    frames = []
                    
                    # Stack tensors
                    batch = torch.stack(batch_tensors).to(self.device)
                    
                    # Process batch
                    with torch.no_grad():
                        outputs = self.image_analyzer(batch)
                        
                    # Clean up batch
                    del batch_tensors
                    del batch
                    torch.cuda.empty_cache()
                    count = 0
            
            # Process any remaining frames
            if frames:
                batch_tensors = []
                for f in frames:
                    f_resized = cv2.resize(f, (224, 224), interpolation=cv2.INTER_AREA)
                    f_rgb = cv2.cvtColor(f_resized, cv2.COLOR_BGR2RGB)
                    f_tensor = torch.from_numpy(f_rgb).permute(2, 0, 1).float() / 255.0
                    
                    if torch.cuda.is_available():
                        f_tensor = f_tensor.half()
                        
                    batch_tensors.append(f_tensor)
                
                batch = torch.stack(batch_tensors).to(self.device)
                
                with torch.no_grad():
                    outputs = self.image_analyzer(batch)
                
                del batch_tensors
                del batch
                torch.cuda.empty_cache()
            
            return []  # We're just processing for scene detection, not returning results
            
        except Exception as e:
            logger.error(f"Batch processing error: {e}")
            return []

    def process_video(self, video_path: str, is_youtube_url: bool = False) -> None:
        """Process video file efficiently from either URL or local path."""
        logger.info(f"Processing video: {'YouTube URL' if is_youtube_url else 'Local file'}")
        try:
            # Initialize models only when needed
            self.initialize_models()
            
            # Download YouTube video if needed
            downloaded_video = False
            if is_youtube_url:
                self.youtube_captions = self.get_youtube_captions(video_path)
                video_path = self.download_video(video_path)
                downloaded_video = True
            else:
                if not os.path.exists(video_path):
                    raise ValueError(f"Video file not found: {video_path}")
                self.youtube_captions = ""
                downloaded_video = False
            
            # Open video capture with error handling flags
            cap = cv2.VideoCapture(video_path)
            # Set error mode flags to handle corrupted frames
            cap.set(cv2.CAP_PROP_FOURCC, cv2.VideoWriter_fourcc('H', '2', '6', '4'))
            cap.set(cv2.CAP_PROP_HW_ACCELERATION, cv2.VIDEO_ACCELERATION_ANY)
            
            if not cap.isOpened():
                raise ValueError("Could not open video file")
            
            # Video metadata
            fps = cap.get(cv2.CAP_PROP_FPS)
            total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
            
            # Initialize tracking variables
            self.key_frames_indices = [0]
            self.key_frames = []
            prev_frame = None
            frame_idx = 0
            
            # Process frames with limits to manage memory
            max_total_frames = min(total_frames, 20000)
            max_key_frames = 100  # Maximum number of key frames to store
            
            # Stream frames instead of storing them all
            for idx, frame in enumerate(self.frame_generator(cap)):
                if idx >= max_total_frames:
                    break
                    
                # Convert to grayscale for scene detection
                gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
                
                # Scene change detection
                if prev_frame is not None:
                    # Calculate difference between frames
                    diff = cv2.absdiff(gray, prev_frame)
                    mean_diff = np.mean(diff)
                    
                    # If significant difference detected, mark as key frame
                    if mean_diff > 30:
                        self.key_frames_indices.append(frame_idx)
                        
                        # Store only a subset of frames to save memory
                        if len(self.key_frames) < max_key_frames:
                            # Store a smaller version of the frame
                            small_frame = cv2.resize(frame, (112, 112))
                            self.key_frames.append(small_frame)
                
                prev_frame = gray
                frame_idx += 1
                
                # Progress logging and memory management
                if frame_idx % 100 == 0:
                    logger.info(f"Processed {frame_idx}/{max_total_frames} frames")
                    # Force garbage collection periodically
                    gc.collect()
                    if torch.cuda.is_available():
                        torch.cuda.empty_cache()
            
            # Process audio only if YouTube captions aren't available
            if is_youtube_url and self.youtube_captions and self.youtube_captions != "[No captions available]":
                logger.info("Using YouTube captions, skipping audio transcription")
                self.transcription = "[Using YouTube captions instead]"
            else:
                # Process audio in a separate thread
                with ThreadPoolExecutor(max_workers=1) as executor:
                    audio_future = executor.submit(self.process_audio, video_path)
                    self.transcription = audio_future.result()
            
            # Close video capture and clean up
            cap.release()
            
            # Remove temporary YouTube download
            if is_youtube_url and downloaded_video and os.path.exists(video_path):
                os.remove(video_path)
            
            # Logging
            logger.info(f"Video processing complete. Total scenes: {len(self.key_frames_indices)}")
            logger.info(f"Total key frames stored: {len(self.key_frames)}")
            
        except Exception as e:
            logger.error(f"Video processing error: {e}")
            # Cleanup
            if 'cap' in locals():
                cap.release()
            if is_youtube_url and downloaded_video and os.path.exists(video_path):
                os.remove(video_path)
                
    def process_audio(self, video_path: str) -> str:
        """Process audio from video file and generate transcription."""
        try:
            # Extract audio efficiently - only load audio stream
            audio_path = self.get_temp_path("audio", ".wav")
            
            # Process audio in chunks to save memory
            try:
                video = VideoFileClip(video_path, audio_buffersize=65536, audio=True, audio_fps=16000)
                
                if video.audio is None:
                    return "[No audio found]"
                    
                # Use lower quality audio to reduce processing time
                video.audio.write_audiofile(
                    audio_path,
                    fps=16000,
                    nbytes=2,
                    codec='pcm_s16le',
                    ffmpeg_params=["-ac", "1", "-ar", "16000", "-sample_fmt", "s16"]
                )
            finally:
                # Explicitly close video to free memory
                if 'video' in locals():
                    video.close()
                    del video
                
            # Process audio in chunks for transcription
            results = []
            with wave.open(audio_path, 'rb') as wf:
                rec = KaldiRecognizer(self.vosk_model, 16000)
                rec.SetWords(False)
                rec.SetPartialWords(False)
                
                # Process audio in smaller chunks
                chunk_size = 8192
                while True:
                    data = wf.readframes(chunk_size)
                    if len(data) == 0:
                        break
                    if rec.AcceptWaveform(data):
                        results.append(json.loads(rec.Result())['text'])
                    
                    # Force garbage collection periodically
                    if len(results) % 10 == 0:
                        gc.collect()
                        
            # Clean up temp files immediately
            if os.path.exists(audio_path):
                os.remove(audio_path)
                
            # Combine transcription results
            transcription = ' '.join(results)
            
            # Post-process transcription to fix common issues
            transcription = re.sub(r'\s+', ' ', transcription).strip()
            transcription = re.sub(r'(\w)\.(\w)', r'\1. \2', transcription)
            
            return transcription

        except Exception as e:
            logger.error(f"Audio processing error: {e}")
            return "[Audio processing error]"
        finally:
            # Ensure memory is freed
            if 'audio' in locals():
                del audio
            gc.collect()
            if torch.cuda.is_available():
                torch.cuda.empty_cache()

    def analyze_scenes(self) -> List[Dict]:
        """Analyze scenes from key frames to extract visual information."""
        if len(self.key_frames_indices) < 2:
            logger.warning("Not enough scenes detected for analysis.")
            return []

        try:
            scene_analyses = []
            for i, frame in enumerate(self.key_frames):
                if i >= len(self.key_frames_indices):
                    break
                    
                # Process one frame at a time to minimize memory usage
                try:
                    # Resize to proper dimensions
                    frame_resized = cv2.resize(frame, (224, 224), interpolation=cv2.INTER_AREA)
                    frame_rgb = cv2.cvtColor(frame_resized, cv2.COLOR_BGR2RGB)
                    frame_tensor = torch.from_numpy(frame_rgb).permute(2, 0, 1).float() / 255.0
                    
                    if torch.cuda.is_available():
                        frame_tensor = frame_tensor.half()
                        
                    frame_tensor = frame_tensor.to(self.device).unsqueeze(0)
                    
                    with torch.no_grad():
                        outputs = self.image_analyzer(frame_tensor)
                        
                    # Process outputs
                    if isinstance(outputs, torch.Tensor):
                        top_k = torch.topk(outputs, k=1)
                        label = f"class_{top_k.indices.item()}"
                        confidence = float(top_k.values.item())
                    else:
                        label = outputs[0]['label']
                        confidence = float(outputs[0]['score'])
                    
                    scene_analyses.append({
                        'start_frame': self.key_frames_indices[i],
                        'end_frame': self.key_frames_indices[i+1] if i+1 < len(self.key_frames_indices) else -1,
                        'visual_content': label,
                        'confidence': confidence
                    })
                    
                    # Clean up
                    del frame_tensor
                    if torch.cuda.is_available():
                        torch.cuda.empty_cache()
                    
                except Exception as frame_error:
                    logger.error(f"Frame analysis error: {frame_error}")
                    continue

            return scene_analyses
        
        except Exception as e:
            logger.error(f"Scene analysis error: {e}")
            return []

    def generate_summary(self) -> Dict:
        """Generate a summary of the video content."""
        scene_analyses = self.analyze_scenes()
        
        # Count scene types without storing all scene data
        scene_counts = {}
        for scene in scene_analyses:
            content = scene['visual_content']
            scene_counts[content] = scene_counts.get(content, 0) + 1

        # Ensure valid scene data
        if not scene_counts:
            logger.warning("No valid scenes detected.")
            return {
                'scene_frequency': {},
                'transcription': self.transcription,
                'youtube_captions': self.youtube_captions
            }

        sorted_scenes = dict(
            sorted(scene_counts.items(), key=lambda x: x[1], reverse=True)
        )

        # Return summary data
        return {
            'scene_frequency': sorted_scenes,
            'transcription': self.transcription,
            'youtube_captions': self.youtube_captions
        }

    def generate_interpreted_summary(self) -> Dict:
        """Generate an interpreted summary with analysis of content."""
        summary = self.generate_summary()
        
        # Format visual content for interpretation
        visual_content = "\n".join([
            f"{content}: {count} occurrences" 
            for content, count in summary['scene_frequency'].items()
        ])
        
        # Determine which transcript to use for interpretation
        transcript_to_use = summary['youtube_captions']
        transcript_source = "YouTube captions"
        
        # If YouTube captions aren't available or are empty, use audio transcription
        if not transcript_to_use or transcript_to_use in ["[No captions available]", ""]:
            transcript_to_use = summary['transcription']
            transcript_source = "audio transcription"
        
        logger.info(f"Using {transcript_source} for content interpretation")
        
        # Create interpretation using enhanced summarizer
        interpretation = self.summarizer.interpret_content(
            visual_content,
            summary['transcription'],  
            summary['youtube_captions']
        )
        
        # Create summary with transcriptions included
        interpreted_summary = {
            'narrative': interpretation['summary'],
            'content_type': interpretation['content_type'],
            'type_confidence': interpretation['type_confidence'],
            'additional_types': interpretation.get('additional_types', []),
            'main_visual_elements': interpretation.get('visual_elements', []),
            'technical_stats': {
                'total_scenes': len(self.key_frames_indices),
                'transcript_source': transcript_source,
                'has_audio': self.transcription != "[No audio found]" and self.transcription != "[Using YouTube captions instead]",
                'has_captions': self.youtube_captions != "[No captions available]"
            },
            'transcriptions': {
                'youtube_captions': summary['youtube_captions'],
                'audio_transcription': summary['transcription']
            }
        }
        
        # Log summary info
        logger.info("\nINTERPRETED SUMMARY")
        logger.info("="*50)
        
        logger.info(f"\nPRIMARY CLASSIFICATION:")
        logger.info(f"• Type: {interpreted_summary['content_type'].title()}")
        logger.info(f"• Confidence: {interpreted_summary['type_confidence']:.2f}")
        
        if interpreted_summary['additional_types']:
            logger.info("\nADDITIONAL CATEGORIES:")
            for type_info in interpreted_summary['additional_types']:
                logger.info(f"• {type_info['label'].title()} (Confidence: {type_info['score']:.2f})")
        
        logger.info("\nVISUAL CONTENT ANALYSIS:")
        for element in interpreted_summary['main_visual_elements']:
            logger.info(f"• {element}")
        
        logger.info("\nCONTENT SUMMARY:")
        logger.info(interpreted_summary['narrative'])
        
        # Display which transcript was used
        logger.info(f"\nTRANSCRIPT USED: {transcript_source}")
        
        # Clear memory-intensive data before returning
        self.key_frames = []
        gc.collect()
        if torch.cuda.is_available():
            torch.cuda.empty_cache()
            
        return interpreted_summary
        
    def cleanup(self):
        """Clean up resources and temporary files."""
        try:
            # Clear cached frames and scene data
            self.key_frames = []
            self.key_frames_indices = []
            
            # Clean up temp directory
            if os.path.exists(self.temp_dir):
                for file in glob.glob(os.path.join(self.temp_dir, "*")):
                    try:
                        os.remove(file)
                    except Exception as e:
                        logger.error(f"Error removing {file}: {e}")
                try:
                    os.rmdir(self.temp_dir)
                except:
                    pass
            
            # Free GPU memory
            if torch.cuda.is_available():
                torch.cuda.empty_cache()
            
            # Force garbage collection
            gc.collect()
                
        except Exception as e:
            logger.error(f"Cleanup error: {e}")


def main():
    """Command-line interface for video analysis."""
    try:
        logger.info("Initializing Video Analysis Bot...")
        bot = OptimizedVideoBot(sample_rate=8)  # Sample more frames for better accuracy
        
        video_url = input("\nEnter YouTube URL or local file path: ")
        is_youtube = video_url.startswith(('http://', 'https://'))
        
        logger.info("\nStarting video analysis...")
        logger.info("Processing video and extracting key frames...")
        bot.process_video(video_url, is_youtube_url=is_youtube)
        
        logger.info("Analyzing scenes...")
        summary = bot.generate_summary()
        
        logger.info("Creating interpreted summary...")
        interpreted_summary = bot.generate_interpreted_summary()
        
        # Save transcriptions to separate files for easy access
        if interpreted_summary['transcriptions']['youtube_captions'] != "[No captions available]":
            with open("youtube_captions.txt", "w", encoding="utf-8") as f:
                f.write(interpreted_summary['transcriptions']['youtube_captions'])
            logger.info("YouTube captions saved to youtube_captions.txt")
            
        if interpreted_summary['transcriptions']['audio_transcription'] != "[No audio found]":
            with open("audio_transcription.txt", "w", encoding="utf-8") as f:
                f.write(interpreted_summary['transcriptions']['audio_transcription'])
            logger.info("Audio transcription saved to audio_transcription.txt")
        
        logger.info("\nCleaning up...")
        bot.cleanup()
        
        logger.info("\nAnalysis complete!")
        return interpreted_summary
        
    except KeyboardInterrupt:
        logger.info("\nAnalysis interrupted by user.")
        try:
            bot.cleanup()
        except:
            pass
    except Exception as e:
        logger.error(f"Analysis failed: {e}")
        try:
            bot.cleanup()
        except:
            pass
        raise

if __name__ == "__main__":
    main()