import { PropTypes } from 'react';
import { therapist } from '../../store/propTypes';

export default {
  therapists: PropTypes.arrayOf(therapist).isRequired
}
