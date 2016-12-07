import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { push } from 'react-router-redux';

chai.use(sinonChai);

import { mapStateToProps, mapDispatchToProps } from './index';
import * as Actions from '../../actions/answers';

const state = {
  questions: ['','','',''],
  degreesOfDepression: [
    {
      text: 'None',
      min: 0,
      max: 4
    },
    {
      text: 'Mild',
      min: 5,
      max: 9
    },
    {
      text: 'Moderate',
      min: 10,
      max: 14
    },
    {
      text: 'Moderately Severe',
      min: 15,
      max: 19
    },
    {
      text: 'Severe',
      min: 20,
      max: 27
    }
  ],
  results: {
    'foo': { value: 2 },
    'bar': { value: 3 },
    'baz': { value: 2 }
  }
}
const dispatch = sinon.spy();

it('determines you are finished if you answered all the questions', () => {
  expect(mapStateToProps(state)).to.have.property('finished');
  expect(mapStateToProps(state).finished).to.be.false;
  const results = {
    'foo': { value: 4 },
    'bar': { value: 4 },
    'baz': { value: 4 },
    'biz': { value: 4 }
  }
  expect(mapStateToProps({ ...state, results }).finished).to.be.true;
});

it('determines you require a therapist if your score is above the moderate minimum', () => {
  expect(mapStateToProps(state)).to.have.property('requiresTherapist');
  expect(mapStateToProps(state).requiresTherapist).to.be.false;
  const results = {
    'foo': { value: 4 },
    'bar': { value: 4 },
    'baz': { value: 4 }
  }
  expect(mapStateToProps({ ...state, results }).requiresTherapist).to.be.true;
});

it('returns a function which navigates to "thank-you"', () => {
  expect(mapDispatchToProps(dispatch)).to.have.property('goToTherapists');
  mapDispatchToProps(dispatch).goToTherapists();
  expect(dispatch).to.have.been.called;
  expect(dispatch).to.have.been.calledWith(push('/recommendations'));
});

it('returns a function which navigates to "thank-you"', () => {
  expect(mapDispatchToProps(dispatch)).to.have.property('goToThankYou');
  mapDispatchToProps(dispatch).goToThankYou();
  expect(dispatch).to.have.been.called;
  expect(dispatch).to.have.been.calledWith(push('/thank-you'));
});
