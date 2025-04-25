import Layout from "./Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./Assessment.css";
import Header from "./Header";

const likertOptions = [
  { value: 1, label: "Strongly Disagree", className: "red" },
  { value: 2, label: "Disagree",        className: "red" },
  { value: 3, label: "Neutral",         className: "white" },
  { value: 4, label: "Agree",           className: "green" },
  { value: 5, label: "Strongly Agree",  className: "green" },
];

function AssessmentPage() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://127.0.0.1:5000/Assessment")
      .then((res) => res.json())
      .then(setQuestions)
      .catch((err) => console.error("Error fetching questions:", err));
  }, []);

  const handleOptionChange = (e) => {
    setAnswers({
      ...answers,
      [currentIndex]: parseInt(e.target.value, 10),
    });
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    const payload = { answers: Object.values(answers) };
    const { data } = await axios.post("http://localhost:5000/submit", payload);
    const { recommendation, STEM, HUMSS, ABM, K } = data;
    let path = "/resultSTEM";
    if (recommendation === "HUMSS") path = "/resultHUMSS";
    else if (recommendation === "ABM") path = "/resultABM";
    navigate(path, { state: { STEM, HUMSS, ABM, K } });
  };

  if (!questions.length) {
    return (
      <Layout bodyClass="assessment-bg">
        <Header />
        <p>Loading questions…</p>
      </Layout>
    );
  }

  const question = questions[currentIndex];
  const selected = answers[currentIndex] || "";

  // compute progress %
  const progress = ((currentIndex + 1) / questions.length) * 100;

  return (
    <Layout bodyClass="assessment-bg">
      <Header />
      <div className="question-container">
        {/* Progress bar inside the container */}
        <sub>
          {currentIndex + 1}/{questions.length}
        </sub>
        <div className="progress-container">
          <div
            className="progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p>
          Question {currentIndex + 1}
        </p>
        <p className="question-text">{question.questiontext}</p>

        <form onSubmit={handleNext}>
          <div className="likert-options">
            {likertOptions.map((opt) => {
              const isActive = selected === opt.value;
              return (
                <label
                  key={opt.value}
                  className={`option-wrapper ${opt.className} ${isActive ? "selected" : ""}`}
                >
                  <span className="option-label-text">{opt.label}</span>
                  <input
                    type="radio"
                    name={`q${currentIndex}`}
                    value={opt.value}
                    checked={isActive}
                    onChange={handleOptionChange}
                    className="option-input"
                  />
                  <span className="option-circle" />
                </label>
              );
            })}
          </div>

          <div className="button-row">
            <button
              type="submit"
              className="next-button"
              disabled={!selected}
            >
              {currentIndex < questions.length - 1 ? "Next" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default AssessmentPage;
