import { connect } from 'react-redux';
import Component from './component';

export const mapStateToProps = (state) => {
  const { questions } = state;
  return { questions };
};

export const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
