const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Round', function() {

  it('should be a function', function() {
    const deck = new Deck();
    const round = new Round(deck);
    expect(Round).to.be.a('function');
  });

  it('should be an instance of the Round class', function() {
    const deck = new Deck();
    const round = new Round(deck);
    expect(round).to.be.an.instanceof(Round);
  });

  it('should store a deck', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.deck).to.deep.equal([card1, card2, card3]);
    expect(round.deck.length).to.equal(3);
  });

  it('should return the current card being played', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('should update turns count', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn();

    expect(round.turnsCount).to.equal(1);

    round.takeTurn();
    round.takeTurn();

    expect(round.turnsCount).to.equal(3);
  });

  it('should evaluate guesses', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const turn1 = new Turn('pug', card1);
    const turn2 = new Turn('gallbaldder', card2);
    const turn3 = new Turn('playing with bubble wrap', card2);
    const round = new Round(deck, turn);


    expect(round.turn()).to.equal(card1);
  });

});

  //
  //
  // it('should be a function', function() {
  //   const deck = new Deck();
  //   expect(Deck).to.be.a('function');
  // });
  //
  // it('should be an instance of Deck', function() {
  //   const deck = new Deck();
  //   expect(deck).to.be.an.instanceof(Deck);
  // });
  //
  // it('should store cards', function() {
  //   const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  //   const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  //   const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
  //   const deck = new Deck([card1, card2, card3]);
  //   expect(deck.cards).to.deep.equal([card1, card2, card3]);
  // });
  //
  // it('should count its cards', function() {
  //   const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  //   const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  //   const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
  //   const deck = new Deck([card1, card2, card3]);
  //   expect(deck.countCards()).to.equal(3);
  // });
