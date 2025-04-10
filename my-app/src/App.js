import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './login'; // Make sure you've created a Login component
import Signup from './signup'; // Make sure you've created a Signup component
import Support from './support'; // Make sure you've created a Support component
import About from './about'; // Make sure you've created an About component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
