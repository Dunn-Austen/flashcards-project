const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turnsCount = 0;
    this.turn;
    this.incorrectGuesses = [];
    this.correctGuesses = [];
    this.totalGuesses = [];
    this.percentCorrect;
  }

  returnCurrentCard() {
    return this.deck[this.turnsCount];
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.deck[this.turnsCount]);
    this.turn = turn;
    this.totalGuesses.push(this.deck[this.turnsCount].cardId);
    if (!this.turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.deck[this.turnsCount].cardId);

    } else if (this.turn.evaluateGuess()) {
      this.correctGuesses.push(this.deck[this.turnsCount].cardId);
    }
    this.turnsCount++;
    return this.turn.giveFeedback()
  }

  calculatePercentCorrect() {
    this.percentCorrect = ((this.correctGuesses.length / this.totalGuesses.length) * 100);
    return this.percentCorrect
  }

  endRound() {
    return (`** Round over! ** You answered ${this.percentCorrect}% of the questions correctly!`)
  }
}

module.exports = Round;
