class TicTacToe {
  constructor() {
    this.board = [['', '', ''], ['', '', ''], ['', '', '']];
    this.currentPlayer = 'X';
    this.gameOver = false;
  }
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