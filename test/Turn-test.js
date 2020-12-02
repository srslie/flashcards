const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn()

    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn()

    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should return a user guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);

    expect(turn.returnGuess()).to.equal('array');
  });

  it('should return a card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);

    expect(turn.card).to.equal(card);
  });

  it('should evaluate a guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turnOne = new Turn('array', card)
    const turnTwo = new Turn('object', card)

    expect(turnOne.evaluateGuess()).to.equal(false);
    expect(turnTwo.evaluateGuess()).to.equal(true);
  });

  it('should give feedback', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turnOne = new Turn('array', card)
    const turnTwo = new Turn('object', card)

    expect(turnOne.giveFeedback()).to.equal('incorrect!');
    expect(turnTwo.giveFeedback()).to.equal('correct!');
  });
});
