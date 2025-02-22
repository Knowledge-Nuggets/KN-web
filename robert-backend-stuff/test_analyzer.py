import cv2
import numpy as np
from transformers import pipeline
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
from typing import List, Dict
import logging
from datetime import datetime
from torchvision import transforms
from datasets import Dataset
import timm
import gc

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class RetryableError(Exception):
    pass

class ModelLoadError(RetryableError):
    pass

def retry_with_backoff(retries=3, backoff_in_seconds=1):
    def decorator(func):
        def wrapper(*args, **kwargs):
            import time
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

def process_frame(frame: torch.Tensor) -> torch.Tensor:
    # Resize frame to match model input requirements
    frame = cv2.resize(frame.numpy(), (224, 224), interpolation=cv2.INTER_AREA)
    frame_tensor = torch.from_numpy(frame).permute(2, 0, 1).float() / 255.0
    return frame_tensor.unsqueeze(0)


class FrameDataset(Dataset):
    def __init__(self, frames: List[np.ndarray]):
        self.frames = frames
    
    def __len__(self) -> int:
        return len(self.frames)
    
    def __getitem__(self, idx: int) -> torch.Tensor:
        if isinstance(idx, (list, tuple)):
            return [self.__getitem__(i) for i in idx]
            
        frame = self.frames[idx]
        frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        frame_tensor = torch.from_numpy(frame_rgb).float() / 255.0
        
        # Normalize manually
        frame_tensor = transforms.Normalize(
            mean=[0.485, 0.456, 0.406],
            std=[0.229, 0.224, 0.225]
        )(frame_tensor.permute(2, 0, 1).unsqueeze(0))
        
        return frame_tensor.squeeze(0)

def collate_frames(batch):
    batch = [torch.tensor(b, dtype=torch.float32) if not isinstance(b, torch.Tensor) else b for b in batch]
    
    # Ensure all tensors have the same shape
    batch = [b.unsqueeze(0) if b.dim() == 3 else b for b in batch]
    
    return torch.stack(batch)



