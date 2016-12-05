import { PropTypes } from 'react';

export default {
  therapists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
    })
  ).isRequired
}
