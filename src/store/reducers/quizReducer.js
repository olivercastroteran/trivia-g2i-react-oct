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
      return {
        ...state,
        answers: action.payload,
      };
    default:
      return state;
  }
};

export { quizReducer };
