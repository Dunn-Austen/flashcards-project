const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');

describe('Round', function() {

  it.skip('should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

});
