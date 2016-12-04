import * as Consts from '../constants/answers';

export const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case Consts.ADD_ANSWER:
      const { question, answer, value } = action;
      return {
        ...state,
        [question]: { answer, value }
      };
    default:
      return state;
  }
};
