import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Authentication';
import HomePageLogo from './images/homepage_logo.png';
import UserIcon from './images/userIconMale.png'; 
import './Home.css';

function Header() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <nav className="topnav">
      <Link to="/" className="logo">
        <img src={HomePageLogo} alt="homepagelogo" />
      </Link>
      <Link to="/support">Support</Link>
      <a href="/about">About</a>
      <a href="#news">Career</a>
      {isAuthenticated ? (
        // Here you can style or import an icon of your choice.
        <span className="user-icon">
          {/* Example using Unicode emoji or an icon font: */}
          <Link to='/UserdashboardHome'><img src={UserIcon} alt="user-icon" className="user-icon" /></Link>
        </span>
      ) : (
        <Link to="/login">User</Link>
      )}
    </nav>
  );
}

export default Header;
