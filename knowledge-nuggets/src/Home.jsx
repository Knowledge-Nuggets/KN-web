import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Navbar from "./Navbar";
import { auth } from "./firebase/firebase"; // Import auth
import { saveSummaryToDB } from "./firebase/firebaseHelpers"; // Import the helper function

const Home = () => {
  const [url, setUrl] = useState("");
  const [submittedUrl, setSubmittedUrl] = useState("");
  const [summaryData, setSummaryData] = useState(null);
  const [urlError, setUrlError] = useState("");
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [activeName, setActiveName] = useState(null);
  const [activeOption, setActiveOption] = useState("url"); // 'url' or 'file'

  // Add team members array here
  const teamMembers = [
    { name: "Clarence Mauricio", img: "assets/Clarence.jpg" },
    { name: "Robert Agomaa", img: "assets/Robert.jpg" },
    { name: "Ysa Alvarez", img: "assets/Ysa.jpg" },
    { name: "Jacques Hale", img: "assets/Jacques.jpg" },
  ];

  const youtubeRegex =
    /^(https?:\/\/)?(www\.)?(youtube|youtu|youtube-nocookie)\.(com|be)\/(watch\?v=[a-zA-Z0-9_-]{11}(&.*)?|.+\/videos\/[a-zA-Z0-9_-]{11})$/;

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

    try {
      const response = await fetch("http://localhost:8000/analyze-video", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ video_url: url }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setSummaryData(data);

      // Save summary to Firebase if user is logged in
      if (auth.currentUser) {
        await saveSummaryToDB(auth.currentUser.uid, {
          content: data.narrative,
          videoUrl: url,
          type: data.content_type,
          visualElements: data.main_visual_elements || [],
          timestamp: new Date().toISOString(),
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setUrlError("Error analyzing video. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type.startsWith("video/")) {
      setFile(selectedFile);
      console.log("Video file selected:", selectedFile.name);
    } else {
      console.log("Please select a valid video file.");
    }
  };

  const handleFileUpload = (event) => {
    event.preventDefault();
    if (file) {
      console.log("Saving video file:", file.name);
      setTimeout(() => {
        console.log("Video upload successful:", file.name);
        setFile(null);
      }, 2000); // Simulate a delay for the upload
    } else {
      console.log("No file selected.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="form-container">
          <h1>Enter YouTube URL</h1>

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
              <button type="submit" disabled={loading}>
                {loading ? "Analyzing..." : "Submit"}
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
                  <p>Drag and Drop</p>
                  <p>or</p>
                  <span className="browse-button">Browse file</span>
                </div>
                <input type="file" id="file" onChange={handleFileChange} />
              </label>
              <button type="submit" className="submit-button">
                Upload Video
              </button>
            </form>
          )}
        </div>

        {loading && (
          <div className="summary-container">
            <h2>Analyzing video...</h2>
            <p>This may take a few minutes depending on the video length.</p>
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
              <h3>Narrative Summary</h3>
              <p>{summaryData.narrative}</p>
            </div>
            {summaryData.main_visual_elements &&
              summaryData.main_visual_elements.length > 0 && (
                <div className="summary-section">
                  <h3>Visual Content Analysis</h3>
                  <ul>
                    {summaryData.main_visual_elements.map((element, index) => (
                      <li key={index}>{element}</li>
                    ))}
                  </ul>
                </div>
              )}
          </div>
        )}
      </div>

      {/* How-to section */}
      <div className="how-to-container">
        <h1>How to Use Knowledge Nuggets?</h1>
        <h2>You can easily summarize videos with just 3 simple steps</h2>
        <div className="how-to">
          <p>Step 1: Copy and Paste the Video Link.</p>
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
          <div className="for-who-card">
            <div className="for-who-image">
              <img src="assets/creator.png" alt="Content Creators" />
            </div>
            <h3>Content Creators</h3>
            <p>
              Easily summarize long videos to create engaging content, scripts,
              or captions for your audience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
