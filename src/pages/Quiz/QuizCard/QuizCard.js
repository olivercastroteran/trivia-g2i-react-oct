import React from 'react';
import './QuizCard.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { decodeEntities } from './decodeHtmlEntities';
import Button from '../../../components/Button/Button';
import { setAnswer } from '../../../store/actions/quizActions';

const QuizCard = () => {
  const questions = useSelector((state) => state.quiz.questions);
  const history = useHistory();
  const params = useParams();
  const dispatch = useDispatch();
  const { difficulty, category, question, correct_answer } = questions[
    params.question
  ];

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

  const addAnswer = (ans) => {
    const answer = {
      isCorrect: ans.type === correct_answer ? true : false,
      question: ans.question,
    };

    dispatch(setAnswer(answer));
  };

  const handleClick = (ans) => {
    if (+params.question === questions.length - 1) {
      addAnswer(ans);

      history.replace('/results');
      return;
    }

    addAnswer(ans);

    history.replace(`/quiz/${parseInt(params.question) + 1}`);
  };

  return (
    <div className="quiz-card">
      <div className="quiz-card__difficulty">
        <h2 style={style}>{difficulty.toUpperCase()}</h2>
      </div>
      <div className="quiz-card__category">
        <h2>{category}</h2>
      </div>
      <div className="quiz-card__question">
        <h3>{decodeEntities(question)}</h3>
      </div>
      <div className="quiz-card__answer">
        <Button click={handleClick} type="True" question={question} />
        <Button click={handleClick} type="False" question={question} />
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
