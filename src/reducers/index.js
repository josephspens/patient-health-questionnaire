import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import questions from './questions';
import answers from './answers';
import results from './results';

export default combineReducers({
  questions,
  answers,
  results,
  routing: routerReducer
});
