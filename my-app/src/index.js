import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FindOutButton from './images/FindOutNow button.jpg';
import FindOutHover from './images/FindOutNow hover.jpg';

function Home() {
  return (
    <div>
      <nav className="topnav">
        <a href="#support">Support</a>
        <a href="#contact">About</a>
        <a href="#news">Career</a>
        <a href="user">User</a>
      </nav>
      <div className="container">
        <p>What do you dream of?</p>
        <a href="index.js" className="img-container">
          <img src={FindOutButton} alt="findOut button" className="defaultImg" />
          <img src={FindOutHover} alt="findOut hover" className="hoverImg" />
        </a>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
