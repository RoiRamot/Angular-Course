import Player from './player';
import Board from './board';
enum GameStatus {
    Complete,
    InProgress
}
export default class Game {
    private PlayersArry: Player[];
    public board: Board;
    public status: GameStatus;
    private gameMoves: string[];
    private selectedPlayerIndex: number
    constructor(colums: number, rows: number) {
        this.board = new Board(colums, rows);
        this.selectedPlayerIndex = 0;
        this.PlayersArry=[];
        this.gameMoves=[];
        this.status=GameStatus.InProgress;
    };
    get playerSign(): string { return this.PlayersArry[this.selectedPlayerIndex].sign };

    addPlayer(player:Player) {
        if (this.PlayersArry.length >= 2) {
            console.log("you can add maximum 2 players");
            return;
        }
        this.PlayersArry.push(player)
    };


    printSummary() {
        if (this.status === GameStatus.Complete) {
            console.log("Game Completed "+this.PlayersArry[this.selectedPlayerIndex].name+" won!");
        }
        else{
        console.log("Game is in progress");
        }
        console.log("The game move so far:");
        this.gameMoves.map(function (move) { console.log(move); });
    }
    nextMove(x: number, y: number): boolean {
        if (this.board.board[x][y] !== "?") {
            return false;
        }
        this.board.board[x][y] = this.playerSign;
        if (this.checkRows(y) && this.checkColumns(x)) {
             this.gameMoves.push("player: "+this.playerSign+" Move: x:" + x+" y: " +y);
             this.ChangePlayer();
             return true;
        }
        return false;
    }
    private checkRows(columnNumber: number): boolean {
        for (var index = 0; index < this.board.board[0].length; index++) {
            if (this.board.board[index][columnNumber] !== this.playerSign) {
                return true;
            }
        }
        this.status=GameStatus.Complete;
    }
    private checkColumns(rowNumber: number): boolean {
        for (var index = 0; index < this.board.board[0].length; index++) {
            if (this.board.board[rowNumber][index] !== this.playerSign) {
                return true;
            }
        }
        this.status=GameStatus.Complete;
        }
    private ChangePlayer() {
        this.selectedPlayerIndex++
        if (this.selectedPlayerIndex===this.PlayersArry.length) {
            this.selectedPlayerIndex=0;
        }

    }
}