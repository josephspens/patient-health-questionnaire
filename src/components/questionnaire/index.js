import { connect } from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { push } from 'react-router-redux';
import Component from './component';

export const mapStateToProps = (state) => {
  const { questions, results, degreesOfDepression } = state;
  // add up all the result values to generate the score
  const score = Object.keys(results).reduce((memo, key) => memo + results[key].value, 0);
  // find the "moderate" degree, which in this case is the threshold for a therapist
  const degreeWhichRequiresTherapist = degreesOfDepression.find(({ text }) => text === 'Moderate');
  return {
    finished: questions.length === Object.keys(results).length, // if all questions are answered
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
