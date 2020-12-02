const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.incorrectGuesses = [];
    this.turns = 0;
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns]
  }

  takeTurn(guess) {
    let currentTurn = new Turn(guess, this.deck.cards[this.turns])
    if (!currentTurn.evaluateGuess()) {
      this.incorrectGuesses.push(guess)
    }
    this.turns++
  }

  calculatePercentCorrect() {
    return this.incorrectGuesses ? (Math.ceil(this.incorrectGuesses.length / this.deck.length) * 100) : 0
  }

  endRound() {
    return `**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
}

module.exports = Round;