class OptimizedHuggingFaceSummarizer:
    def __init__(self):
        self.device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
        self.setup_torch_optimizations()
        self.load_models()
        
    def setup_torch_optimizations(self):
        if torch.cuda.is_available():
            torch.backends.cudnn.benchmark = True
            torch.backends.cuda.matmul.allow_tf32 = True
            torch.backends.cudnn.allow_tf32 = True
            torch.set_float32_matmul_precision('high')
            torch.cuda.empty_cache()
        
    @retry_with_backoff(retries=3)
    def load_models(self):
        try:
            self.summarizer = pipeline(
                "summarization",
                model="sshleifer/distilbart-cnn-12-6",
                device=0 if torch.cuda.is_available() else -1,
                batch_size=4
            )
        except Exception as e:
            logger.error(f"Failed to load summarizer: {e}")
            raise ModelLoadError(f"Summarizer load failed: {e}")

        try:
            self.classifier = pipeline(
                "zero-shot-classification",
                model="facebook/bart-large-mnli",
                device=0 if torch.cuda.is_available() else -1
            )
        except Exception as e:
            logger.error(f"Failed to load classifier: {e}")
            raise ModelLoadError(f"Classifier load failed: {e}")

    def prepare_data(self, visual_content: str, transcription: str, captions: str) -> Dataset:
        data = []
        chunk_size = 500
        
        def chunk_text(text: str) -> List[str]:
            return [text[i:i + chunk_size] for i in range(0, len(text), chunk_size)]
        
        visual_chunks = chunk_text(visual_content)
        transcription_chunks = chunk_text(transcription)
        caption_chunks = chunk_text(captions)
        
        max_chunks = max(len(visual_chunks), len(transcription_chunks), len(caption_chunks))
        
        for i in range(max_chunks):
            chunk = {
                'visual': visual_chunks[min(i, len(visual_chunks)-1)],
                'audio': transcription_chunks[min(i, len(transcription_chunks)-1)],
                'captions': caption_chunks[min(i, len(caption_chunks)-1)]
            }
            data.append(chunk)
            
        return Dataset.from_dict({
            'text': [
                f"Visual: {d['visual']}\nAudio: {d['audio']}\nCaptions: {d['captions']}"
                for d in data
            ]
        })

    @retry_with_backoff(retries=2)
    def generate_summary(self, dataset: Dataset) -> str:
        try:
            with torch.amp.autocast("cuda"):
                summaries = []
                for i in range(0, len(dataset), 4):
                    batch = dataset[i:i+4]['text']
                    summary_output = self.summarizer(
                        batch,
                        max_length=1000,
                        min_length=100,
                        do_sample=True,
                        num_beams=4,  # Beam search for better coherence
                        early_stopping=True,
                        truncation=True
                    )
                    summaries.extend(s['summary_text'] for s in summary_output)
                
                combined_summary = ' '.join(summaries)
                
                final_summary = self.summarizer(
                    combined_summary,
                    max_length=300,
                    min_length=100,
                    do_sample=True,
                    num_beams=4,
                    early_stopping=True,
                    truncation=True
                )[0]['summary_text']
                
                # Post-processing to improve readability
                import re
                final_summary = re.sub(r'\s+', ' ', final_summary)  # Remove extra whitespace
                final_summary = final_summary.capitalize()  # Capitalize first letter
                
                return final_summary
        
        except Exception as e:
            logger.error(f"Summary generation failed: {e}")
            return "Detailed summary could not be generated."

    def classify_content(self, dataset: Dataset) -> Dict:
        backup_categories = ["general", "other"]
        
        try:
            with torch.amp.autocast("cuda"):
                full_text = ' '.join(dataset['text'])
                categories = [
                    "educational", "entertainment", "news", 
                    "tutorial", "vlog", "documentary",
                    "gaming", "music", "sports", "comedy",
                    "medical", "technology", "cooking",
                    "travel", "fashion", "lifestyle",
                    "informational", "review", "reaction",
                    "business", "travel", "history",
                    "science", "art", "culture"
        
                ]
                
                results = self.classifier(
                    full_text,
                    categories,
                    multi_label=True
                )
                
                return {
                    'primary_type': results['labels'][0],
                    'confidence': results['scores'][0],
                    'additional_types': [
                        {'label': label, 'score': score}
                        for label, score in zip(results['labels'][1:3], results['scores'][1:3])
                    ]
                }
                
        except Exception as e:
            logger.error(f"Classification failed, using fallback: {e}")
            return {
                'primary_type': backup_categories[0],
                'confidence': 0.5,
                'additional_types': [{'label': backup_categories[1], 'score': 0.3}]
            }

    def interpret_content(self, visual_content: str, transcription: str, captions: str) -> Dict:
        try:
            dataset = self.prepare_data(visual_content, transcription, captions)
            summary = self.generate_summary(dataset)
            classification = self.classify_content(dataset)
            
            return {
                'summary': summary,
                'content_type': classification['primary_type'],
                'type_confidence': classification['confidence'],
                'additional_types': classification['additional_types']
            }
            
        except Exception as e:
            logger.error(f"Content interpretation failed: {e}")
            return {
                'summary': "Analysis failed due to technical issues.",
                'content_type': "unknown",
                'type_confidence': 0.0,
                'additional_types': []
            }

