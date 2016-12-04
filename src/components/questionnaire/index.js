import { connect } from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { push } from 'react-router-redux';
import Component from './component';

export const mapStateToProps = (state) => {
  const { questions, results, degreesOfDepression } = state;
  const score = Object.keys(results).reduce((memo, key) => memo + results[key].value, 0);
  const degreeWhichRequiresTherapist = degreesOfDepression.find(({ text }) => text === 'Moderate');
  return {
    finished: questions.length === Object.keys(results).length,
    requiresTherapist: score >= degreeWhichRequiresTherapist.min
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    goToTherapists: () => dispatch(push('/recommendations')),
    goToThankYou: () => dispatch(push('/thank-you'))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(muiThemeable()(Component));
