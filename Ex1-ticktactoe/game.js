"use strict";
exports.__esModule = true;
var board_1 = require("./board");
var GameStatus;
(function (GameStatus) {
    GameStatus[GameStatus["Complete"] = 0] = "Complete";
    GameStatus[GameStatus["InProgress"] = 1] = "InProgress";
})(GameStatus || (GameStatus = {}));
var Game = /** @class */ (function () {
    function Game(colums, rows) {
        this.board = new board_1["default"](colums, rows);
        this.selectedPlayerIndex = 0;
        this.PlayersArry = [];
        this.gameMoves = [];
        this.status = GameStatus.InProgress;
    }
    ;
    Object.defineProperty(Game.prototype, "playerSign", {
        get: function () { return this.PlayersArry[this.selectedPlayerIndex].sign; },
        enumerable: true,
        configurable: true
    });
    ;
    Game.prototype.addPlayer = function (player) {
        if (this.PlayersArry.length >= 2) {
            console.log("you can add maximum 2 players");
            return;
        }
        this.PlayersArry.push(player);
    };
    ;
    Game.prototype.printSummary = function () {
        if (this.status === GameStatus.Complete) {
            console.log("Game Completed " + this.PlayersArry[this.selectedPlayerIndex].name + " won!");
        }
        else {
            console.log("Game is in progress");
        }
        console.log("The game move so far:");
        this.gameMoves.map(function (move) { console.log(move); });
    };
    Game.prototype.nextMove = function (x, y) {
        if (this.board.board[x][y] !== "?") {
            return false;
        }
        this.board.board[x][y] = this.playerSign;
        if (this.checkRows(y) && this.checkColumns(x)) {
            this.gameMoves.push("player: " + this.playerSign + " Move: x:" + x + " y: " + y);
            this.ChangePlayer();
            return true;
        }
        return false;
    };
    Game.prototype.checkRows = function (columnNumber) {
        for (var index = 0; index < this.board.board[0].length; index++) {
            if (this.board.board[index][columnNumber] !== this.playerSign) {
                return true;
            }
        }
        this.status = GameStatus.Complete;
    };
    Game.prototype.checkColumns = function (rowNumber) {
        for (var index = 0; index < this.board.board[0].length; index++) {
            if (this.board.board[rowNumber][index] !== this.playerSign) {
                return true;
            }
        }
        this.status = GameStatus.Complete;
    };
    Game.prototype.ChangePlayer = function () {
        this.selectedPlayerIndex++;
        if (this.selectedPlayerIndex === this.PlayersArry.length) {
            this.selectedPlayerIndex = 0;
        }
    };
    return Game;
}());
exports["default"] = Game;
