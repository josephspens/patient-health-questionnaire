import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import questions from './questions';
import answers from './answers';

export default combineReducers({
  questions,
  answers,
  routing: routerReducer
});
