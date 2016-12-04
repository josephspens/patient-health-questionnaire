import { connect } from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Component from './component';

export const mapStateToProps = (state) => {
  const { results, degreesOfDepression } = state;
  const score = Object.keys(results).reduce((memo, key) => memo + results[key].value, 0);
  return { results, degreesOfDepression, score };
};

export const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(muiThemeable()(Component));
