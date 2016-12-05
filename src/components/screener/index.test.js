import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

import { mapStateToProps, mapDispatchToProps } from './index';
import * as Actions from '../../actions/answers';

const state = {
  questions: [],
  answers: [],
  results: []
}
const dispatch = sinon.spy();

it('returns questions from the state', () => {
  expect(mapStateToProps(state)).to.have.property('questions');
  expect(mapStateToProps(state).questions).to.equal(state.questions);
});

it('returns answers from the state', () => {
  expect(mapStateToProps(state)).to.have.property('answers');
  expect(mapStateToProps(state).answers).to.equal(state.answers);
});

it('returns results from the state', () => {
  expect(mapStateToProps(state)).to.have.property('results');
  expect(mapStateToProps(state).results).to.equal(state.results);
});

it('returns a function which dispatches an addAnswer action', () => {
  expect(mapDispatchToProps(dispatch)).to.have.property('addAnswer');
  mapDispatchToProps(dispatch).addAnswer();
  expect(dispatch).to.have.been.called;
  expect(dispatch).to.have.been.calledWith(Actions.addAnswer());
});
