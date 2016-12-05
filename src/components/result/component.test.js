import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';

import Result from './component';
import Therapist from '../therapist';

const root = document.createElement('div');
const props = {
  muiTheme: {
    palette: {
      primary1Color: '',
      alternateTextColor: '',
      disabledColor: ''
    }
  },
  score: 0,
  degreesOfDepression: [
    {
      text: '',
      min: 0,
      max: 0
    }
  ]
};

it('renders without crashing', () => {
  shallow(<Result {...props} />, root);
});

it('renders a Stepper', () => {
  const wrapper = shallow(<Result {...props} />, root);
  expect(wrapper.find(Stepper)).to.have.length(1);
});

it('renders a Step for each degreeOfDepression', () => {
  const wrapper = shallow(<Result {...props} />, root);
  expect(wrapper.find(Step)).to.have.length(props.degreesOfDepression.length);
})
