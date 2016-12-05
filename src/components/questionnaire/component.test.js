import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { FlatButton } from 'material-ui';

import Questionnaire from './component';
import Screener from '../screener';
import Result from '../result';

const root = document.createElement('div');
const props = {
  finished: false,
  requiresTherapist: false,
  goToTherapists: sinon.spy(),
  goToThankYou: sinon.spy()
};

it('renders without crashing', () => {
  shallow(<Questionnaire {...props} />, root);
});

it('renders a Screener', () => {
  const wrapper = shallow(<Questionnaire {...props} />, root);
  expect(wrapper.find(Screener)).to.have.length(1);
});

it('renders a Result', () => {
  const wrapper = shallow(<Questionnaire {...props} />, root);
  expect(wrapper.find(Result)).to.have.length(1);
});

it('does not render a finish button by default', () => {
  const wrapper = shallow(<Questionnaire {...props} />, root);
  expect(wrapper.find(FlatButton)).to.have.length(0);
});

it('render a finish button if the questionnaire is finished', () => {
  const wrapper = shallow(<Questionnaire {...props} finished={true} />, root);
  expect(wrapper.find(FlatButton)).to.have.length(1);
});
