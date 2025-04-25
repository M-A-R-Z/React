import React from 'react';
import Userdashboard from "./Userdashboard"; // import the user dashboard component
import './Userdashboard-home.css';
import './result.css'; // Import the CSS file for styling
import HUMSSimg from './images/HUMSS.png';
import { useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom
import { Chart as ChartJS } from 'chart.js/auto';
import { Bar, Doughnut } from 'react-chartjs-2';

function ResultABM() {
    const location = useLocation();
    const { STEM, HUMSS, ABM, K } = location.state || {};

return (
    <>
        <Userdashboard />
        <div className="result">
            <img src={HUMSSimg} alt="humss"/>
        <div className="graphS">
            <Bar
              data={{
                labels: ["STEM", "HUMSS", "ABM"], 
                datasets: [{
                  label: "Your answers are near to this amount", 
                  data: [STEM, HUMSS, ABM], 
                  backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                  borderRadius: 5
                }]
              }}options={{
                scales: {
                  y: {
                    beginAtZero: true,
                    max: K 
                  }
                }
              }}
            />
              <Doughnut data={{
                labels: ["STEM", "HUMSS", "ABM"], 
                datasets: [{
                  label: "Your answers are near to this amount", 
                  data: [STEM,HUMSS,ABM], 
                  backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                  borderRadius: 10
                }
              ]}
              }
              />
            </div>
            
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