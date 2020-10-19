import React from 'react';
import './Results.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getCorrects } from './getCorrects';
import { Link } from 'react-router-dom';
import { ReactComponent as CorrectIcon } from '../../assets/icons/correct.svg';
import { ReactComponent as WrongIcon } from '../../assets/icons/wrong.svg';
import { decodeEntities } from '../Quiz/QuizCard/decodeHtmlEntities';
import { reset } from '../../store/actions/quizActions';
import { resetSettings } from '../../store/actions/settingsActions';

const Results = () => {
  const answers = useSelector((state) => state.quiz.answers);
  const dispath = useDispatch();

  const resetGame = () => {
    dispath(reset());
    dispath(resetSettings());
  };

  return (
    <div className="results">
      <div className="results__card">
        <h2 className="results__score">
          <span>You scored</span>
          <span>
            {getCorrects(answers)} / {answers.length}
          </span>
        </h2>

        <div className="results__resume">
          <ul>
            {answers.map((answer) => (
              <li key={Math.random()}>
                <span>
                  {answer.isCorrect === true ? <CorrectIcon /> : <WrongIcon />}
                </span>
                <span>{decodeEntities(answer.question)}</span>
              </li>
            ))}
          </ul>
        </div>

        <Link to="/" className="card__btn" onClick={resetGame}>
          Play Again
        </Link>
      </div>
    </div>
  );
};

export default Results;
