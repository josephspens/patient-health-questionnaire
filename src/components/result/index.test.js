import chai, { expect } from 'chai';

import { mapStateToProps } from './index';

const state = {
  degreesOfDepression: [],
  results: {
    'foo': { value: 10 },
    'bar': { value: 20 },
    'baz': { value: 35 }
  }
};

it('returns degreesOfDepression from the state', () => {
  expect(mapStateToProps(state)).to.have.property('degreesOfDepression');
  expect(mapStateToProps(state).degreesOfDepression).to.equal(state.degreesOfDepression);
});

it('returns a calculated score from all of the results', () => {
  expect(mapStateToProps(state)).to.have.property('score');
  expect(mapStateToProps(state).score).to.equal(65);
});
