class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
    this.correctGuess;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    if (this.guess === this.card.correctAnswer) {
      this.correctGuess = true;

    } else if (this.guess !== this.card.correctAnswer) {
      this.correctGuess = false;
    }
  }

  giveFeedback() {
    if (this.guess === this.card.correctAnswer && this.correctGuess === true) {
      return 'correct!'

    } else if (this.guess !== this.card.correctAnswer && this.correctGuess === false) {
      return 'incorrect!'
    }
    // Alternative, perhaps cleaner code
    // if (this.evaluateGuess()) {return correct!}
  }
}

module.exports = Turn;
