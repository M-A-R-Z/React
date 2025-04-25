import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from './Authentication';
import HomePageLogo from './images/homepage_logo.png';
import UserIcon from './images/userIconMale.png'; 
import './Home.css';

function Header() {
  const { isAuthenticated } = useContext(AuthContext);

  const linkClass = ({ isActive }) =>
    isActive ? 'active nav-link' : 'nav-link';

  return (
    <nav className="topnav">
      {/* Logo always active link to home */}
      <NavLink to="/" className="logo">
        <img src={HomePageLogo} alt="homepagelogo" />
      </NavLink>

      {/* Standard nav items with active underline */}
      <NavLink to="/support" className={linkClass}>
        Support
      </NavLink>
      <NavLink to="/about" className={linkClass}>
        About
      </NavLink>
      <NavLink to="/career" className={linkClass}>
        Career
      </NavLink>

      {/* User icon or login link */}
      {isAuthenticated ? (
        <NavLink to="/UserdashboardHome" className={linkClass}>
          <img src={UserIcon} alt="user-icon" className="user-icon" />
        </NavLink>
      ) : (
        <NavLink to="/login" className={linkClass}>
          User
        </NavLink>
      )}
    </nav>
  );
}

export default Header;
