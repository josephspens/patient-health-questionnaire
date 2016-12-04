import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import questions from './questions';
import answers from './answers';
import results from './results';
import degreesOfDepression from './degreesOfDepression';
import therapists from './therapists';

export default combineReducers({
  questions,
  answers,
  results,
  degreesOfDepression,
  therapists,
  routing: routerReducer
});
