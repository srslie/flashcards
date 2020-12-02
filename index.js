const http = require('http');
let app = http.createServer();

const data = require('./src/data');
const prototypeQuestions = data.prototypeData;
const util = require('./src/util');
const Game = require('./src/Game');
const Round = require('./src/Round');
const Deck = require('./src/Deck');
const Turn = require('./src/Turn');
const Card = require('./src/Card');

// Start the server on port 3000
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');

let game = new Game()
game.start()
