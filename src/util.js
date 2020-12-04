const inquirer = require('inquirer');
const Game = require('./Game');


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

function getGame(game) {
  return Promise.resolve(game);
}

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

async function exitOrRestart(response, game) {
  if (response ===  'Exit') {
    process.exit();
  } else {
    try {
      const currentGame = await getGame(game);
      currentGame.start()
    } catch(error) {
      console.error(error)
    }
  }
}

async function main(round, game) {
  const currentRound = await getRound(round);
  const getAnswer = await inquirer.prompt(genList(currentRound));
  const getConfirm = await inquirer.prompt(confirmUpdate(getAnswer.answers, round));
    if(!round.returnCurrentCard()) {
      round.endRound();
      const getResponse = await inquirer.prompt(exitGamePrompt())
      exitOrRestart(getResponse.response, game)
    } else {
      main(round, game);
    }
}

module.exports.main = main;
