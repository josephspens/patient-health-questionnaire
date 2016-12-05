import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

import { mapStateToProps, mapDispatchToProps } from './index';

const state = {
  therapists: []
};
const dispatch = sinon.spy();

it('returns therapists from the state', () => {
  expect(mapStateToProps(state)).to.have.property('therapists');
  expect(mapStateToProps(state).therapists).to.equal(state.therapists);
});

it('returns no dispatch props', () => {
  expect(mapDispatchToProps(dispatch)).to.be.empty;
});
