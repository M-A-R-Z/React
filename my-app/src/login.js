import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import { AuthContext } from './Authentication';
import './login.css';
import './Home.css';

function LogIn() {
  const { loginUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Attempting login with:", formData);
    
    // Validate user credentials using the context
    const success = loginUser(formData);
    if (success) {
      navigate("/");
    } else {
      // Display error as a pop-up alert
      alert("Invalid credentials. Please check your email/username or password.");
    }
  };

  return (
    <>
      <Header />
      <div className="login-overlay">
        <div className="login-container">
          <Link to="/"><button className="close-button">X</button></Link>
          <h2>LOG-IN</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Username / Email</label>
              <span className="input-icon">🔑</span>
              <input
                type="email"
                name="usernameOrEmail"
                placeholder="Username / Email"
                value={formData.usernameOrEmail}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label>Password</label>
              <span className="input-icon">🔒</span>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <button type="submit" className="login-button">LOG-IN</button>
          </form>
          <p className="signup-text">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default LogIn;
