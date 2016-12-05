import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

import { mapStateToProps, mapDispatchToProps } from './index';
import * as Actions from '../../actions/answers';

const state = {
  questions: [],
  degreesOfDepression: [],
  results: {
    'foo': { value: 10 },
    'bar': { value: 20 },
    'baz': { value: 35 }
  }
}
const dispatch = sinon.spy();

xit('returns questions from the state', () => {
  expect(mapStateToProps(state)).to.have.property('questions');
  expect(mapStateToProps(state).questions).to.equal(state.questions);
});

xit('returns answers from the state', () => {
  expect(mapStateToProps(state)).to.have.property('answers');
  expect(mapStateToProps(state).answers).to.equal(state.answers);
});

xit('returns results from the state', () => {
  expect(mapStateToProps(state)).to.have.property('results');
  expect(mapStateToProps(state).results).to.equal(state.results);
});

xit('returns a function which dispatches an addAnswer action', () => {
  expect(mapDispatchToProps(dispatch)).to.have.property('addAnswer');
  mapDispatchToProps(dispatch).addAnswer();
  expect(dispatch).to.have.been.called;
  expect(dispatch).to.have.been.calledWith(Actions.addAnswer());
});
