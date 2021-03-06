import { connect } from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { push } from 'react-router-redux';
import Component from './component';

export const mapStateToProps = (state, ownProps) => {
  // find the therapist from the redux store given the passed in `id` prop
  const therapist = state.therapists.find(therapist => therapist.id === ownProps.id);
  return { therapist };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    requestTherapist: () => dispatch(push('/thank-you'))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(muiThemeable()(Component));
