import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Navbar from "./Navbar";
import Bubbles from "./bubbles";

const Home = () => {
 const [url, setUrl] = useState("");
 const [submittedUrl, setSubmittedUrl] = useState("");
 const [summaryData, setSummaryData] = useState(null);
 const [urlError, setUrlError] = useState("");
 const [loading, setLoading] = useState(false);

 const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube|youtu|youtube-nocookie)\.(com|be)\/(watch\?v=[a-zA-Z0-9_-]{11}(&.*)?|.+\/videos\/[a-zA-Z0-9_-]{11})$/;

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
     const response = await fetch('http://localhost:8000/analyze-video', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({ video_url: url }),
     });

     if (!response.ok) {
       throw new Error(`HTTP error! status: ${response.status}`);
     }

     const data = await response.json();
     setSummaryData(data);
   } catch (error) {
     console.error('Error:', error);
     setUrlError('Error analyzing video. Please try again.');
   } finally {
     setLoading(false);
   }
 };

 return (
   <>
     <Navbar />

     <div className="container">
       <div className="form-container">
         <h1>Enter YouTube URL</h1>
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
         </form>

         {urlError && <p className="error">{urlError}</p>}
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
               <strong>Primary Type:</strong> {summaryData.content_type} 
               (Confidence: {(summaryData.type_confidence * 100).toFixed(2)}%)
             </p>
             
             {summaryData.additional_types && summaryData.additional_types.length > 0 && (
               <div>
                 <strong>Additional Categories:</strong>
                 <ul>
                   {summaryData.additional_types.map((type, index) => (
                     <li key={index}>
                       {type.label} (Confidence: {(type.score * 100).toFixed(2)}%)
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

           {summaryData.main_visual_elements && summaryData.main_visual_elements.length > 0 && (
             <div className="summary-section">
               <h3>Visual Content Analysis</h3>
               <ul>
                 {summaryData.main_visual_elements.map((element, index) => (
                   <li key={index}>{element}</li>
                 ))}
               </ul>
             </div>
           )}

<<<<<<< HEAD
        {loading && (
          <div className="summary-container">
            <h2>Analyzing video...</h2>
            <p>This may take a few minutes depending on the video length.</p>
          </div>
        )}
      </div>

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
    </>
  );
=======
           <div className="summary-section">
             <h3>Technical Statistics</h3>
             <ul>
               <li>Total Scenes: {summaryData.technical_stats.total_scenes}</li>
               <li>Average Confidence: {summaryData.technical_stats.avg_confidence.toFixed(2)}</li>
               <li>Audio Available: {summaryData.technical_stats.has_audio ? 'Yes' : 'No'}</li>
               <li>Captions Available: {summaryData.technical_stats.has_captions ? 'Yes' : 'No'}</li>
             </ul>
           </div>
         </div>
       )}
     </div>
   </>
 );
>>>>>>> ef49d9845f500d79e07a140db3d32b2b28f40e00
};

export default Home;