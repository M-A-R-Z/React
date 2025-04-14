import React, { useEffect, useState } from "react";

function AssessmentPage() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/questions")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // for debugging
        setQuestions(data); // store in state
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
      });
  }, []);

  return (
    <div>
      <h1>Assessment</h1>
      <form>
        {questions.map((question, index) => (
          <div key={index} className="question-block">
            <p>
              {index + 1}. {question.text}
            </p>

            <label>
              <input type="radio" name={`q${index}`} value="1" /> 1
            </label>
            <label>
              <input type="radio" name={`q${index}`} value="2" /> 2
            </label>
            <label>
              <input type="radio" name={`q${index}`} value="3" /> 3
            </label>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AssessmentPage;
