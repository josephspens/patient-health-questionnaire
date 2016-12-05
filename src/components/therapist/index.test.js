import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { push } from 'react-router-redux';

chai.use(sinonChai);

import { mapStateToProps, mapDispatchToProps } from './index';

const state = {
  therapists: [
    { id: 0 },
    { id: 1 },
    { id: 2 }
  ]
};
const dispatch = sinon.spy();

it('returns the therapist who matches the passed in therapist id', () => {
  expect(mapStateToProps(state, { id: 1 })).to.have.property('therapist');
  expect(mapStateToProps(state, { id: 1 }).therapist).to.equal(state.therapists[1]);
});

it('returns a function which navigates to the thank you page', () => {
  expect(mapDispatchToProps(dispatch)).to.have.property('requestTherapist');
  mapDispatchToProps(dispatch).requestTherapist();
  expect(dispatch).to.have.been.called;
  expect(dispatch).to.have.been.calledWith(push('/thank-you'));
});
