const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {
  let cardOne, cardTwo, cardThree, deck

  beforeEach(function() {
    cardOne = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    cardTwo = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    cardThree = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    deck = new Deck([cardOne, cardTwo, cardThree])
  });

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should contain cards', function() {
    expect(deck.cards).to.deep.equal([cardOne, cardTwo, cardThree]);
  });

  it('should count cards within deck', function() {
    expect(deck.countCards()).to.equal(3);
  });
});
