import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import FindOutButton from './images/FindOutNow button.jpg';
import FindOutHover from './images/FindOutNow hover.jpg';
import './about.css';

function About() {
  return (
    <>
      <Header />
      <div className="container">
        <p>What do you dream of?</p>
        <Link to="/login" className="img-container">
        </Link>
      </div>
    </>
  );
}

export default About;
    