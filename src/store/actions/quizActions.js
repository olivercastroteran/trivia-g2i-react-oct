export const getQuiz = (quiz) => {
  return {
    type: 'SET_QUIZ',
    payload: quiz,
  };
};

export const setAnswer = (answer) => {
  return {
    type: 'SET_ANSWERS',
    payload: answer,
  };
};

export const reset = () => {
  return {
    type: 'RESET_GAME',
  };
};
