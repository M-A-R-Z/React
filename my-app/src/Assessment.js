import React from 'react';
import Header from './Header'; // reuse your Header component
import './AssessmentPage.css'; // custom CSS for the assessment page
import Layout from './Layout';

function AssessmentPage() {
  return (
    <Layout bodyClass='userdashboard-bg'>
      <Header />
      <div className="assessment-content">
        <h1>Assessment</h1>
        <p>Welcome to the assessment page. Please follow the instructions below to complete your assessment.</p>
        {/* Add more content or components for your assessment as needed */}
      </div>
    </Layout>
  );
}

export default AssessmentPage;
