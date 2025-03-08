import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Navbar from "./Navbar";
import { auth } from "./firebase/firebase";
import { saveSummaryToDB } from "./firebase/firebaseHelpers";
import { FaFilePdf, FaFileWord, FaFileAlt } from "react-icons/fa";
import { Document, Paragraph, TextRun, HeadingLevel, Packer } from "docx";
import { saveAs } from "file-saver";
import { jsPDF } from "jspdf";

// Define a consistent API base URL
const API_BASE_URL =
  "https://exactly-gnome-continues-representative.trycloudflare.com"; // Use localhost or your server IP

const Home = () => {
  const [url, setUrl] = useState("");
  const [submittedUrl, setSubmittedUrl] = useState("");
  const [summaryData, setSummaryData] = useState(null);
  const [urlError, setUrlError] = useState("");
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState("");
  const [activeName, setActiveName] = useState(null);
  const [activeOption, setActiveOption] = useState("url"); // 'url' or 'file'
  const [videoUrl, setVideoUrl] = useState(null);
  const [showAdditionalContent, setShowAdditionalContent] = useState(false);
  const [summaryLength, setSummaryLength] = useState("medium"); // Options: "short", "medium", "long"
  const [feedbackText, setFeedbackText] = useState("");

  // New state variables for queue system
  const [taskId, setTaskId] = useState(null);
  const [taskStatus, setTaskStatus] = useState(null);
  const [pollingInterval, setPollingInterval] = useState(null);
  const [progress, setProgress] = useState(0);
  const [queuePosition, setQueuePosition] = useState(null);
  const [queueStatus, setQueueStatus] = useState(null);

  // Add team members array here
  const teamMembers = [
    { name: "Clarence Mauricio", img: "assets/Clarence.jpg" },
    { name: "Robert Agomaa", img: "assets/Robert.jpg" },
    { name: "Ysa Alvarez", img: "assets/Ysa.jpg" },
    { name: "Jacques Hale", img: "assets/Jacques.jpg" },
  ];

  const youtubeRegex =
    /^(https?:\/\/)?(www\.)?(youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=)|youtu\.be\/|youtube\.com\/shorts\/|youtube\.com\/live\/|youtube\.com\/playlist\?list=)([^#&?]*).*/;

  const modifySummaryLength = (text, length) => {
    if (!text) return "";

    // Approximate word counts for different lengths
    const wordCounts = {
      short: 50,
      medium: 150, // Default from API
      long: 300,
    };

    const words = text.split(/\s+/);
    const targetCount = wordCounts[length];

    if (length === "short" && words.length > targetCount) {
      return text;
    } else if (length === "long" && words.length < targetCount) {
      return text;
    } else {
      return text;
    }
  };

  // Fetch queue status
  const fetchQueueStatus = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/queue-status`);

      if (response.ok) {
        const data = await response.json();
        setQueueStatus(data);
      }
    } catch (error) {
      console.error("Error fetching queue status:", error);
    }
  };

  // Task polling functions
  const startPolling = (taskId) => {
    // Clear any existing polling interval
    if (pollingInterval) {
      clearInterval(pollingInterval);
    }

    // Set up new polling interval
    const interval = setInterval(() => {
      pollTaskStatus(taskId);
    }, 3000); // Poll every 3 seconds

    setPollingInterval(interval);

    // Initial poll
    pollTaskStatus(taskId);
  };

  const pollTaskStatus = async (taskId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/task-status/${taskId}`);

      if (!response.ok) {
        throw new Error(`Failed to get task status: ${response.status}`);
      }

      const data = await response.json();
      setTaskStatus(data.status);

      // Update queue position if task is queued
      if (data.status === "queued" && data.position !== undefined) {
        setQueuePosition(data.position);
      } else {
        setQueuePosition(null);
      }

      // Update progress information if available
      if (data.progress) {
        setProgress(data.progress * 100);
      }

      // If task is complete, fetch the results
      if (data.status === "completed") {
        clearInterval(pollingInterval);
        setPollingInterval(null);

        // If result is included directly in status response
        if (data.result) {
          setSummaryData(data.result);
          setLoading(false);

          // Save to Firebase if user is logged in
          if (auth.currentUser) {
            await saveSummaryToDB(auth.currentUser.uid, {
              content: data.result.narrative,
              videoUrl: url || null,
              videoName: file ? file.name : null,
              type: data.result.content_type,
              visualElements: data.result.main_visual_elements || [],
              timestamp: new Date().toISOString(),
            });
          }
        }
        // Otherwise fetch results from dedicated endpoint
        else {
          const resultResponse = await fetch(
            `${API_BASE_URL}/results/${taskId}`
          );
          if (resultResponse.ok) {
            const resultData = await resultResponse.json();
            setSummaryData(resultData);

            // Save to Firebase if user is logged in
            if (auth.currentUser) {
              await saveSummaryToDB(auth.currentUser.uid, {
                content: resultData.narrative,
                videoUrl: url || null,
                videoName: file ? file.name : null,
                type: resultData.content_type,
                visualElements: resultData.main_visual_elements || [],
                timestamp: new Date().toISOString(),
              });
            }
          }
          setLoading(false);
        }
      }
      // If task failed, show error
      else if (data.status === "failed") {
        clearInterval(pollingInterval);
        setPollingInterval(null);
        setLoading(false);

        if (data.error) {
          if (activeOption === "url") {
            setUrlError(`Analysis failed: ${data.error}`);
          } else {
            setFileError(`Analysis failed: ${data.error}`);
          }
        } else {
          if (activeOption === "url") {
            setUrlError("Analysis failed. Please try again.");
          } else {
            setFileError("Analysis failed. Please try again.");
          }
        }
      }
      // If task was canceled
      else if (data.status === "canceled") {
        clearInterval(pollingInterval);
        setPollingInterval(null);
        setLoading(false);

        if (activeOption === "url") {
          setUrlError("Analysis was canceled.");
        } else {
          setFileError("Analysis was canceled.");
        }
      }
    } catch (error) {
      console.error("Error polling task status:", error);
    }
  };

  // Periodic queue status polling when in queue
  useEffect(() => {
    let statusInterval = null;

    if (loading && taskStatus === "queued") {
      // Fetch queue status every 5 seconds when in queue
      statusInterval = setInterval(fetchQueueStatus, 5000);
      // Initial fetch
      fetchQueueStatus();
    }

    return () => {
      if (statusInterval) {
        clearInterval(statusInterval);
      }
    };
  }, [loading, taskStatus]);

  // Clean up polling on component unmount
  useEffect(() => {
    return () => {
      if (pollingInterval) {
        clearInterval(pollingInterval);
      }
    };
  }, [pollingInterval]);

  // Cancel analysis function
  const cancelAnalysis = async () => {
    if (!taskId) return;

    try {
      const response = await fetch(`${API_BASE_URL}/cancel-task/${taskId}`, {
        method: "POST",
      });

      if (response.ok) {
        clearInterval(pollingInterval);
        setPollingInterval(null);
        setLoading(false);

        if (activeOption === "url") {
          setUrlError("Analysis canceled.");
        } else {
          setFileError("Analysis canceled.");
        }
      }
    } catch (error) {
      console.error("Error canceling task:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!youtubeRegex.test(url)) {
      setUrlError("Invalid YouTube URL. Please enter a valid link.");
      return;
    }

    setUrlError("");
    setSubmittedUrl(url);
    setLoading(true);
    setSummaryData(null);
    setTaskId(null);
    setTaskStatus(null);
    setProgress(0);
    setQueuePosition(null);

    try {
      const response = await fetch(`${API_BASE_URL}/analyze-video`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          video_url: url,
          summary_length: summaryLength,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setTaskId(data.task_id);
      setTaskStatus(data.status);

      if (data.position !== undefined) {
        setQueuePosition(data.position);
      }

      // Start polling for task status
      startPolling(data.task_id);
    } catch (error) {
      console.error("Error:", error);
      setUrlError(
        `Connection error: ${error.message}. Please check server connection.`
      );
      setLoading(false);
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type.startsWith("video/")) {
      setFile(selectedFile);
      setFileError("");

      // Create URL for preview
      const objectUrl = URL.createObjectURL(selectedFile);
      setVideoUrl(objectUrl);

      console.log("Video file selected:", selectedFile.name);
    } else {
      setFile(null);
      setVideoUrl(null);
      setFileError("Please select a valid video file.");
      console.log("Please select a valid video file.");
    }
  };

  const handleFileUpload = async (event) => {
    event.preventDefault();

    if (!file) {
      setFileError("No file selected. Please select a video file.");
      return;
    }

    setLoading(true);
    setSummaryData(null);
    setFileError("");
    setTaskId(null);
    setTaskStatus(null);
    setProgress(0);
    setQueuePosition(null);

    try {
      // First, upload the file to the server
      const formData = new FormData();
      formData.append("file", file);
      formData.append("summary_length", summaryLength);

      const uploadResponse = await fetch(`${API_BASE_URL}/upload-video`, {
        method: "POST",
        body: formData,
      });

      if (!uploadResponse.ok) {
        throw new Error(`Upload failed: ${uploadResponse.status}`);
      }

      const uploadResult = await uploadResponse.json();

      // Now analyze the uploaded file
      const analysisResponse = await fetch(
        `${API_BASE_URL}/analyze-local-video`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            file_path: uploadResult.file_path,
            summary_length: uploadResult.summary_length,
          }),
        }
      );

      if (!analysisResponse.ok) {
        throw new Error(`Analysis failed: ${analysisResponse.status}`);
      }

      const data = await analysisResponse.json();
      setTaskId(data.task_id);
      setTaskStatus(data.status);

      if (data.position !== undefined) {
        setQueuePosition(data.position);
      }

      // Start polling for task status
      startPolling(data.task_id);
    } catch (error) {
      console.error("Error:", error);
      setFileError(
        `Connection error: ${error.message}. Please check server connection.`
      );
      setLoading(false);
    }
  };

  const downloadSummary = (format) => {
    if (!summaryData) return;

    let filename = `video-summary-${new Date().toISOString().slice(0, 10)}`;

    if (format === "txt") {
      // TXT format - keep as is
      let content = `VIDEO SUMMARY\n\n`;
      content += `Content Type: ${summaryData.content_type}\n`;
      content += `Confidence: ${(summaryData.type_confidence * 100).toFixed(
        2
      )}%\n\n`;

      if (
        summaryData.additional_types &&
        summaryData.additional_types.length > 0
      ) {
        content += `ADDITIONAL CATEGORIES:\n`;
        summaryData.additional_types.forEach((type) => {
          content += `- ${type.label} (${(type.score * 100).toFixed(2)}%)\n`;
        });
        content += "\n";
      }

      content += `SUMMARY:\n${summaryData.narrative}\n\n`;

      // Always include visual elements
      if (
        summaryData.main_visual_elements &&
        summaryData.main_visual_elements.length > 0
      ) {
        content += `VISUAL ELEMENTS:\n`;
        summaryData.main_visual_elements.forEach((element) => {
          content += `- ${element}\n`;
        });
        content += "\n";
      }

      // Always include transcriptions if available
      if (summaryData.transcriptions) {
        if (
          summaryData.transcriptions.audio_transcription &&
          summaryData.transcriptions.audio_transcription !== "[No audio found]"
        ) {
          content += `AUDIO TRANSCRIPTION:\n${summaryData.transcriptions.audio_transcription}\n\n`;
        }

        if (
          summaryData.transcriptions.youtube_captions &&
          summaryData.transcriptions.youtube_captions !==
            "[No captions available]"
        ) {
          content += `YOUTUBE CAPTIONS:\n${summaryData.transcriptions.youtube_captions}\n\n`;
        }
      }

      filename += ".txt";

      // Create and download the file
      const blob = new Blob([content], { type: "text/plain" });
      saveAs(blob, filename);
    } else if (format === "docx") {
      // DOCX format using docx library
      const doc = new Document({
        sections: [
          {
            properties: {},
            children: [
              new Paragraph({
                text: "VIDEO SUMMARY",
                heading: HeadingLevel.HEADING_1,
              }),
              new Paragraph({
                text: `Content Type: ${summaryData.content_type}`,
              }),
              new Paragraph({
                text: `Confidence: ${(
                  summaryData.type_confidence * 100
                ).toFixed(2)}%`,
              }),
              new Paragraph({ text: "" }), // Empty line

              // Additional categories if available
              ...(summaryData.additional_types &&
              summaryData.additional_types.length > 0
                ? [
                    new Paragraph({
                      text: "ADDITIONAL CATEGORIES",
                      heading: HeadingLevel.HEADING_2,
                    }),
                    ...summaryData.additional_types.map(
                      (type) =>
                        new Paragraph({
                          text: `- ${type.label} (${(type.score * 100).toFixed(
                            2
                          )}%)`,
                        })
                    ),
                    new Paragraph({ text: "" }), // Empty line
                  ]
                : []),

              // Summary
              new Paragraph({
                text: "SUMMARY",
                heading: HeadingLevel.HEADING_2,
              }),
              new Paragraph({
                text: summaryData.narrative,
              }),
              new Paragraph({ text: "" }), // Empty line

              // Visual elements if available
              ...(summaryData.main_visual_elements &&
              summaryData.main_visual_elements.length > 0
                ? [
                    new Paragraph({
                      text: "VISUAL ELEMENTS",
                      heading: HeadingLevel.HEADING_2,
                    }),
                    ...summaryData.main_visual_elements.map(
                      (element) =>
                        new Paragraph({
                          text: `- ${element}`,
                        })
                    ),
                    new Paragraph({ text: "" }), // Empty line
                  ]
                : []),

              // Transcriptions if available
              ...(summaryData.transcriptions &&
              summaryData.transcriptions.audio_transcription &&
              summaryData.transcriptions.audio_transcription !==
                "[No audio found]"
                ? [
                    new Paragraph({
                      text: "AUDIO TRANSCRIPTION",
                      heading: HeadingLevel.HEADING_2,
                    }),
                    new Paragraph({
                      text: summaryData.transcriptions.audio_transcription,
                    }),
                    new Paragraph({ text: "" }), // Empty line
                  ]
                : []),

              ...(summaryData.transcriptions &&
              summaryData.transcriptions.youtube_captions &&
              summaryData.transcriptions.youtube_captions !==
                "[No captions available]"
                ? [
                    new Paragraph({
                      text: "YOUTUBE CAPTIONS",
                      heading: HeadingLevel.HEADING_2,
                    }),
                    new Paragraph({
                      text: summaryData.transcriptions.youtube_captions,
                    }),
                  ]
                : []),
            ],
          },
        ],
      });

      // Generate and save the document
      Packer.toBlob(doc).then((blob) => {
        saveAs(blob, filename + ".docx");
      });
    } else if (format === "pdf") {
      // PDF format using jsPDF
      const doc = new jsPDF();

      // Set up some variables for formatting
      let yPos = 20;
      const leftMargin = 20;
      const pageWidth = doc.internal.pageSize.width;
      const lineHeight = 7;

      // Title
      doc.setFontSize(18);
      doc.setFont("helvetica", "bold");
      doc.text("VIDEO SUMMARY", leftMargin, yPos);
      yPos += lineHeight * 1.5;

      // Content type and confidence
      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");
      doc.text(`Content Type: ${summaryData.content_type}`, leftMargin, yPos);
      yPos += lineHeight;
      doc.text(
        `Confidence: ${(summaryData.type_confidence * 100).toFixed(2)}%`,
        leftMargin,
        yPos
      );
      yPos += lineHeight * 1.5;

      // Additional categories
      if (
        summaryData.additional_types &&
        summaryData.additional_types.length > 0
      ) {
        doc.setFont("helvetica", "bold");
        doc.text("ADDITIONAL CATEGORIES", leftMargin, yPos);
        yPos += lineHeight;
        doc.setFont("helvetica", "normal");

        summaryData.additional_types.forEach((type) => {
          doc.text(
            `- ${type.label} (${(type.score * 100).toFixed(2)}%)`,
            leftMargin,
            yPos
          );
          yPos += lineHeight;
        });

        yPos += lineHeight * 0.5;
      }

      // Summary
      doc.setFont("helvetica", "bold");
      doc.text("SUMMARY", leftMargin, yPos);
      yPos += lineHeight;
      doc.setFont("helvetica", "normal");

      // Split summary into lines that fit the page width
      const splitSummary = doc.splitTextToSize(
        summaryData.narrative,
        pageWidth - leftMargin * 2
      );

      // Check if adding summary would overflow page
      if (
        yPos + splitSummary.length * lineHeight >
        doc.internal.pageSize.height - 20
      ) {
        doc.addPage();
        yPos = 20;
      }

      doc.text(splitSummary, leftMargin, yPos);
      yPos += splitSummary.length * lineHeight + lineHeight;

      // Visual elements
      if (
        summaryData.main_visual_elements &&
        summaryData.main_visual_elements.length > 0
      ) {
        // Add new page if close to bottom
        if (yPos > doc.internal.pageSize.height - 60) {
          doc.addPage();
          yPos = 20;
        }

        doc.setFont("helvetica", "bold");
        doc.text("VISUAL ELEMENTS", leftMargin, yPos);
        yPos += lineHeight;
        doc.setFont("helvetica", "normal");

        summaryData.main_visual_elements.forEach((element) => {
          const splitElement = doc.splitTextToSize(
            `- ${element}`,
            pageWidth - leftMargin * 2
          );
          doc.text(splitElement, leftMargin, yPos);
          yPos += splitElement.length * lineHeight;
        });

        yPos += lineHeight * 0.5;
      }

      // Transcriptions if available - only include if selected or necessary
      if (summaryData.transcriptions) {
        // Audio transcription
        if (
          summaryData.transcriptions.audio_transcription &&
          summaryData.transcriptions.audio_transcription !== "[No audio found]"
        ) {
          // Add new page for transcription
          doc.addPage();
          yPos = 20;

          doc.setFont("helvetica", "bold");
          doc.text("AUDIO TRANSCRIPTION", leftMargin, yPos);
          yPos += lineHeight;
          doc.setFont("helvetica", "normal");

          const splitTranscription = doc.splitTextToSize(
            summaryData.transcriptions.audio_transcription,
            pageWidth - leftMargin * 2
          );

          doc.text(splitTranscription, leftMargin, yPos);
          yPos += splitTranscription.length * lineHeight + lineHeight;
        }

        // YouTube captions
        if (
          summaryData.transcriptions.youtube_captions &&
          summaryData.transcriptions.youtube_captions !==
            "[No captions available]"
        ) {
          // Add new page for captions
          doc.addPage();
          yPos = 20;

          doc.setFont("helvetica", "bold");
          doc.text("YOUTUBE CAPTIONS", leftMargin, yPos);
          yPos += lineHeight;
          doc.setFont("helvetica", "normal");

          const splitCaptions = doc.splitTextToSize(
            summaryData.transcriptions.youtube_captions,
            pageWidth - leftMargin * 2
          );

          doc.text(splitCaptions, leftMargin, yPos);
        }
      }

      // Save the PDF
      doc.save(filename + ".pdf");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="form-container">
          <h1>Video Summary Generator</h1>

          {/* Toggle Switch */}
          <div className="toggle-container">
            <button
              className={`toggle-btn ${activeOption === "url" ? "active" : ""}`}
              onClick={() => setActiveOption("url")}
            >
              Paste Link
            </button>
            <button
              className={`toggle-btn ${
                activeOption === "file" ? "active" : ""
              }`}
              onClick={() => setActiveOption("file")}
            >
              Upload File
            </button>
          </div>

          {activeOption === "url" ? (
            // URL Input Form
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter YouTube Link"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                disabled={loading}
              />
              <div className="summary-length-selector">
                <label>Summary Length:</label>
                <div className="summary-length-controls">
                  <button
                    type="button"
                    className={`length-btn ${
                      summaryLength === "short" ? "active" : ""
                    }`}
                    onClick={() => setSummaryLength("short")}
                  >
                    Short
                  </button>
                  <button
                    type="button"
                    className={`length-btn ${
                      summaryLength === "medium" ? "active" : ""
                    }`}
                    onClick={() => setSummaryLength("medium")}
                  >
                    Medium
                  </button>
                  <button
                    type="button"
                    className={`length-btn ${
                      summaryLength === "long" ? "active" : ""
                    }`}
                    onClick={() => setSummaryLength("long")}
                  >
                    Long
                  </button>
                </div>
              </div>
              <button type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <span className="loading-spinner"></span>
                    Analyzing...
                  </>
                ) : (
                  "Submit"
                )}
              </button>
              {urlError && <p className="error">{urlError}</p>}
            </form>
          ) : (
            // File Upload Form
            <form className="file-upload-form" onSubmit={handleFileUpload}>
              <label className="file-upload-label" htmlFor="file">
                <div className="file-upload-design">
                  <svg height="1em" viewBox="0 0 640 512">
                    <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"></path>
                  </svg>
                  <span className="browse-button">Browse file</span>
                  {file && <p className="selected-file-name">{file.name}</p>}
                </div>
                <input
                  type="file"
                  id="file"
                  accept="video/*"
                  onChange={handleFileChange}
                />
              </label>
              <div className="summary-length-selector">
                <label>Summary Length:</label>
                <div className="summary-length-controls">
                  <button
                    type="button"
                    className={`length-btn ${
                      summaryLength === "short" ? "active" : ""
                    }`}
                    onClick={() => setSummaryLength("short")}
                  >
                    Short
                  </button>
                  <button
                    type="button"
                    className={`length-btn ${
                      summaryLength === "medium" ? "active" : ""
                    }`}
                    onClick={() => setSummaryLength("medium")}
                  >
                    Medium
                  </button>
                  <button
                    type="button"
                    className={`length-btn ${
                      summaryLength === "long" ? "active" : ""
                    }`}
                    onClick={() => setSummaryLength("long")}
                  >
                    Long
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="submit-button"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="loading-spinner"></span>
                    Analyzing...
                  </>
                ) : (
                  "Upload & Analyze Video"
                )}
              </button>
              {fileError && <p className="error">{fileError}</p>}
            </form>
          )}
        </div>

        {videoUrl && (
          <div className="video-preview-container">
            <h3>Video Preview</h3>
            <video
              className="video-preview"
              src={videoUrl}
              controls
              width="100%"
              height="auto"
            />
          </div>
        )}

        {loading && (
          <div className="summary-container">
            <h2>
              Video Analysis{" "}
              {taskStatus === "processing" ? "In Progress" : "Queued"}
            </h2>

            {taskStatus === "queued" && (
              <>
                <p>Your video is in the processing queue.</p>
                {queuePosition !== null && (
                  <div className="queue-position">
                    <p>
                      {queuePosition === 0
                        ? "Your video is next in line."
                        : `Position in queue: ${queuePosition + 1}`}
                    </p>
                  </div>
                )}
                {queueStatus && (
                  <div className="queue-info">
                    <p>Total videos in queue: {queueStatus.queue_length}</p>
                    {queueStatus.active_task && (
                      <p>
                        Currently processing:{" "}
                        {queueStatus.active_task.progress
                          ? `${Math.round(
                              queueStatus.active_task.progress * 100
                            )}% complete`
                          : "just started"}
                      </p>
                    )}
                  </div>
                )}
              </>
            )}

            {taskStatus === "processing" && (
              <>
                <p>
                  Processing your video. This may take a few minutes depending
                  on the video length.
                </p>
                {progress > 0 && (
                  <div className="progress-container">
                    <div
                      className="progress-bar"
                      style={{ width: `${progress}%` }}
                    ></div>
                    <span className="progress-text">
                      {Math.round(progress)}%
                    </span>
                  </div>
                )}
              </>
            )}

            <button className="cancel-btn" onClick={cancelAnalysis}>
              Cancel Analysis
            </button>
          </div>
        )}

        {summaryData && !loading && (
          <div className="summary-container">
            <h2>Video Analysis</h2>
            <div className="summary-section">
              <h3>Content Classification</h3>
              <p>
                <strong>Primary Type:</strong> {summaryData.content_type}{" "}
                (Confidence: {(summaryData.type_confidence * 100).toFixed(2)}%)
              </p>
              {summaryData.additional_types &&
                summaryData.additional_types.length > 0 && (
                  <div>
                    <strong>Additional Categories:</strong>
                    <ul>
                      {summaryData.additional_types.map((type, index) => (
                        <li key={index}>
                          {type.label} (Confidence:{" "}
                          {(type.score * 100).toFixed(2)}%)
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </div>
            <div className="summary-section">
              <div className="summary-header">
                <h3>Narrative Summary</h3>
              </div>
              <p>{modifySummaryLength(summaryData.narrative, summaryLength)}</p>
            </div>

            <div className="show-more-container">
              <button
                className="show-more-btn"
                onClick={() => setShowAdditionalContent(!showAdditionalContent)}
              >
                {showAdditionalContent ? "Show Less" : "Show More Details"}
              </button>
            </div>

            {showAdditionalContent && (
              <div className="additional-content">
                {/* Visual Content Analysis */}
                {summaryData.main_visual_elements &&
                  summaryData.main_visual_elements.length > 0 && (
                    <div className="summary-section">
                      <h3>Visual Content Analysis</h3>
                      <ul>
                        {summaryData.main_visual_elements.map(
                          (element, index) => (
                            <li key={index}>{element}</li>
                          )
                        )}
                      </ul>
                    </div>
                  )}

                {/* Audio Transcription */}
                {summaryData.transcriptions &&
                  summaryData.transcriptions.audio_transcription && (
                    <div className="summary-section">
                      <h3>Audio Transcription</h3>
                      <div className="transcription-box">
                        {summaryData.transcriptions.audio_transcription}
                      </div>
                    </div>
                  )}

                {/* YouTube Captions */}
                {summaryData.transcriptions &&
                  summaryData.transcriptions.youtube_captions && (
                    <div className="summary-section">
                      <h3>YouTube Captions</h3>
                      <div className="transcription-box">
                        {summaryData.transcriptions.youtube_captions}
                      </div>
                    </div>
                  )}
              </div>
            )}

            {/* Download buttons section */}
            <div className="download-options">
              <h3>Download Summary</h3>
              <div className="download-buttons">
                <button
                  className="download-btn"
                  onClick={() => downloadSummary("txt")}
                  aria-label="Download as Text"
                >
                  <FaFileAlt /> TXT
                </button>
                <button
                  className="download-btn"
                  onClick={() => downloadSummary("docx")}
                  aria-label="Download as Word Document"
                >
                  <FaFileWord /> DOCX
                </button>
                <button
                  className="download-btn"
                  onClick={() => downloadSummary("pdf")}
                  aria-label="Download as PDF"
                >
                  <FaFilePdf /> PDF
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* How-to section */}
      <div className="how-to-container">
        <h1>How to Use Knowledge Nuggets?</h1>
        <h2>You can easily summarize videos with just 3 simple steps</h2>
        <div className="how-to">
          <p>Step 1: Copy and Paste the Video Link or Upload a Video File.</p>
        </div>
        <div className="how-to">
          <p>Step 2: Click Generate Summary.</p>
        </div>
        <div className="how-to">
          <p>
            Step 3: Read your generated summary to increase learning efficiency.
          </p>
        </div>
      </div>

      {/* About us section */}
      <div className="about-us-section">
        <h2>Meet Our Team</h2>
        <div className="about-us-container">
          {teamMembers.map((member, index) => (
            <div
              className="about-us-card"
              key={index}
              onMouseEnter={() => setActiveName(member.name)}
              onMouseLeave={() => setActiveName(null)}
            >
              <div className="about-us-img">
                <img src={member.img} alt={member.name} />
                <div
                  className={`name-overlay ${
                    activeName === member.name ? "active" : ""
                  }`}
                >
                  <h3>{member.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* For whom section */}
      <div className="for-who-container">
        <h1>Especially Catered For You</h1>
        <div className="for-who-grid">
          <div className="for-who-card">
            <div className="for-who-image">
              <img src="assets/student.png" alt="Students" />
            </div>
            <h3>Students</h3>
            <p>
              Quickly summarize lectures and educational videos to save time and
              enhance learning.
            </p>
          </div>
          <div className="for-who-card">
            <div className="for-who-image">
              <img src="assets/research.png" alt="Researchers" />
            </div>
            <h3>Researchers</h3>
            <p>
              Efficiently analyze long research videos and extract key insights
              for your projects.
            </p>
          </div>
          <div className="for-who-card">
            <div className="for-who-image">
              <img src="assets/professional.png" alt="Professionals" />
            </div>
            <h3>Professionals</h3>
            <p>
              Stay updated with industry trends by summarizing lengthy webinars
              and presentations.
            </p>
          </div>
        </div>
      </div>

      {/* Feedback Section */}
      <div className="feedback-container">
        <h2>We Value Your Feedback</h2>
        <form
          className="feedback-form"
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = `mailto:knowledge.nuggets@gmail.com?subject=Video Summary Feedback&body=${encodeURIComponent(
              feedbackText
            )}`;
            setFeedbackText("");
          }}
        >
          <textarea
            className="feedback-input"
            placeholder="Type your feedback here..."
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
            required
          />
          <button type="submit" className="feedback-submit-btn">
            Send Feedback
          </button>
        </form>
      </div>
    </>
  );
};

export default Home;
