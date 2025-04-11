import React from 'react';
import Userdashboard from "./Userdashboard"; // import the user dashboard component
import './Userdashboard-home.css';

function UserdashboardHome() {
  return (
    <>
      <Userdashboard />
      <div className="dashboard-container">
        <div className="left-container">
          <h1>Create an Assessment</h1>
          <p>
            Find out what is your desired course and possible future career by taking our assessment!
          </p>
          <div className="btn-container">
            <button className="left-button">Take Assessment</button>
          </div>
        </div>
        <div className="right-container">
          <h1>Check your Statistics</h1>
          <p>
            Look at your statistics to see how accurate your careers and courses are to what you want!
          </p>
          <div className="btn-container">
            <button className="right-button">View Statistics</button>
          </div>
        </div><br/><br/><br/>
      </div>
    </>
  );
}

export default UserdashboardHome;
