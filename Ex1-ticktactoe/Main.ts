import  Game from './game'
import  Player from './player'
const game:Game = new Game(3, 3); // rows count, cols count​
​
game.addPlayer(new Player('John Doe', 'x'));​
game.addPlayer(new Player('Jason Bourne', 'o'));​
​
game.board.print(); // simple console.log is fine (prints empty board)​
​
console.log(game.status) // game status - InProgress/Completed (enum)​
game.printSummary(); // InProgress - "Game is in progress" + moves history (console.log is fine)​
​
// nextMove - sets the next player's move. The next player is determined by the order they were added​
// Returns a boolean - false if the game is over or the cell is already occupied, otherwise true​
​
game.nextMove(0, 0); // row, col - sets 'x' in the top left cell​
game.nextMove(0, 0); // does nothing and returns false (cell is already occupied)​
game.nextMove(1, 1); // sets 'y' in the center​
game.nextMove(0, 2); // sets 'x' in the top right cell​
game.nextMove(2, 2); // sets 'y' in the bottom right cell​
game.nextMove(0, 1); // sets 'x' in the top center cell​
game.nextMove(2, 1); // does nothing and returns false (Game over, John won)​
​
game.board.print(); // simple console.log is fine​
​
game.printSummary(); // Completed - "John Doe won!" + moves history