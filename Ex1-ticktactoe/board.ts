export default class Board {
    board: string[][]
    constructor(colums: number, rows: number) {
        this.board = [];
        for (var index = 0; index < rows; index++) {
            let row = new Array(colums);
            for (var colIndex = 0; colIndex < row.length; colIndex++) {
                row[colIndex] = "?";
            };
            this.board.push(row);
        };
    }

        print() {
            for (var row = 0; row < this.board.length; row++) {
                var rowStr: string =" | ";
                for (var col = 0; col < this.board.length; col++) {
                    var column = this.board[col];
                    var val =column[row];
                   rowStr= rowStr.concat(val," | ");
                }
                console.log(rowStr);
            }
        };
    
    }
    