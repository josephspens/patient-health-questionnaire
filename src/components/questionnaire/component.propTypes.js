import { PropTypes } from 'react';

export default {
  finished: PropTypes.bool.isRequired,
  requiresTherapist: PropTypes.bool.isRequired,
  goToTherapists: PropTypes.func.isRequired,
  goToThankYou: PropTypes.func.isRequired
};
