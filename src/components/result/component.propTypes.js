import { PropTypes } from 'react';
import { degreeOfDepression, result } from '../../store/propTypes';

export default {
  muiTheme: PropTypes.object.isRequired,
  results: PropTypes.objectOf(result).isRequired,
  score: PropTypes.number.isRequired,
  degreesOfDepression: PropTypes.arrayOf(degreeOfDepression).isRequired
}
