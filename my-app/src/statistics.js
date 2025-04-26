import React, { useEffect, useState } from "react";
import Userdashboard from "./Userdashboard"; // import the user dashboard component
import './Userdashboard-home.css';
import './result.css'; // Import the CSS file for styling
import { Doughnut } from "react-chartjs-2";




function Statistics() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch("http://127.0.0.1:5000/statistics")
          .then((res) => res.json())
          .then(setData)
          .catch((err) => console.error("Error fetching questions:", err));
      }, []);

return (
    <>
        <Userdashboard />
        <div className="statistics">

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Strand</th>
                        <th>Distance</th>
                    </tr>
                </thead>
                <tbody>
                    {data.neighbors && data.neighbors.map((item, index) => (
                        <tr key={index}>
                            <td>{item.neighbor_index}</td>
                            <td>{item.strand}</td>
                            <td>{item.distance}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>These are the statistics of the distance of the strands from the other strands. The lower the distance, the more similar the strands are to each other.</p>
                <div className="graphS">
                            <Doughnut
                              data={{
                                labels: ["STEM", "HUMSS", "ABM"], 
                                datasets: [{
                                  label: "Your answers are near to this amount", 
                                  data: [data.stem_score, data.humss_score, data.abm_score],
                                  backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                                  borderRadius: 5
                                }]
                              }}
                            />
                </div>
        </div><br/><br/><br/><br/><br/><br/>
    </>
);
}
    
export default Statistics;