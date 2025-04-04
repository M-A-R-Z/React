// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import HomePageLogo from './images/homepage_logo.png';
import './Home.css';

function Header() {
  return (
    <nav className="topnav">
      <Link to="/" className="logo">
        <img src={HomePageLogo} alt="homepagelogo" />
      </Link>
      <a href="#support">Support</a>
      <a href="#contact">About</a>
      <a href="#news">Career</a>
      <Link to="/login">User</Link>
    </nav>
  );
}

export default Header;
