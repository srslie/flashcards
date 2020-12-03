const inquirer = require('inquirer');

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

const confirmUpdate = (id, round) => {
  const feedback = round.takeTurn(id);
  return {
    name: 'feedback',
    message: `Your answer of ${id} is ${feedback}`
  }
}

// const exitGamePrompt = () => {
//   return {
//     name: 'response',
//     message: 'Exit or Restart?',
//     choices: [
//       {key: 1, value: 'Exit'},
//       {key: 2, value: 'Restart'}
//     ]
//   }
// }
//
// const exitOrRestart = (response) => {
//   if (getResponse ===  1) {
//     control C?
//   } else {
//     let game = new Game
//     game.start()
//   }
// }

async function main(round) {

  const currentRound = await getRound(round);
  const getAnswer = await inquirer.prompt(genList(currentRound));
  const getConfirm = await inquirer.prompt(confirmUpdate(getAnswer.answers, round));
  // const getResponse = await inquirer.prompt(exitGamePrompt())

    if(!round.returnCurrentCard()) {
      round.endRound();
    } else {
      main(round);
    }
}

module.exports.main = main;
