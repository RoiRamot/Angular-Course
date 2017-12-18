"use strict";
exports.__esModule = true;
var Board = /** @class */ (function () {
    function Board(colums, rows) {
        this.board = [];
        for (var index = 0; index < rows; index++) {
            var row = new Array(colums);
            for (var colIndex = 0; colIndex < row.length; colIndex++) {
                row[colIndex] = "?";
            }
            ;
            this.board.push(row);
        }
        ;
    }
    Board.prototype.print = function () {
        for (var row = 0; row < this.board.length; row++) {
            var rowStr = " | ";
            for (var col = 0; col < this.board.length; col++) {
                var column = this.board[col];
                var val = column[row];
                rowStr = rowStr.concat(val, " | ");
            }
            console.log(rowStr);
        }
    };
    ;
    return Board;
}());
exports["default"] = Board;
