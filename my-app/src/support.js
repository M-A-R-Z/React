import React from 'react';
//import { Link } from 'react-router-dom';
import Header from './Header';
import './support.css';
import './Home.css';

function Support() {
  return (
    <>
      <Header />
        <p>Welcome to PathFinder Support</p>
        <div class="support-overlay">
          <div class="search-container">  
            <input type = "text" placeholder="How may we assist you?" class ="search-bar"/>
        </div>
      </div>
    </>
  );
}
export default Support;