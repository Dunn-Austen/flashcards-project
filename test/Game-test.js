const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Game', function() {

  it('should be a function', function() {
    const game = new Game();
    expect(Game).to.be.a('function');
  });

  it('should have a default value for currentRound', function() {
    const game = new Game();
    expect(game.currentRound).to.equal(0);
  });

  it('should increment the current round', function() {
    const game = new Game();

    game.start();

    expect(game.currentRound).to.equal(1);
  });

  it('should instantiate a new Deck class', function() {
    const game = new Game();

    game.start();

    expect(game.round.deck.length).to.deep.equal(30);
    expect(game.deck.cards[0]).to.deep.equal({
      "cardId": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    });

  });

  it('should instantiate a new Round class', function() {
    const game = new Game();

    game.start();

    expect(game.round.deck[0]).to.deep.equal({
      "cardId": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    });
  });
});
