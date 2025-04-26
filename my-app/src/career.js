import React from 'react';
import Header from './Header';
import './career.css';
import Careers from './images/1career.png';
import STEM from './images/STEM.png';
import ABM from './images/ABM.png'; 
import HUMSS from './images/HUMSS.png';

function Career() {
  return (
    <>
      <Header />
      <div className="career-container">
        <div className="intro-section">
          <div className="intro-box">
            <p className="pathfinder-paragraph">
              Here at <strong>PathFinder</strong>, we're all about helping you <strong>take the first step</strong> toward a <strong>future that fits you</strong>.
              Whether you already have a dream job in mind or you're still figuring things out, we'll <strong>guide you</strong> through the strands and the careers that align with your <strong>interests</strong>, <strong>strengths</strong>, and <strong>aspirations</strong>.
            </p>
          </div>
          <img src={Careers} alt="Career Crossroads" className="career-image" />
        </div>

        <h1>🌟Discover Your Strand</h1>
        <p>Based on your answers and personality indicators, you’ll be matched with one of the major Senior High School strands:</p>
        <img src={STEM} alt="STEM" className="strand-image" />
        <p>For the analytical, curious, and future-builders.</p>
        <h1><strong>STEM - </strong>Science, Technology, Engineering and Mathematics</h1>
        <div className="strand-description">
            <p>These Programs include but are not limited to:</p>
            <ul>
                <li>Engineering</li>
                <li>Computer-related</li>
                <li>Health & Medical Sciences</li>
            </ul>
            <p>These Career Paths include but are not limited to: </p>
            <ul>
                <li>Software Developer</li>
                <li>Architect</li>
                <li>Medical Technologist</li>
                <li>Data Analyst</li>
                <li>Engineer</li>
                <li>and all related to Science, Technology, Engineering & Mathematics</li>
            </ul>
        </div>
        <img src={ABM} alt="ABM" className="strand-image" />
        <p>For the strategic, entrepreneural, and financially savvy.</p>
        <h1><strong>ABM - </strong>Accountancy, Business and Management</h1>
        <div className="strand-description">
            <p>These Programs include but are not limited to:</p>
            <ul>
                <li>Accountancy</li>
                <li>Marketing</li>
                <li>Financial Management</li>
                <li>Business Administration</li>
            </ul>
            <p>These Career Paths include but are not limited to: </p>
            <ul>
                <li>Entreprenuer</li>
                <li>Financial Analyst</li>
                <li>Business Consultant</li>
                <li>E-commerce Manager</li>
                <li>Accountancy</li>
                <li>and all related to Accountancy, Business and Management</li>
            </ul>
        </div>
        <img src={HUMSS} alt="STEM" className="strand-image" />
        <p>For the expressive, empathetic, and socially driven.</p>
        <h1><strong>HUMSS - </strong>Humanities and Social Sciences</h1>
        <div className="strand-description">
            <p>These Programs include but are not limited to:</p>
            <ul>
                <li>Psychology</li>
                <li>Communication Arts</li>
                <li>Education</li>
                <li>Political Sciece</li>
                <li>Legal Management</li>
            </ul>
            <p>These Career Paths include but are not limited to: </p>
            <ul>
                <li>Teacher</li>
                <li>Psychologist</li>
                <li>Social Worker</li>
                <li>Journalist</li>
                <li>Lawyer</li>
                <li>Politicians</li>
                <li>and all related to Humanities and Social Sciences</li>
            </ul>
        </div>
      </div>
    </>
  );
}

export default Career;