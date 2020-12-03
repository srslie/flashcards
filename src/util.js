const inquirer = require('inquirer');
const Game = require('../src/Game');


const genList = (round) => {
  let card = round.returnCurrentCard();

  let choices = card.answers.map((answer, index) => {
    return {
      key: index,
      value: answer
    }
  });
  return {
    type: 'rawlist',
    message: card.question,
    name: 'answers',
    choices: choices
  };
}

const getRound = (round) => {
  return Promise.resolve(round);
}

const confirmUpdate = (guess, round) => {
  const feedback = round.takeTurn(guess);
  return {
    name: 'feedback',
    message: `Your answer of ${guess} is ${feedback}`
  }
}

//Working on trying to get the game to prompt for a exit or restart after the Round ends
const exitGamePrompt = () => {
  return {
    type: 'rawlist',
    name: 'response',
    message: 'Exit or Restart?',
    choices: [
      {key: 1, value: 'Exit'},
      {key: 2, value: 'Restart'}
    ]
  }
}

const exitOrRestart = (response) => {
  if (response ===  'Exit') {
    process.exit();
  } else {
    let game = new Game()
    game.start()
  }
}

async function main(round) {

  const currentRound = await getRound(round);
  const getAnswer = await inquirer.prompt(genList(currentRound));
  const getConfirm = await inquirer.prompt(confirmUpdate(getAnswer.answers, round));

    if(!round.returnCurrentCard()) {
      round.endRound();
      const getResponse = await inquirer.prompt(exitGamePrompt())
      exitOrRestart(getResponse.response)
    } else {
      main(round);
    }
}

module.exports.main = main;
