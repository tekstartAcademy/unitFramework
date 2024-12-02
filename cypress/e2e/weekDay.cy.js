/// <reference types="cypress" />

import { weekDay } from '../../src/weekDay';

describe('week day collection', () => {
  it('day of week test', () => {
    expect(weekDay(5)).to.equal('Thursday');
  });
});
