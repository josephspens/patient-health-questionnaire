import { connect } from 'react-redux';
import Component from './component';

export const mapStateToProps = (state) => {
  const { questions, answers } = state;
  return { questions, answers };
};

export const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
