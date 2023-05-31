import King from "../pieces/King.js"
import Queen from "../pieces/Queen.js"
import Bishop from "../pieces/Bishop.js"
import Knight from "../pieces/Knight.js"
import Rook from "../pieces/Rook.js"
import Pawn from "../pieces/Pawn.js"

/*
    For player: 
        player == 0 => "white"
        player == 1 => "black"
*/


export default function InitializeChessboard() {
    const board = Array(64).fill(null);

    //Set Pawns
    for(let i = 8; i < 16; i++){
        board[i] = new Pawn(0);
        board[i+40] = new Pawn(1);
    }
    //Set Rooks
    board[0] = new Rook(0);
    board[7] = new Rook(0);
    board[56] = new Rook(1);
    board[63] = new Rook(1);

    //Set Knights
    board[1] = new Knight(0);
    board[6] = new Knight(0);
    board[57] = new Knight(1);
    board[62] = new Knight(1);

    //Set Bishops
    board[2] = new Bishop(0);
    board[5] = new Bishop(0);
    board[58] = new Bishop(1);
    board[61] = new Bishop(1);

    //Set Queens
    board[3] = new Queen(0);
    board[59] = new Queen(1);

    //Set Kings
    board[4] = new King(0);
    board[60] = new King(1);
 
    return board;
}