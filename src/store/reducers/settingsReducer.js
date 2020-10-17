const initState = {
  isOpen: false,
  querySettings: {},
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
    default:
      return state;
  }
};

export { settingsReducer };
