import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Authentication'; // For the AuthProvider
import Home from './Home';
import Login from './login'; // For Login component
import Signup from './signup'; // For Signup component
import Support from './support'; // For Support component
import About from './about'; // For About component
import Userdashboard from './Userdashboard'; // For Userdashboard Header component
import UserdashboardHome from './Userdashboard-home'; // For UserdashboardHome component
import UserdashboardFAQ from './Userdashboard-FAQs';
import ResultSTEM from './resultSTEM'; // For STEM results
import ResultABM from './resultABM'; // For ABM results
import ResultHUMSS from './resultHUMSS'; // For HUMSS results
import AssessmentPage from './Assessment'; // For Assessment component

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
        <Route path="/ResultSTEM" element={<ResultSTEM />} />
        <Route path="/ResultABM" element={<ResultABM />} />
        <Route path="/ResultHUMSS" element={<ResultHUMSS />} />
        <Route path="/Assessment" element={<AssessmentPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
