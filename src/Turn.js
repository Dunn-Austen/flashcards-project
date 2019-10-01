class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
    this.correctGuess = false;
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
    if (this.guess === this.card.correctAnswer) {
      return 'correct!'

    } else if (this.guess !== this.card.correctAnswer) {
      return 'incorrect!'
    }
  }
}

module.exports = Turn;
