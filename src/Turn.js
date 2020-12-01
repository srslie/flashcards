class Turn {
  constructor(guess, card) {
    this.guess = userGuess;
    this.card = card
  }

  returnGuess() {
    return this.guess
  }

  returnCard() {
    return this.card
  }

  evaluateGuess() {
    this.guess === this.card.correctAnswer
  }

  giveFeedback() {
    if (this.evaluateGuess()) {
      return 'correct!'
    } else {
      return 'incorrect!'
    }
  }

}

module.exports = Turn;
