import Layout from "./Layout";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import "./Assessment.css"; // Import your CSS file for styling
import Header from "./Header";

function AssessmentPage() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();


  useEffect(() => {
    fetch("http://127.0.0.1:5000/Assessment")
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
      });
  }, []);

  const handleOptionChange = (e) => {
    setAnswers({
      ...answers,
      [currentIndex]: parseInt(e.target.value),
    });
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    
    // Here you can process the collected answers
    const response = await axios.post('http://localhost:5000/submit', {answers: Object.values(answers)});
    console.log('Response from Flask:', response.data);
    const recommendation = response.data.recommendation; // Assuming the response contains results
    const STEM = response.data.STEM; 
    const HUMSS = response.data.HUMSS; 
    const ABM = response.data.ABM; 
    if (recommendation === "STEM") {
      page_to_navigate = "/resultSTEM";
    } else if (recommendation === "HUMSS") {
      page_to_navigate = "/resultHUMSS";
    }else if (recommendation === "ABM") {
      page_to_navigate = "/resultABM";
    }
    navigate(page_to_navigate, {state: {"STEM": STEM, "HUMSS": HUMSS, "ABM": ABM}});
  };

  if (questions.length === 0) {
    return <Layout bodyClass="assessment-bg"><Header /><p>Loading questions...</p></Layout>;
  }

  const question = questions[currentIndex];
  const selectedValue = answers[currentIndex] || "";

  return (
    <Layout bodyClass="assessment-bg">
      <Header />
      <div className="question-container">
        <p>
          Question {currentIndex + 1} of {questions.length}
        </p>
        <p className="question-text">{question.questiontext}</p>
        <form onSubmit={handleNext}>
          <div className="option-group">
            {[1, 2, 3, 4, 5].map((num) => (
              <label key={num} className="option-label">
                <input
                  type="radio"
                  name={`q${currentIndex}`}
                  value={num}
                  checked={selectedValue === `${num}`}
                  onChange={handleOptionChange}
                />
                {num}
              </label>
            ))}
          </div>

          <div className="button-row">
            <button
              type="submit"
              className="next-button"
              disabled={!selectedValue}
            >
              {currentIndex < questions.length - 1 ? 'Next' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default AssessmentPage;