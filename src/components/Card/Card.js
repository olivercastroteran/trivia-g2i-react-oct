import React from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';
import { getQuestions } from '../../pages/Quiz/getQuestions';
import { useSelector, useDispatch } from 'react-redux';
import { getQuiz } from '../../store/actions/quizActions';

const Card = () => {
  const { difficulty, nOfQuestions } = useSelector(
    (state) => state.settings.querySettings
  );
  const dispatch = useDispatch();

  const startGame = async () => {
    try {
      const data = await getQuestions(difficulty, nOfQuestions);
      dispatch(getQuiz(data.results));
      //console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="card">
      <h1 className="card__title">Welcome to the Trivia Challenge!</h1>
      <h2 className="card__intro">
        You will be presented with 10 True or False questions.
      </h2>
      <p className="card__challenge">Can you score 100%?</p>
      <Link to="/quiz/0" className="card__btn" onClick={startGame}>
        BEGIN
      </Link>
    </div>
  );
};

export default Card;
