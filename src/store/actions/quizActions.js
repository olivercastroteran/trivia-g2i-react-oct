export const getQuiz = (quiz) => {
  return {
    type: 'SET_QUIZ',
    payload: quiz,
  };
};

export const setAnswers = (answer) => {
  return {
    type: 'SET_ANSWERS',
    payload: answer,
  };
};
