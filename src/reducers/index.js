import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import questions from './questions';

export default combineReducers({
  questions,
  routing: routerReducer
});
