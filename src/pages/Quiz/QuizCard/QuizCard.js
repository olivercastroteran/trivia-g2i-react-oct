import React from 'react';
import './QuizCard.scss';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { decodeEntities } from './decodeHtmlEntities';
import Button from '../../../components/Button/Button';

const QuizCard = () => {
  const questions = useSelector((state) => state.quiz.questions);
  const history = useHistory();
  const params = useParams();
  const { difficulty, category, question } = questions[params.question];

  let diffColor;

  switch (difficulty) {
    case 'hard':
      diffColor = '#9e2a1d';
      break;
    case 'medium':
      diffColor = '#c29d0b';
      break;
    case 'easy':
      diffColor = '#17693a';
      break;
    default:
      diffColor = '#9e2a1d';
  }

  const style = {
    width: '100%',
    borderTopLeftRadius: '1rem',
    borderTopRightRadius: '1rem',
    padding: '1rem',
    color: '#fff',
    letterSpacing: '1px',
    backgroundColor: diffColor,
  };

  return (
    <div className="quiz-card">
      <div className="quiz-card__difficulty">
        {console.log(questions, history, params)}
        <h2 style={style}>{difficulty.toUpperCase()}</h2>
      </div>
      <div className="quiz-card__category">
        <h2>{category}</h2>
      </div>
      <div className="quiz-card__question">
        <h3>{decodeEntities(question)}</h3>
      </div>
      <div className="quiz-card__answer">
        <Button type="True" />
        <Button type="False" />
      </div>
      <div className="quiz-card__progress">
        <h3>
          {+params.question + 1}/{questions.length}
        </h3>
      </div>
    </div>
  );
};

export default QuizCard;
