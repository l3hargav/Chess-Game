import Piece from "./Piece.js"

export default class Rook extends Piece {
    constructor(player){
        super(
            player,
            (player === 0 ? "images/rook_white.jpg" : "images/rook_black.jpg")
        );
    }

    //CHECKS IF GIVEN MOVE IS POSSIBLE
    isMovePossible(curr, dest) {
        return (
            Math.abs(curr - dest) % 8 === 0 || (dest >= (curr - (curr % 8)) && dest > (curr + (8 - curr % 8)))
        )
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
        if(Math.abs(curr - dest) === 0) {
            increment = 8;
            start += 8;
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