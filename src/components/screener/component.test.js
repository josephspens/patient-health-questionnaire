import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';
import { RaisedButton } from 'material-ui';

import Screener from './component';

const root = document.createElement('div');
const props = {
  results: {},
  questions: [''],
  answers: ['foo','foo','foo','foo'],
  addAnswer: () => {}
};

it('renders without crashing', () => {
  shallow(<Screener {...props} />, root);
});

it('renders a Stepper', () => {
  const wrapper = shallow(<Screener {...props} />, root);
  expect(wrapper.find(Stepper)).to.have.length(1);
});

it('renders a Step for each question', () => {
  const wrapper = shallow(<Screener {...props} />, root);
  expect(wrapper.find(Step)).to.have.length(props.questions.length);
});

it('renders a button for each answer', () => {
  const wrapper = shallow(<Screener {...props} />, root);
  expect(wrapper.find(RaisedButton)).to.have.length(props.answers.length);
});
