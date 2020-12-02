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
    if (this.turns === this.deck.length) {
      return this.endRound()
    }

    const currentTurn = new Turn(guess, this.deck.cards[this.turns])
    if (!currentTurn.evaluateGuess()) {
      this.incorrectGuesses.push(guess)
    }

    this.turns++
    return currentTurn.giveFeedback()
  }

  calculatePercentCorrect() {
    const correctGuesses = this.turns - this.incorrectGuesses.length
    const percentCorrect = Math.ceil((correctGuesses / this.turns) * 100)
    return this.turns ? percentCorrect : 0
  }

  endRound() {
    console.log(`**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
  }
}

module.exports = Round;
