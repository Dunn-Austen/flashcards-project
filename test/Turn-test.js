const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a guess', function() {
    const turn = new Turn('pug');
    expect(turn.guess).to.equal('pug');
  });

  it('should return the user\'s guess', function() {
    const turn = new Turn('pug');
    expect(turn.returnGuess()).to.equal('pug');
  });

  it('should instantiate our Card class', function() {
    const card = new Card();
    expect(card).to.be.an.instanceof(Card);
  });

  it('should store an instance of the card class', function() {
    const card = new Card();
    const turn = new Turn('pug', card);
    expect(turn.card).to.equal(card);
  });

  it('should return the stored card', function() {
    const card = new Card();
    const turn = new Turn('pug', card);
    expect(turn.returnCard()).to.equal(card);
  });

  it('should have a default correctGuess value of undefined', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('pug', card);
    expect(turn.correctGuess).to.equal(undefined);
  });

  it('should evaluate false if the guess is not correct', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('pug', card);

    turn.evaluateGuess();

    expect(turn.correctGuess).to.equal(false);
  });

  it('should evaluate true if the guess is correct', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    turn.evaluateGuess();

    expect(turn.correctGuess).to.equal(true);
  });

  it('should return \'correct!\' if the guess is correct', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    turn.evaluateGuess();

    expect(turn.correctGuess).to.equal(true);
    expect(turn.giveFeedback()).to.equal('correct!');
  });

  it('should return \'incorrect!\' if the guess is incorrect', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('pug', card);

    turn.evaluateGuess();

    expect(turn.correctGuess).to.equal(false);
    expect(turn.giveFeedback()).to.equal('incorrect!');
    // The way things are now, I have evalGuess and giveFeedback methods intertwined.
    // Would it be better to write more segregated code, for example, to test the outcome
    // of evalGuess with givefeedback rather than testing basically the same thing?
  });

});
