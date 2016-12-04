import { connect } from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Component from './component';

export const mapStateToProps = (state) => {
  const { therapists } = state;
  return { therapists };
};

export const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(muiThemeable()(Component));
