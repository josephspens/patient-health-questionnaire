import React from 'react';
import ReactDOM from 'react-dom';
import Therapist from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Therapist />, div);
});
