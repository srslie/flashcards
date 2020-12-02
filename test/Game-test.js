const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Game', function() {
  let game

  beforeEach(function() {
    game = new Game()
    game.start()
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should start a game', function() {
    expect(game.start()).to.be.a('function');
  });

  it('should create cards', function() {
    expect(game.currentRound.deck.cards[0]).to.be.an.instanceof(Card)

  });

  it('should put cards in a deck', function() {
    expect(game.deck).to.be.an.instanceof(Deck);
  });

  it('should create a new round', function() {
    expect(game.currentRound).to.be.an.instanceof(Round);
  });

  it('should keep track of the current round', function() {
    expect(game.currentRound).to.be.an.instanceof(Round);
  });

});
