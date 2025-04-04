import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import FindOutButton from './images/FindOutNow button.jpg';
import FindOutHover from './images/FindOutNow hover.jpg';
import './Home.css';

function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <p>What do you dream of?</p>
        <Link to="/login" className="img-container">
          <img src={FindOutButton} alt="FindOut button" className="defaultImg" />
          <img src={FindOutHover} alt="FindOut hover" className="hoverImg" />
        </Link>
      </div>
    </>
  );
}

export default Home;
    