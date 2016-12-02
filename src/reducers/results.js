import * as Consts from '../constants/answers';

export const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case Consts.ADD_ANSWER:
      return {
        ...state,
        [action.question]: action.answer
      };
    default:
      return state;
  }
};
