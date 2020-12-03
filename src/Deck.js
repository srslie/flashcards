const Card = require('../src/Card');

class Deck {
  constructor(cards) {
    this.cards = cards.map(card => new Card(card['id'], card['question'], card['answers'], card['correctAnswer']))
  }

  countCards() {
    return this.cards.length
  }
}

module.exports = Deck;
