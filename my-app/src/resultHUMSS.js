import React from 'react';
import Userdashboard from "./Userdashboard"; // import the user dashboard component
import './Userdashboard-home.css';
import './result.css'; // Import the CSS file for styling
import HUMSS from './images/HUMSS.png';

function ResultABM() {
return (
    <>
        <Userdashboard />
        <div className="result">
            <img src={HUMSS} alt="humss"/>
            <p>Based on your answers, PathFinder suggests the HUMSS (Humanities and Social Sciences) strand is the best fit for you. This strand aligns with your skills, interests, and goals.</p>
            <p>The HUMSS strand opens doors to dynamic and high-demand careers. By pursuing any of these courses, you’ll be equipped with skills for professions that significantly impact society while offering competitive salaries.</p>
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
    
export default ResultABM;