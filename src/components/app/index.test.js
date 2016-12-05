import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

import { mapStateToProps, mapDispatchToProps } from './index';

const state = {};
const dispatch = sinon.spy();

it('returns no state props', () => {
  expect(mapStateToProps(state)).to.be.empty;
});

it('returns no dispatch props', () => {
  expect(mapDispatchToProps(dispatch)).to.be.empty;
});
