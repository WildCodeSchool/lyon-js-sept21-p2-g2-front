/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-nested-ternary */
import React from 'react';

function Questionaire({
  handleAnswer,
  showAnswers,
  handleNextQuestion,
  data: { question, correct_answer, answers },
}) {
  return (
    <>
      <div className="questionClass">
        <h5 dangerouslySetInnerHTML={{ __html: question }} />
      </div>
      <div className="button-overall">
        {answers.map((answer) => {
          const specialClassName = showAnswers
            ? answer === correct_answer
              ? 'green-button'
              : 'red-button'
            : '';
          return (
            <button
              type="button"
              className={`normal-button ${specialClassName}`}
              onClick={() => handleAnswer(answer)}
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          );
        })}
      </div>
      {showAnswers && (
        <button
          type="button"
          onClick={handleNextQuestion}
          className="next-question"
        >
          Next Question
        </button>
      )}
    </>
  );
}

export default Questionaire;
