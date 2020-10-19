import React from 'react';
import Spinner from '../../components/Spinner/Spinner';
import './Quiz.scss';
import { useSelector } from 'react-redux';
import QuizCard from './QuizCard/QuizCard';

const Quiz = () => {
  const questions = useSelector((state) => state.quiz.questions);

  return (
    <div className="quiz">
      {questions.length === 0 ? <Spinner /> : <QuizCard />}
    </div>
  );
};

export default Quiz;
