import { connect } from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Component from './component';

export const mapStateToProps = (state) => {
  const { results, degreesOfDepression } = state;
  // Same calculation as in questionnaire, could be a candidate for refactor
  const score = Object.keys(results).reduce((memo, key) => memo + results[key].value, 0);
  return { degreesOfDepression, score };
};

export const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(muiThemeable()(Component));
