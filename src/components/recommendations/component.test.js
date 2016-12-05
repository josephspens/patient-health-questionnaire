import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';

import Recommendations from './component';
import Therapist from '../therapist';

const root = document.createElement('div');
const props = {
  therapists: [
    { id: 1 }
  ]
};

it('renders without crashing', () => {
  shallow(<Recommendations {...props} />, root);
});

it('renders Therapists', () => {
  const wrapper = shallow(<Recommendations {...props} />, root);
  expect(wrapper.find(Therapist)).to.have.length(props.therapists.length);
});
