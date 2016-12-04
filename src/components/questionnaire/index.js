import { connect } from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Component from './component';

export const mapStateToProps = (state) => {
  const { questions, results } = state;
  const finished = questions.length === Object.keys(results).length;
  return { finished };
};

export const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(muiThemeable()(Component));
