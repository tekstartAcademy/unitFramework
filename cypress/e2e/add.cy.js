/// <reference types="cypress" />

import add from '../../src/add.js';

describe('template spec', () => {
  it('add whole numbers', () => {
    const addNumbers = add(5, 5);
    expect(addNumbers).to.equal(10);
    expect(addNumbers).not.to.equal(15);
  });

  it('add numbers with decimals', () => {
    const decimals = add(5, 60.887776);
    expect(decimals).to.equal(65.887776);
  });
});
