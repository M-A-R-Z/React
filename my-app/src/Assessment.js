import React, { useState, useEffect } from 'react';
import Header from './Header';
import Layout from './Layout';

function AssessmentPage() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState({});
  const [loading, setLoading] = useState(true);

  // Fetch questions from the backend or a local dataset
  useEffect(() => {
    fetch('/Questions.json') // Replace with your actual endpoint
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched questions:', data);
        setQuestions(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Failed to fetch questions:', error);
        setLoading(false);
      });
  }, []);

  const handleResponseChange = (e, questionId) => {
    setResponses({
      ...responses,
      [questionId]: e.target.value,
    });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    console.log('User Responses:', responses);
    // You can send responses to your backend here if needed
    alert('Assessment submitted. Thank you!');
  };

  if (loading) {
    return (
      <Layout bodyClass='userdashboard-bg'>
        <Header />
        <div className="assessment-content">
          <p>Loading questions...</p>
        </div>
      </Layout>
    );
  }

  // Check if there are any questions available
  if (questions.length === 0) {
    return (
      <Layout bodyClass='userdashboard-bg'>
        <Header />
        <div className="assessment-content">
          <p>No questions available.</p>
        </div>
      </Layout>
    );
  }

  const question = questions[currentQuestion];

  return (
    <Layout bodyClass='userdashboard-bg'>
      <Header />
      <div className="assessment-content">
        <h1>Assessment</h1>
        <p>Please answer the following question:</p>

        <div className="question-box">
          <h3>
            Question {currentQuestion + 1} of {questions.length} ({question.category})
          </h3>
          <p>{question.text}</p>
          <div className="likert-scale">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="likert-option">
                <input
                  type="radio"
                  name={`q${question.id}`}
                  value={value}
                  checked={responses[question.id] === String(value)}
                  onChange={(e) => handleResponseChange(e, question.id)}
                />
                {value}
              </label>
            ))}
          </div>
        </div>

        <div className="navigation-buttons">
          {currentQuestion > 0 && (
            <button onClick={prevQuestion} className="nav-btn">
              Previous
            </button>
          )}
          {currentQuestion < questions.length - 1 ? (
            <button onClick={nextQuestion} className="nav-btn">
              Next
            </button>
          ) : (
            <button onClick={handleSubmit} className="nav-btn submit-btn">
              Submit
            </button>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default AssessmentPage;
