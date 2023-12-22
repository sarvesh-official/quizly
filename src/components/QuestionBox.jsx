import { useState, useEffect } from "react";
import questions from "../assets/questions";
import Result from "./Result";
export default function QuestionBox() {
  // initializing states
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(questions[index]);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);

  // Highlight
  const [highlight, setHighlight] = useState(false);

  // Using useEffect to handle state updates after rendering
  useEffect(() => {
    setQuestion(questions[index]);
  }, [index]);

  const next = () => {
    if (index === questions.length - 1) {
      setResult(true);
      return 0;
    }
    setIndex((prevIndex) => prevIndex + 1);
  };
  // To check the answer is crt or not
  const checkAns = (isCorrect) => {
    if (isCorrect) {
      setScore((prev) => prev + 1); // Incrementing score if correct
    }
    next();
  };
  // reset
  const reset = () => {
    setResult(false);
    setScore(0);
    setIndex(0);
  };

  return (
    <div className="container">
      {result ? (
        <>
          <Result score={score} reset={reset} />
        </>
      ) : (
        <>
          <div className="questionDiv">
            <h2
              className="question"
              style={{ color: highlight ? "black" : "" }}
            >
              {question.text}
            </h2>
            <div className="option-container option-grid">
              {/* <ul className="option-grid"> */}
              {question.options.map((element, index) => {
                return (
                  <button
                    className="option"
                    key={index}
                    onClick={() => {
                      checkAns(element.isCorrect);
                    }}
                  >
                    {element.text}
                  </button>
                );
              })}
            </div>
            <div className="highlightDiv">
              <button
                className="removeHighlight"
                onClick={() => setHighlight(false)}
              >
                REMOVE HIGHLIGHT{" "}
              </button>
              {"  "}
              <button className="highlight" onClick={() => setHighlight(true)}>
                HIGHLIGHT
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
