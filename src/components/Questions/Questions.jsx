import React, { useState } from 'react';
import "../Start.css";

const Questions = ({ questions }) => {
  const [count, setCount] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[count]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answerStatus, setAnswerStatus] = useState(null);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(null);
  const [totalScore, setTotalScore] = useState(0);
  const [firstChoiceMade, setFirstChoiceMade] = useState(false);

  const handleChoice = (choice) => {
    if (selectedOption !== null) return;

    setSelectedOption(choice);

    if (!firstChoiceMade) {
      setFirstChoiceMade(true);

      if (choice === currentQuestion.answer) {
        setAnswerStatus('correct');
        setTotalScore(totalScore + 1);
      } else {
        setAnswerStatus('incorrect');
      }
    }

    const correctAnswerIndex = currentQuestion.options.findIndex(option => option === currentQuestion.answer);
    setCorrectAnswerIndex(correctAnswerIndex);
  };

  const handleNextQuestion = () => {
    if(!selectedOption){
      alert("please Answer the Question")
      return;
    }
    setAnswerStatus(null);
    setSelectedOption(null);
    setCorrectAnswerIndex(null);
    setFirstChoiceMade(false);
    setCount(count + 1);
    setCurrentQuestion(questions[count + 1]);
  };

  return (
    <div>
      <div className="qsncontainer">
        {count < questions.length ? (
          <div>
            <div className="header">
              <span>{currentQuestion.question}</span>
            </div>
            <div className="qsns">
              {currentQuestion.options.map((option, index) => (
                <span
                  key={index}
                  className={`all ${selectedOption === option ? (answerStatus === 'correct' ? 'greeny' : 'redy') : ''} ${correctAnswerIndex === index ? 'greeny' : ''}`}
                  onClick={() => handleChoice(option)}
                >
                  {option}
                </span>
              ))}
            </div>
            <button onClick={handleNextQuestion}>Next Qsn</button>
          </div>
        ) : (
          <h1>{`Total score is ${totalScore}/${questions.length}`}</h1>
        )}
      </div>
    </div>
  );
};

export default Questions;
