import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import questions from './questions';
import answers from './answers';
import results from './results';
import degreesOfDepression from './degreesOfDepression';

export default combineReducers({
  questions,
  answers,
  results,
  degreesOfDepression,
  routing: routerReducer
});
