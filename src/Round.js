class Round {
  constructor(deck, turn) {
    this.deck = deck.cards;
    this.turnsCount = 0;
    this.turn = turn;
  }

  returnCurrentCard() {
    return this.deck[0];
  }

  takeTurn() {
    // I'm missing something here between card, deck, and turn perhaps.
    // Should I be accessing the cards within DECK? Rather than instantiating new Turns with the specific card instances?
    this.turnsCount++;
    this.turn.evaluateGuess();
    this.turn.giveFeedback();

    // takeTurn: method that updates turns count,
    // evaluates guesses, gives feedback, and stores ids of incorrect guesses
  }

  calculatePercentCorrect() {
// method that calculates and returns the percentage of correct guesses
  }

// Need to interpolate the percentage
  endRound() {
    console.log('** Round over! ** You answered <>% of the questions correctly!’')
  }
}

module.exports = Round;
