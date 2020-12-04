const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
  let turn, card, turnOne, turnTwo

  beforeEach(function() {
    turn = new Turn()
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turnOne = new Turn('array', card)
    turnTwo = new Turn('object', card)
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should return a user guess', function() {
    expect(turnOne.returnGuess()).to.equal('array');
  });

  it('should return a card', function() {
    expect(turnOne.card).to.equal(card);
  });

  it('should evaluate a guess', function() {
    expect(turnOne.evaluateGuess()).to.equal(false);
    expect(turnTwo.evaluateGuess()).to.equal(true);
  });

  it('should give feedback', function() {
    expect(turnOne.giveFeedback()).to.equal('incorrect!');
    expect(turnTwo.giveFeedback()).to.equal('correct!');
  });
});
