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
    // Alternative approach if I run into issues with the game ending...
    //consider using shift to sequentially remove cards from their array...
    // rather than incrementing through the indices - might be cleaner

    // Also, consider refactoring to remove the extra two properties for the...
    // ...guess arrays.
    const turn = new Turn(guess, this.deck[this.turnsCount]);
    this.turn = turn;
    this.turn.evaluateGuess();
    this.turn.giveFeedback();
    this.totalGuesses.push(this.deck[this.turnsCount].cardId);
      if (this.turn.correctGuess === false) {
        this.incorrectGuesses.push(this.deck[this.turnsCount].cardId);
      } else if (this.turn.correctGuess === true) {
        this.correctGuesses.push(this.deck[this.turnsCount].cardId);
        }
    this.turn.giveFeedback();
    this.turnsCount++;
  }

  calculatePercentCorrect() {
    this.percentCorrect = `${((this.correctGuesses.length / this.totalGuesses.length) * 100)}%`;
    return this.percentCorrect
  }

  endRound() {
    return (`** Round over! ** You answered ${this.percentCorrect} of the questions correctly!`)
  }
}

module.exports = Round;
