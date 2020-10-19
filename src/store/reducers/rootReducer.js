import { combineReducers } from 'redux';
import { settingsReducer } from './settingsReducer';
import { quizReducer } from './quizReducer';

const rootReducer = combineReducers({
  settings: settingsReducer,
  quiz: quizReducer,
});

export default rootReducer;
