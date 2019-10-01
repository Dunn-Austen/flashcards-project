const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');

describe('Game', function() {

  it.skip('should be a function', function() {
    const game = new Game();
    expect(Game).to.be.a('function');
  });

});
