// Userdashboard.js
import React from 'react';
import Header from "./Header";
import Layout from "./Layout"; // import the layout component we just created
import './Userdashboard.css';
import { Link } from 'react-router-dom';
import AssessmentIcon from './images/UD-assessmentIcon.png';
import CoursesIcon from './images/UD-coursesIcon.png';
import FAQSIcon from './images/UD-faqsIcon.png';
import HomeIcon from './images/UD-homeIcon.png';
import CareersIcon from './images/UD-careersIcon.png';
import StatisticsIcon from './images/UD-statisticsIcon.png';

function Userdashboard() { 
  return (
    <Layout bodyClass="userdashboard-bg">
      <Header />
        <nav className="userdashboard-nav">
            <Link to="/UserdashboardHome" className="icon">
                <img src={HomeIcon} alt="dashboardIcon" />
            </Link>
            <Link to="/" className="icon">
                <img src={AssessmentIcon} alt="dashboardIcon" />
            </Link>
            <Link to="/" className="icon">
                <img src={StatisticsIcon} alt="dashboardIcon" />
            </Link>
            <Link to="/" className="icon">
                <img src={CoursesIcon} alt="dashboardIcon" />
            </Link>
            <Link to="/" className="icon">
                <img src={CareersIcon} alt="dashboardIcon" />
            </Link>
            <Link to="/Userdashboard-FAQs" className="icon">
                <img src={FAQSIcon} alt="dashboardFAQs" />
            </Link>
        </nav>
    </Layout>
  );
}

export default Userdashboard;
