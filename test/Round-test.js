const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Round', function() {
  let round, deck, turnOne, turn2, cardOne, cardTwo, cardThree

  beforeEach(function() {
    cardOne = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    cardTwo = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    cardThree = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    deck = new Deck([cardOne, cardTwo, cardThree])
    round = new Round(deck)
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should take turns', function() {
    expect(round.turns).to.equal(0);

    round.takeTurn('array')
    expect(round.turns).to.equal(1);

    round.takeTurn('sea otter')
    round.takeTurn('spleen')
    expect(round.turns).to.equal(3);
  });

  it('should return the current card', function() {
    expect(round.returnCurrentCard()).to.equal(cardOne);

    round.takeTurn('array')
    expect(round.returnCurrentCard()).to.equal(cardTwo);

    round.takeTurn('sea otter')
    expect(round.returnCurrentCard()).to.equal(cardThree);
  });

  it('should store incorrectGuesses', function() {
    expect(round.incorrectGuesses).to.deep.equal([]);

    round.takeTurn('array')
    expect(round.incorrectGuesses).to.deep.equal(['array']);

    round.takeTurn('sea otter')
    expect(round.incorrectGuesses).to.deep.equal(['array']);

    round.takeTurn('spleen')
    expect(round.incorrectGuesses).to.deep.equal(['array', 'spleen']);
  });

  it('should calculate percentage of correct guesses', function() {
    round.takeTurn('array')
    expect(round.calculatePercentCorrect).to.equal(0);

    round.takeTurn('sea otter')
    expect(round.calculatePercentCorrect).to.equal(50);

    round.takeTurn('gallbladder')
    expect(round.calculatePercentCorrect).to.equal(2/3);
  });

  it('should end a round', function() {
    expect(round.endRound()).to.equal('**Round over!** You answered 0% of the questions correctly!');

    round.takeTurn('object')
    round.takeTurn('sea otter')
    round.takeTurn('gallbladder')
    expect(round.endRound()).to.equal('**Round over!** You answered 100% of the questions correctly!');
  });

});
