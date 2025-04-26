import React from 'react';
import Header from "./Header";
import Layout from "./Layout"; // import the layout component we just created
import './Userdashboard.css';
import { NavLink } from 'react-router-dom';
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
            <NavLink to="/UserdashboardHome" className={({ isActive }) => isActive ? 'icon active' : 'icon'}>
                <img src={HomeIcon} alt="Home" />
            </NavLink>
            <NavLink to="/UserdashboardAssessment" className={({ isActive }) => isActive ? 'icon active' : 'icon'}>
                <img src={AssessmentIcon} alt="UserdashboardAssessment" />
            </NavLink>
            <NavLink to="/" className={({ isActive }) => isActive ? 'icon active' : 'icon'}>
                <img src={StatisticsIcon} alt="Statistics" />
            </NavLink>
            <NavLink to="/Userdashboard-Courses" className={({ isActive }) => isActive ? 'icon active' : 'icon'}>
                <img src={CoursesIcon} alt="Courses" />
            </NavLink>
            <NavLink to="/Userdashboard-Careers" className={({ isActive }) => isActive ? 'icon active' : 'icon'}>
                <img src={CareersIcon} alt="Careers" />
            </NavLink>
            <NavLink to="/Userdashboard-FAQs" className={({ isActive }) => isActive ? 'icon active' : 'icon'}>
                <img src={FAQSIcon} alt="FAQs" />
            </NavLink>
        </nav>
    </Layout>
  );
}

export default Userdashboard;