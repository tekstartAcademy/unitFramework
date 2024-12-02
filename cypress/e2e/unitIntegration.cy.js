/// <reference types="cypress" />

import { arithmeticCombination } from '../../src/unitIntegration.cy';

describe('unit integration', () => {
  it('test arithmetic combination function', () => {
    // adds two numbers 20
    // multiplies two numbers 40
    // subtracts the result of what was returned from multiplaction from what was returned from addition 40 - 20 = 20

    const result = arithmeticCombination(5, 4);
    // add = 9
    // multiply = 20
    // minus 20 - 9 = 11

    expect(result).to.equal(11);
  });
});
