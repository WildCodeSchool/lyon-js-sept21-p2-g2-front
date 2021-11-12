import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Questionaire from '../Questionaire';
import '../../css/Quizz.css';

const API_URL =
  'https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple';

function Quizz() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  console.log(questions);

  useEffect(() => {
    Axios.get(API_URL)
      .then((res) => res.data)
      .then((data) => {
        // eslint-disable-next-line no-shadow
        const questions = data.results.map((question) => ({
          ...question,
          answers: [
            question.correct_answer,
            ...question.incorrect_answers,
          ].sort(() => Math.random() - 0.5),
        }));
        setQuestions(questions);
      });
  }, []);

  const handleAnswer = (answer) => {
    if (!showAnswers) {
      if (answer === questions[currentIndex].correct_answer) {
        setScore(score + 1);
      }
    }

    setShowAnswers(true);
  };

  const handleNextQuestion = () => {
    setCurrentIndex(currentIndex + 1);
    setShowAnswers(false);
  };

  return questions.length > 0 ? (
    <div id="quizzContainer">
      <div className="container">
        {currentIndex >= questions.length ? (
          <div id="result">
            <h3 id="scoreTitle">Game Ended,</h3>{' '}
            <h4 id="scoreSub">Your Score is</h4>{' '}
            <h1 id="scoreNumber">{score}</h1>
          </div>
        ) : (
          <Questionaire
            handleAnswer={handleAnswer}
            showAnswers={showAnswers}
            handleNextQuestion={handleNextQuestion}
            data={questions[currentIndex]}
          />
        )}
      </div>
    </div>
  ) : (
    <div className="container">Loading...</div>
  );
}

export default Quizz;
