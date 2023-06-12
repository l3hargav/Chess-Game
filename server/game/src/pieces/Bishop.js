import Piece from "./Piece.js"

export default class Bishop extends Piece {
    constructor(player){
        super(
            player,
            (player === 0 ? "images/bishop_white.jpg" : "images/bishop_black.jpg")
        );
    }

    //CHECKS IF GIVEN MOVE IS POSSIBLE
    isMovePossible(curr, dest) {
        return (
            Math.abs(curr - dest) % 9 === 0 || Math.abs(curr - dest) % 7 === 0
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
        if(Math.abs(curr - dest) % 9 === 0) {
            increment = 9;
            start += 9;
        }
        else {
            increment = 7;
            start += 7;
        }
        for (let i = start; i < end; i+=increment) {
            path.push(i);
        }
        return path;
    }
}