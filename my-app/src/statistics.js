import React, { useEffect, useState } from "react";
import Userdashboard from "./Userdashboard";            // your nav/sidebar
import "./Userdashboard-home.css";
import "./statistics.css";                             // the CSS below

import { Doughnut } from "react-chartjs-2";

// static scatter images—place these in src/images/
import scatterOverview from "./images/scatter_overview.png";
import scatterYou from "./images/scatter_you.png";

function Statistics() {
  const [data, setData] = useState({
    neighbors: [],
    stem_score: 0,
    humss_score: 0,
    abm_score: 0
  });

  useEffect(() => {
    fetch("http://127.0.0.1:5000/statistics")
      .then((res) => res.json())
      .then(setData)
      .catch((err) => console.error("Error fetching statistics:", err));
  }, []);

  return (
    <>
      <Userdashboard />

      <div className="statistics">
        {/* ——— Centered Doughnut Graph ——— */}
        <div className="graphD">
          <Doughnut
            data={{
              labels: ["STEM", "HUMSS", "ABM"],
              datasets: [
                {
                  label: "Your proximity to each strand",
                  data: [
                    data.stem_score,
                    data.humss_score,
                    data.abm_score
                  ],
                  backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                  borderRadius: 5
                }
              ]
            }}
          />
          <div className="graphD-label">
            This Doughnut chart represents the <strong> K value </strong> used in the K-Nearest Neighbors algorithm.
          </div>
        </div>

        {/* ——— Dark-Blue Scatterplot Panel ——— */}
        <div className="scatter-panel">
          {/* Top row: image + text */}
          <div className="scatter-row scatter-top">
            <div className="scatter-img">
              <img
                src={scatterOverview}
                alt="3D scatter overview"
              />
            </div>
            <div className="scatter-text">
              <p>
                This is a 3D visual representation of the scatterplot, designed
                to display how your assessment data aligns with other student
                profiles.
              </p>
            </div>
          </div>

          {/* Bottom row: full-width scatter + “You are here” */}
          <div className="scatter-row scatter-bottom">
            <div className="scatter-img-full">
              <img
                src={scatterYou}
                alt="You are here on scatterplot"
              />
              <p>Using the K-Nearest Neighbors (KNN) algorithm, combined with your responses on the Likert-scale assessment, we compared your answers with real data from other students.<br/>
                Your responses closely aligned with:<br/>
                ✅ 15 STEM students<br/>
                ✅ 5 HUMSS students<br/>
                ✅ 10 ABM students<br/>
                Because the majority of your responses matched those of STEM students, you’ve been recommended for the STEM track.<br/><br/>
                This suggests you may thrive in fields involving science, technology, engineering, or math—especially if you enjoy analytical thinking, problem-solving, and logic-based tasks.</p>
            </div>
          </div>
        </div>

        {/* ——— Neighbors Table ——— */}
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Strand</th>
              <th>Distance</th>
            </tr>
          </thead>
          <tbody>
            {data.neighbors.map((item, idx) => (
              <tr key={idx}>
                <td>{item.neighbor_index}</td>
                <td>{item.strand}</td>
                <td>{item.distance.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="table-caption">
          These are the statistics of the distance of the strands from the
          other strands. The lower the distance, the more similar the strands
          are to each other.
        </p>
      </div>
    </>
  );
}

export default Statistics;
