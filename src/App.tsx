import React, { useState } from "react";
import "./App.css";

type QAData = {
  question: string;
  answers: {
    yes: string;
    no: string;
  };
};

const qaData: QAData = {
  question: "Do you like React?",
  answers: {
    yes: "Good choice!",
    no: "Damn!",
  },
};

const QAGame: React.FC = () => {
  const [answer, setAnswer] = useState<null | string>(null);

  const handleAnswer = (choice: "yes" | "no") => {
    setAnswer(qaData.answers[choice]);
  };
  return (
    <div className="game">
      <h2 className="question">{qaData.question}</h2>
      <div className="container">
        <div className="choiceContainer">
          <button className="choice yes " onClick={() => handleAnswer("yes")}>
            Yes
          </button>
          <button className="choice no" onClick={() => handleAnswer("no")}>
            No
          </button>
        </div>
        <div className="answer">{answer}</div>
      </div>
    </div>
  );
};

function App() {
  return (
    <>
      <QAGame />
    </>
  );
}

export default App;
