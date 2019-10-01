class Card {
  constructor(cardId, question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }
}

module.exports = Card;
