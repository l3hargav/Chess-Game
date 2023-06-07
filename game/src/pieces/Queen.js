import Piece from "./Piece.js"

export default class Queen extends Piece {
    constructor(player){
        super(
            player,
            (player === 0 ? "images/queen_white.jpg" : "images/queen_black.jpg")
        );
    }

    //CHECKS IF GIVEN MOVE IS POSSIBLE
    isMovePossible(curr, dest) {
        let rook, bishop;

        // FOR ROOK LIKE MOVE
        rook = Math.abs(curr - dest) % 8 === 0 || (dest >= (curr - (curr % 8)) && dest < (curr + (8 - curr % 8)));

        //FOR DIAGONALS
        bishop = Math.abs(curr - dest) % 9 === 0 || Math.abs(curr - dest) % 7 === 0

        return (rook || bishop)
    }

    //GETS PATH THAT THE PIECE HAS TO TRAVEL
    getPath(curr, dest) {
        let path = []
        let start, end, increment;
        if(curr > dest) {
            start = dest;
            end = curr;
        }
        else {
            start = curr;
            end = dest;
        }
        if(Math.abs(curr - dest) % 8 === 0) {
            increment = 8;
            start += 8;
        }
        else if(Math.abs(curr - dest) % 9 === 0) {
            increment = 9;
            start += 9;
        }
        else if(Math.abs(curr - dest) % 7 === 0) {
            increment = 7;
            start += 7;
        }
        else {
            increment = 1;
            start += 1;
        }
        for (let i = start; i < end; i+=increment) {
            path.push(i);
        }
        return path;
    }
}