import React from 'react';
import Userdashboard from "./Userdashboard"; // import the user dashboard component
import './Userdashboard-assessment.css';
import { Link } from 'react-router-dom';

function UserdashboardAssessment() {
  return (
    <>
      <Userdashboard />
      <div className="assessmentdashboard-container">
        <div className="assessment-container">
          <h1>You haven’t taken an assessment yet.</h1>
          <p>
          Find out what is your desired course<br/>and possible future career by taking<br/> our assessment!
          </p>
          <div className="btn-container">
            <Link to='/Assessment'><button className="assessment-button">Generate Assessment</button></Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserdashboardAssessment;