class OptimizedVideoBot:
    def __init__(self, sample_rate: int = 2):
        self.device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
        self.setup_torch_optimizations()
        self.initialize_models()
        
        self.sample_rate = sample_rate
        self.batch_size = 32
        self.chunk_size = 131072
        self.num_threads = 16
        
        self.scenes = []
        self.frames = []
        self.transcription = ""
        self.youtube_captions = ""
        
        self.setup_temp_directory()

    def setup_torch_optimizations(self):
        torch.backends.cudnn.benchmark = True
        torch.backends.cuda.matmul.allow_tf32 = True
        torch.backends.cudnn.allow_tf32 = True
        if torch.cuda.is_available():
            torch.cuda.empty_cache()
            torch.set_float32_matmul_precision('high')

    @retry_with_backoff(retries=3)
    def initialize_models(self):
        try:
            self.scene_detector = cv2.createBackgroundSubtractorMOG2(
                history=150,
                varThreshold=50,
                detectShadows=False
            )
            
            self.image_analyzer = self.load_image_analyzer()
            self.image_analyzer = self.image_analyzer.to(self.device)
            
            model_path = os.path.join(
                os.path.dirname(os.path.abspath(__file__)),
                "models",
                "vosk-model-en-us-0.22"
            )
            self.vosk_model = Model(model_path)
            
            self.hf_summarizer = OptimizedHuggingFaceSummarizer()
            
        except Exception as e:
            raise ModelLoadError(f"Model initialization failed: {e}")

    @staticmethod
    def load_image_analyzer():
        model = timm.create_model('vit_base_patch16_224', pretrained=True)
        model.eval()
        return model

    def setup_temp_directory(self):
        self.temp_dir = os.path.join(os.getcwd(), "temp_processing")
        os.makedirs(self.temp_dir, exist_ok=True)

    def get_temp_path(self, prefix: str, suffix: str) -> str:
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        return os.path.join(
            self.temp_dir,
            f"{prefix}_{timestamp}_{os.getpid()}{suffix}"
        )

    def get_youtube_captions(self, url: str) -> str:
        try:
            video_id = re.search(r'(?:v=|\/)([0-9A-Za-z_-]{11}).*', url)
            if not video_id:
                return "[Could not extract video ID]"
            
            transcript_list = YouTubeTranscriptApi.list_transcripts(video_id.group(1))
            try:
                transcript = transcript_list.find_transcript(['en'])
            except:
                transcript = transcript_list.find_generated_transcript(['en'])
            
            captions = transcript.fetch()
            return ' '.join(entry['text'] for entry in captions)
        except Exception as e:
            logger.error(f"Caption error: {e}")
            return "[No captions available]"

    def download_video(self, url: str) -> str:
        output_path = self.get_temp_path("video", ".mp4")
        ydl_opts = {
            'format': 'best[height<=720]',
            'outtmpl': output_path,
            'quiet': True
        }
        
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            ydl.download([url])
        return output_path

    def process_frames_batch(self, frames: List[np.ndarray]) -> List[Dict]:
        try:
            dataset = FrameDataset(frames)
            dataloader = DataLoader(
                dataset,
                batch_size=self.batch_size,
                num_workers=0,
                pin_memory=True,
                collate_fn=collate_frames
            )

            results = []
            with torch.no_grad():
                for batch in dataloader:
                    if batch.numel() == 0:  # Skip empty batches
                        continue

                    batch = batch.to(self.device)
                    
                    # Ensure correct tensor shape
                    if batch.dim() == 3:
                        batch = batch.unsqueeze(0)
                    
                    try:
                        outputs = self.image_analyzer(batch)
                        
                        # Normalize outputs if needed
                        if isinstance(outputs, torch.Tensor):
                            probs = torch.softmax(outputs, dim=1)
                            top_probs, top_classes = probs.topk(1, dim=1)
                            
                            for prob, cls in zip(top_probs, top_classes):
                                results.append({
                                    'label': f'class_{cls.item()}',
                                    'score': float(prob.item())
                                })
                        
                    except Exception as model_error:
                        logger.error(f"Model inference error: {model_error}")
                
                return results
            
        except Exception as e:
            logger.error(f"Batch processing error: {e}")
            return []


    def process_video(self, video_path: str, is_youtube_url: bool = False) -> None:
        try:
            # Download YouTube video if needed
            if is_youtube_url:
                self.youtube_captions = self.get_youtube_captions(video_path)
                video_path = self.download_video(video_path)
            
            # Open video capture
            cap = cv2.VideoCapture(video_path)
            if not cap.isOpened():
                raise ValueError("Could not open video file")
            
            # Video metadata
            fps = cap.get(cv2.CAP_PROP_FPS)
            total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
            
            # Initialize tracking variables
            self.scenes = [0]
            self.frames = []
            prev_frame = None
            frames_buffer = []
            max_buffer_size = 100
            frame_idx = 0
            
            # Limit total frames to prevent memory issues
            max_total_frames = min(total_frames, 20000)
            
            # Parallel processing setup
            with ThreadPoolExecutor(max_workers=self.num_threads) as executor:
                while frame_idx < max_total_frames:
                    ret, frame = cap.read()
                    if not ret:
                        break
                    
                    # Sample frames
                    if frame_idx % self.sample_rate == 0:
                        # Convert to grayscale for scene detection
                        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
                        
                        # Scene change detection
                        if prev_frame is not None:
                            diff = cv2.absdiff(gray, prev_frame)
                            mean_diff = np.mean(diff)
                            
                            if mean_diff > 30:
                                self.scenes.append(frame_idx)
                                frames_buffer.append(frame)
                        
                        prev_frame = gray
                        self.frames.append(frame)
                        
                        # Process frames in batches
                        if len(frames_buffer) >= max_buffer_size:
                            executor.submit(self.process_frames_batch, frames_buffer)
                            frames_buffer = []
                            torch.cuda.empty_cache()
                    
                    frame_idx += 1
                    
                    # Progress logging
                    if frame_idx % 100 == 0:
                        logger.info(f"Processed {frame_idx}/{max_total_frames} frames")
                
                # Process any remaining frames
                if frames_buffer:
                    executor.submit(self.process_frames_batch, frames_buffer)
                
                # Parallel audio processing
                audio_future = executor.submit(self.process_audio, video_path)
                self.transcription = audio_future.result()
            
            # Close video capture and clean up
            cap.release()
            
            # Remove temporary YouTube download if applicable
            if is_youtube_url and os.path.exists(video_path):
                os.remove(video_path)
            
            # Logging
            logger.info(f"Video processing complete. Total scenes: {len(self.scenes)}")
            logger.info(f"Total frames processed: {len(self.frames)}")
            
        except Exception as e:
            logger.error(f"Video processing error: {e}")
            # Cleanup in case of error
            if 'cap' in locals():
                cap.release()
            if is_youtube_url and os.path.exists(video_path):
                os.remove(video_path)
            raise


    def process_audio(self, video_path: str) -> str:
        try:
            video = VideoFileClip(video_path)
            if video.audio is None:
                return "[No audio found]"

            audio_path = self.get_temp_path("audio", ".wav")
            
            # Add proper cleanup
            try:
                video.audio.write_audiofile(
                    audio_path,
                    fps=16000,
                    nbytes=2,
                    codec='pcm_s16le',
                    ffmpeg_params=["-ac", "1"]
                )
            finally:
                video.close()
                
            # Add file handling with context manager
            with wave.open(audio_path, 'rb') as wf:
                rec = KaldiRecognizer(self.vosk_model, 16000)
                rec.SetWords(False)
                rec.SetPartialWords(False)
                
                results = []
                while True:
                    data = wf.readframes(16000)
                    if len(data) == 0:
                        break
                    if rec.AcceptWaveform(data):
                        results.append(json.loads(rec.Result())['text'])
                        
            # Ensure cleanup
            if os.path.exists(audio_path):
                os.remove(audio_path)
                
            return ' '.join(results)

        except Exception as e:
            logger.error(f"Audio processing error: {e}")
            return "[Audio processing error]"
        finally:
            if 'audio' in locals():
                del audio
            torch.cuda.empty_cache()

    def process_audio_chunk(self, chunk: np.ndarray) -> str:
        with torch.cuda.amp.autocast():
            chunk_tensor = torch.tensor(chunk, device=self.device, dtype=torch.float32)
            return str(chunk_tensor.mean().item())


    def analyze_scenes(self) -> List[Dict]:
        if len(self.scenes) < 2:
            logger.warning("Not enough scenes detected for analysis.")
            return []

        try:
            scene_analyses = []
            for i in range(len(self.scenes) - 1):
                start_idx = self.scenes[i]
                end_idx = self.scenes[i + 1]

                if start_idx >= len(self.frames) or end_idx >= len(self.frames):
                    continue

                mid_idx = start_idx + (end_idx - start_idx) // 2
                frame = self.frames[mid_idx]
                
                try:
                    frame_resized = cv2.resize(frame, (224, 224), interpolation=cv2.INTER_AREA)
                    frame_rgb = cv2.cvtColor(frame_resized, cv2.COLOR_BGR2RGB)
                    frame_tensor = torch.from_numpy(frame_rgb).permute(2, 0, 1).float() / 255.0
                    
                    # Explicitly move to the correct device
                    frame_tensor = frame_tensor.to(self.device).unsqueeze(0)
                    
                    with torch.no_grad():
                        outputs = self.image_analyzer(frame_tensor)
                        
                    # Process outputs based on model type
                    if isinstance(outputs, torch.Tensor):
                        top_k = torch.topk(outputs, k=1)
                        label = f"class_{top_k.indices.item()}"
                        confidence = top_k.values.item()
                    else:
                        # Fallback for pipeline-style output
                        label = outputs[0]['label']
                        confidence = outputs[0]['score']
                    
                    scene_analyses.append({
                        'start_frame': start_idx,
                        'end_frame': end_idx,
                        'visual_content': label,
                        'confidence': float(confidence)
                    })
                    
                except Exception as frame_error:
                    logger.error(f"Frame analysis error: {frame_error}")
                    continue

            return scene_analyses
        
        except Exception as e:
            logger.error(f"Scene analysis error: {e}")
            return []


    def generate_summary(self) -> Dict:
        scene_analyses = self.analyze_scenes()
        
        scene_counts = {}
        for scene in scene_analyses:
            content = scene['visual_content']
            scene_counts[content] = scene_counts.get(content, 0) + 1

        # Ensure valid scene data before proceeding  
        if not scene_counts:
            logger.warning("No valid scenes detected.")
            return {
                'scene_analyses': [],
                'scene_frequency': {},
                'transcription': self.transcription,
                'youtube_captions': self.youtube_captions
            }

        sorted_scenes = dict(
            sorted(scene_counts.items(), key=lambda x: x[1], reverse=True)
        )

        return {
            'scene_analyses': scene_analyses,
            'scene_frequency': sorted_scenes,
            'transcription': self.transcription,
            'youtube_captions': self.youtube_captions
        }


    def generate_interpreted_summary(self) -> Dict:
        summary = self.generate_summary()
        
        visual_content = "\n".join([
            f"{content}: {count} occurrences" 
            for content, count in summary['scene_frequency'].items()
        ])
        
        interpretation = self.hf_summarizer.interpret_content(
            visual_content,
            summary['transcription'],
            summary['youtube_captions']
        )
        
        interpreted_summary = {
            'narrative': interpretation['summary'],
            'content_type': interpretation['content_type'],
            'type_confidence': interpretation['type_confidence'],
            'additional_types': interpretation.get('additional_types', []),
            'main_visual_elements': [
                f"{content} ({count} scenes)" 
                for content, count in list(summary['scene_frequency'].items())[:5]
            ],
            'scene_timeline': [(s['start_frame'], s['visual_content'], s['confidence']) 
                             for s in summary['scene_analyses']],
            'technical_stats': {
                'total_scenes': len(summary['scene_analyses']),
                'avg_confidence': sum(s['confidence'] for s in summary['scene_analyses']) / 
                                len(summary['scene_analyses']) if summary['scene_analyses'] else 0,
                'has_audio': self.transcription != "[No audio found]",
                'has_captions': self.youtube_captions != "[No captions available]"
            },
            'transcriptions': {
                'youtube': summary['youtube_captions'],
                'audio': summary['transcription']
            }
        }
        
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
        
        logger.info("\nTRANSCRIPTIONS:")
        logger.info("-"*50)
        logger.info("YOUTUBE CAPTIONS:")
        logger.info(interpreted_summary['transcriptions']['youtube'])
        logger.info("\nAUDIO TRANSCRIPTION:")
        logger.info(interpreted_summary['transcriptions']['audio'])
        logger.info("-"*50)
        
        stats = interpreted_summary['technical_stats']
        logger.info("\nTECHNICAL STATISTICS:")
        logger.info(f"• Total Scenes: {stats['total_scenes']}")
        logger.info(f"• Average Confidence: {stats['avg_confidence']:.2f}")
        logger.info(f"• Audio Available: {stats['has_audio']}")
        logger.info(f"• Captions Available: {stats['has_captions']}")
        
        return interpreted_summary
        
    def cleanup(self):
        try:
            if os.path.exists(self.temp_dir):
                for file in glob.glob(os.path.join(self.temp_dir, "*")):
                    try:
                        os.remove(file)
                    except Exception as e:
                        logger.error(f"Error removing {file}: {e}")
                os.rmdir(self.temp_dir)
            
            self.frames = []
            self.scenes = []
            torch.cuda.empty_cache()
            gc.collect()
                
        except Exception as e:
            logger.error(f"Cleanup error: {e}")

def main():
    try:
        logger.info("Initializing Video Analysis Bot...")
        bot = OptimizedVideoBot(sample_rate=10)
        
        video_url = input("\nEnter YouTube URL: ")
        
        logger.info("\nStarting comprehensive video analysis...")
        logger.info("Step 1: Processing video and extracting frames...")
        bot.process_video(video_url, is_youtube_url=True)
        
        logger.info("Step 2: Analyzing scenes and generating technical summary...")
        summary = bot.generate_summary()
        
        logger.info("Step 3: Creating interpreted summary...")
        interpreted_summary = bot.generate_interpreted_summary()
        
        logger.info("\nCleaning up temporary files...")
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