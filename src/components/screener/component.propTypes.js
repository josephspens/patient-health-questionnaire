import { PropTypes } from 'react';
import { result } from '../../store/propTypes';

export default {
  questions: PropTypes.arrayOf(PropTypes.string).isRequired,
  answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  results: PropTypes.objectOf(result).isRequired,
  addAnswer: PropTypes.func.isRequired
};
