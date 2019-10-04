const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound = 0;
    this.round;
    this.deck;
    this.round;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }

  start() {
    const cardsFromData = [];
    this.currentRound++;

    prototypeQuestions.forEach(function(theCard) {
      const card = new Card(theCard.id, theCard.question, theCard.answers, theCard.correctAnswer);
      cardsFromData.push(card)
    });

    const deck = new Deck(cardsFromData);
    this.deck = deck;
    const round = new Round(this.deck);
    this.round = round;
    this.printMessage(this.deck, this.round);
    this.printQuestion(this.round);
    this.round.endRound()
  }
}

module.exports = Game;
