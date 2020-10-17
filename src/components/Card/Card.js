import React from 'react';
import './Card.scss';

const Card = () => {
  return (
    <div className="card">
      <h1 className="card__title">Welcome to the Trivia Challenge!</h1>
      <h2 className="card__intro">
        You will be presented with 10 True or False questions.
      </h2>
      <p className="card__challenge">Can you score 100%?</p>
      <button className="card__btn">BEGIN</button>
    </div>
  );
};

export default Card;
