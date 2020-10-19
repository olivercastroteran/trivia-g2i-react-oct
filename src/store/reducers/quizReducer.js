const initState = {
  questions: [],
  answers: [],
};

const quizReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_QUIZ':
      return {
        ...state,
        questions: action.payload,
      };
    case 'SET_ANSWERS':
      let newAnswers = [...state.answers, action.payload];
      return {
        ...state,
        answers: newAnswers,
      };
    default:
      return state;
  }
};

export { quizReducer };
