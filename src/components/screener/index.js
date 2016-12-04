import { connect } from 'react-redux';
import Component from './component';

import * as Actions from '../../actions/answers';

export const mapStateToProps = (state) => {
  const { questions, answers, results } = state;
  return { questions, answers, results };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    addAnswer: (question, answer, value) => dispatch(Actions.addAnswer(question, answer, value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
