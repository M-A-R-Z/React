import Layout from "./Layout";
import React, { useEffect, useState } from "react";
import "./Assessment.css"; // Import your CSS file for styling
import Header from "./Header";

function AssessmentPage() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});


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
      [currentIndex]: e.target.value,
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

  const handleSubmit = () => {
    // Here you can process the collected answers
    
    console.log('Submitted answers:', answers);
    // e.g., send to server or navigate to results page
    alert('Assessment submitted!');
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
