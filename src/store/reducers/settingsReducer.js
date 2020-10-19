const initState = {
  isOpen: false,
  querySettings: {
    difficulty: 'hard',
    nOfQuestions: '10',
  },
};

const settingsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'TOGGLE_SETTINGS':
      return {
        ...state,
        isOpen: action.payload,
      };
    case 'SET_SETTINGS':
      return {
        ...state,
        querySettings: action.payload,
      };
    case 'RESET_SETTINGS':
      return {
        isOpen: false,
        querySettings: {
          difficulty: 'hard',
          nOfQuestions: '10',
        },
      };
    default:
      return state;
  }
};

export { settingsReducer };
