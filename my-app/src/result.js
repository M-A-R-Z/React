import React from 'react';
import Userdashboard from "./Userdashboard"; // import the user dashboard component
import './Userdashboard-home.css';
import './result.css'; // Import the CSS file for styling
import STEM from './images/STEM.png';



function Result() {
return (
    <>
        <Userdashboard />
        <div className="result-STEM">
            <img src={STEM} alt="stem"/>
            <p>Based on your answers, PathFinder suggests the STEM (Science, Technology, Engineering, and Mathematics) strand is the best fit for you. This strand aligns with your skills, interests, and goals.</p>
            <p>The STEM strand opens doors to dynamic and high-demand careers. By pursuing any of these courses, you’ll be equipped with skills for professions that significantly impact society while offering competitive salaries.</p>
            {/* Add your search result content here */}
        </div>

        <div className="bottom-container">
          <h1>Redo Assessment</h1>
          <p>
            You can redo the assessment if you are unsure on what the results are currently. 
            <br />
                Would you like to redo?
          </p>
          <div className="result-btn-container">
            <button className="generate-btn">Generate</button>
            <button className="cancel-btn">Cancel</button>
          </div>
        </div><br/><br/><br/><br/><br/><br/>
    </>
);
}

export default Result;