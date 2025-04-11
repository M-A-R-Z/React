import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Authentication'; // Import the AuthProvider
import Home from './Home';
import Login from './login'; // Make sure you've created a Login component
import Signup from './signup'; // Make sure you've created a Signup component
import Support from './support'; // Make sure you've created a Support component
import About from './about'; // Make sure you've created an About component
import Userdashboard from './Userdashboard'; // Make sure you've created a Userdashboard component
import UserdashboardHome from './Userdashboard-home'; // Make sure you've created a UserdashboardHome component
import UserdashboardFAQ from './Userdashboard-FAQs';

function App() {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/support" element={<Support />} />
        <Route path="/Userdashboard" element={<Userdashboard />} />
        <Route path="/UserdashboardHome" element={<UserdashboardHome />} />
        <Route path="/about" element={<About />} />
        <Route path="/Userdashboard-FAQs" element={<UserdashboardFAQ />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
