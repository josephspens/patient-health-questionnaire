import { PropTypes } from 'react';

export const therapist = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
}).isRequired

export const degreeOfDepression = PropTypes.shape({
  text: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired
}).isRequired

export const result = PropTypes.shape({
  answer: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
}).isRequired
