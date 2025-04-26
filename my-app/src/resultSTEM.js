import React from 'react';
import Userdashboard from "./Userdashboard"; // import the user dashboard component
import './Userdashboard-home.css';
import './result.css'; // Import the CSS file for styling
import STEMimg from './images/STEM.png';
import { useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom
import { Chart as ChartJS } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

function ResultSTEM() {

    const location = useLocation();
    const { stem_score, humss_score, abm_score, k, tie, tie_strands} = location.state || {};

return (
    <>
        <Userdashboard />
        <div className="result">
            <img src={STEMimg} alt="stem"/>
          <div className="graphS">
            <Bar
              data={{
                labels: ["STEM", "HUMSS", "ABM"], 
                datasets: [{
                  label: "Your answers are near to this amount", 
                  data: [stem_score, humss_score, abm_score], 
                  backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                  borderRadius: 5
                }]
              }}options={{
                scales: {
                  y: {
                    beginAtZero: true,
                    max: k 
                  }
                }
              }}
            />
            
            </div>
            <p>Based on your answers, PathFinder suggests the STEM (Science, Technology, Engineering, and Mathematics) strand is the best fit for you. This strand aligns with your skills, interests, and goals.</p>
            <p>The STEM strand opens doors to dynamic and high-demand careers. By pursuing any of these courses, you’ll be equipped with skills for professions that significantly impact society while offering competitive salaries.</p>
            {/* Add your search result content here */}
            {tie && (
                <div className="tie-container">
                    <h2>Weighted Distance Analysis</h2>
                    <p>
                        A tie has been detected between the top recommended strands. Based on weighted distance analysis, the following strands received equal consideration:
                    </p>
                    <ul>
                        {Object.entries(tie_strands).filter(([key]) => key !== "results_id").map(([strand, weight]) => (
                            <li key={strand}>
                                {strand}: {weight.toFixed(4)}
                            </li>
                        ))}
                    </ul>
                    <p>
                        The final recommendation was determined based on the strand with the highest overall weight, which resulted as
                        <strong>HUMMSS</strong> being the most prominent out of the other strands.
                    </p>
                </div>
            )}
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

export default ResultSTEM;