import { PropTypes } from 'react';
import { degreeOfDepression } from '../../store/propTypes';

export default {
  muiTheme: PropTypes.object.isRequired,
  score: PropTypes.number.isRequired,
  degreesOfDepression: PropTypes.arrayOf(degreeOfDepression).isRequired
}
