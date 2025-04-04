import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import './login.css';
import './Home.css';

function LogIn() {
  return (
    <>
      <Header />
      <div className="login-overlay">
        <div className="login-container">
          <button className="close-button">X</button>
          <h2>LOG-IN</h2>
          <div className="input-group">
            <label>Username / Email</label>
            <span className="input-icon">🔑</span>
            <input type="text" placeholder="Username / Email" />
          </div>
          <div className="input-group">
            <label>Password</label>
            <span className="input-icon">🔒</span>
            <input type="password" placeholder="Password" />
          </div>
          <div className="remember-me">
            <input type="checkbox" />
            <label>Remember Me</label>
          </div>
          <button className="login-button">LOG-IN</button>
          <p className="signup-text">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default LogIn;
