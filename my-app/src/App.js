import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './js/Authentication'; // For the AuthProvider
import Home from './js/Home';
import Login from './js/login'; // For Login component
import Signup from './js/signup'; // For Signup component
import Support from './js/support'; // For Support component
import About from './js/about'; // For About component
import Career from './js/career'; // For Career component
import Userdashboard from './js/Userdashboard'; // For Userdashboard Header component
import UserdashboardHome from './js/Userdashboard-home'; // For UserdashboardHome component
import UserdashboardFAQ from './js/Userdashboard-FAQs';
import ResultSTEM from './js/resultSTEM'; // For STEM results
import ResultABM from './js/resultABM'; // For ABM results
import ResultHUMSS from './js/resultHUMSS'; // For HUMSS results
import AssessmentPage from './js/Assessment'; // For Assessment component
import Statistics from'./js/statistics'; // For Statistics component
import UserdashboardAssessment from './js/Userdashboard-assessment'; // For Assessment component
import Courses from './js/Userdashboard-Courses'; // For Courses component
import Careers from './js/Userdashboard-Careers'; // For Careers component

function App() {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/support" element={<Support />} />
        <Route path="/career" element={<Career />} /> 
        <Route path="/Userdashboard" element={<Userdashboard />} />
        <Route path="/UserdashboardHome" element={<UserdashboardHome />} />
        <Route path="/about" element={<About />} />
        <Route path="/Userdashboard-FAQs" element={<UserdashboardFAQ />} />
        <Route path="/ResultSTEM" element={<ResultSTEM />} />
        <Route path="/ResultABM" element={<ResultABM />} />
        <Route path="/ResultHUMSS" element={<ResultHUMSS />} />
        <Route path="/Assessment" element={<AssessmentPage />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/UserdashboardAssessment" element={<UserdashboardAssessment />} />
        <Route path="/Userdashboard-Courses" element={<Courses />} /> 
        <Route path="/Userdashboard-Careers" element={<Careers />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
