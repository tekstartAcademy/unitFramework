/// <reference types="cypress" />

import { minus } from '../../src/minus';

describe('minus test group', () => {
  it('minus test one', () => {
    expect(minus(10, 3)).to.equal(7);
  });

  it('minus negative numbers', () => {
    expect(minus(-30, 50)).to.equal(-80);
  });
});
