import * as Consts from '../constants/answers';

export const addAnswer = (question, answer) => ({ type: Consts.ADD_ANSWER, question, answer });
