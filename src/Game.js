const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round');
const Deck = require('../src/Deck');


class Game {
  constructor() {
    this.currentRound = null;
  }

  start() {
    const deck = new Deck(prototypeQuestions)
    this.currentRound = new Round(deck)
    this.printMessage(deck, this.currentRound)
    this.printQuestion(this.currentRound)
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round, this);
  }
}

module.exports = Game;
