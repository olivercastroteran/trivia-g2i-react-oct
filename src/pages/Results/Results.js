import React from 'react';
import './Results.scss';
import { useSelector } from 'react-redux';
import { getCorrects } from './getCorrects';
import { Link } from 'react-router-dom';

const Results = () => {
  const answers = useSelector((state) => state.quiz.answers);

  return (
    <div className="results">
      <div className="results__card">
        <h2 className="results__score">
          <span>You scored</span>
          <span>
            {getCorrects(answers)} / {answers.length}
          </span>
        </h2>

        <div className="results__resume"></div>

        <Link to="/" className="card__btn">
          Play Again
        </Link>
      </div>
    </div>
  );
};

export default Results;
