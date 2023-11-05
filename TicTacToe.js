
class TicTacToe {
  constructor() {
    this.board = [['', '', ''], ['', '', ''], ['', '', '']];
    this.currentPlayer = 'X';
    this.gameOver = false;
  }

  playMove(row, col) {
    if (this.board[row][col] === '' && !this.gameOver) {
      this.board[row][col] = this.currentPlayer;
      if (this.checkForWinner(row, col)) {
        this.gameOver = true;
        console.log(`Player ${this.currentPlayer} wins!`);
      } else if (this.isBoardFull()) {
        this.gameOver = true;
        console.log("It's a tie!");
      } else {
        this.switchPlayer();
      }
    } else {
      console.log('That position is already taken or the game is over. Please try again.');
    }
  } 
switchPlayer() {
  this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
}

checkForWinner(row, col) {
  // Horizontal, vertical, and diagonal check
  const horizontalWin = this.board[row].every(cell => cell === this.currentPlayer);
  const verticalWin = this.board.every(row => row[col] === this.currentPlayer);
  const diagonalWin = (row === col && this.board.every((row, idx) => row[idx] === this.currentPlayer)) ||
    (row + col === 2 && this.board.every((row, idx) => row[2 - idx] === this.currentPlayer));

  return horizontalWin || verticalWin || diagonalWin;
}

isBoardFull() {
  return this.board.every(row => row.every(cell => cell !== ''));
}

printBoard() {
  console.log('  0 1 2');
  this.board.forEach((row, index) => {
    console.log(`${index} ${row.map(cell => cell || ' ').join('|')}`);
    if (index < this.board.length - 1) {
      console.log('  -----');
    }
  });
}
}

module.exports = TicTacToe;
