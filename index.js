const readline = require('readline');
const TicTacToe = require('./TicTacToe');
const ScoreManager = require('./ScoreManager');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const game = new TicTacToe();
const scoreManager = new ScoreManager('scores.json');

function askForMove() {
  game.printBoard();
  rl.question(`Player ${game.currentPlayer}, enter your move (row,col): `, (input) => {
    const [row, col] = input.split(',').map(Number);
    if (!isNaN(row) && !isNaN(col) && row >= 0 && row <= 2 && col >= 0 && col <= 2) {
      game.playMove(row, col);
      if (!game.gameOver) {
        askForMove();
      } else {
        scoreManager.updateScores({ winner: game.currentPlayer, date: new Date() });
        rl.close();
      }
    } else {
      console.log('Invalid move. Please enter row and column as numbers between 0 and 2, separated by a comma.');
      askForMove();
    }
  });
}

askForMove();
