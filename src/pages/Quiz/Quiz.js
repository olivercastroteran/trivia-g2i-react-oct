import React from 'react';
import Spinner from '../../components/Spinner/Spinner';
import './Quiz.scss';
import { useSelector } from 'react-redux';

const Quiz = () => {
  const questions = useSelector((state) => state.quiz.questions);

  return (
    <div className="quiz">
      {questions.length === 0 ? <Spinner /> : <p>Quiz</p>}
    </div>
  );
};

export default Quiz;
