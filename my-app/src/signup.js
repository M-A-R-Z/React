import React, { useState } from 'react';
import "./signup.css";

const SignUpForm = () => {
        const [formData, setFormData] = useState({
          firstName: "",
          middleName: "",
          surname: "",
          affix: "",
          birthday: "",
          gender: "",
          studentEmail: "",
          password: "",
          confirmPassword: "",
        });
      
        const handleChange = (e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
          }
          console.log("Form submitted:", formData);
        };
      
        return (
          <div className="signup-container">
            <form onSubmit={handleSubmit} className="signup-form">
              <h2 className="signup-title">SIGN-UP</h2>
      
              <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} className="input-field" required />
              <input type="text" name="middleName" placeholder="Middle Name" onChange={handleChange} className="input-field" />
              <input type="text" name="surname" placeholder="Surname" onChange={handleChange} className="input-field" required />
              <input type="text" name="affix" placeholder="Affix (Optional)" onChange={handleChange} className="input-field" />
      
              <div className="input-row">
                <input type="date" name="birthday" onChange={handleChange} className="input-field" required />
                <select name="gender" onChange={handleChange} className="input-field" required>
                  <option value="">Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
      
              <input type="email" name="studentEmail" placeholder="Student Email" onChange={handleChange} className="input-field" required />
              <input type="password" name="password" placeholder="Password" onChange={handleChange} className="input-field" required />
              <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} className="input-field" required />
      
              <button type="submit" className="signup-button">SIGN-UP</button>
            </form>
          </div>
    );
};

function Signup() {
    return <SignUpForm />;
}

export default Signup;