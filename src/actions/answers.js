import * as Consts from '../constants/answers';

export const addAnswer = (question, answer, value) => ({ type: Consts.ADD_ANSWER, question, answer, value });
