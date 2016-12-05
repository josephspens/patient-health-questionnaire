import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import { Avatar, FlatButton } from 'material-ui';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

import Therapist from './component';

const root = document.createElement('div');
const props = {
  therapist: {
    id: 0,
    name: '',
    bio: '',
    avatar: ''
  },
  requestTherapist: sinon.spy(),
  muiTheme: { palette: { primary1Color: '' } }
};

it('renders without crashing', () => {
  shallow(<Therapist {...props} />, root);
});

it('renders an Avatar with the therapist avatar URL', () => {
  const wrapper = shallow(<Therapist {...props} />, root);
  expect(wrapper.find(Avatar)).to.have.length(1);
  expect(wrapper.find(Avatar).at(0).prop('src')).to.have.equal(props.therapist.avatar);
});

it('renders a button to request a consult', () => {
  const wrapper = shallow(<Therapist {...props} />, root);
  expect(wrapper.find(FlatButton)).to.have.length(1);
});

it('requests a therapist when the button is clicked', () => {
  const wrapper = shallow(<Therapist {...props} />, root);
  wrapper.find(FlatButton).simulate('click');
  expect(props.requestTherapist).to.have.been.called;
})
