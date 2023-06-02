import Piece from "./Piece.js"

export default class Pawn extends Piece {
    constructor(player){
        super(
            player,
            (player === 0 ? "images/pawn_white.jpg" : "images/pawn_black.jpg")
        );
        this.initialPositions = {
            0: [48, 49, 50, 51, 52, 53, 54, 55],
            1: [8, 9, 10, 11, 12, 13, 14, 15]
        }
    }

    //CHECKS IF GIVEN MOVE IS POSSIBLE
    isMovePossible(curr, dest, occupied){
        if(this.player === 0) {
            if((dest === curr - 8 && !occupied) || (dest === curr - 16 && this.initialPositions[0].indexOf(curr) !== -1 && !occupied)) {
                return true;
            }
            else if (occupied && (dest === curr - 7 || dest === curr - 9)) {
                return true;
            }
        }
        else if (this.player === 1) {
            if((dest === curr + 8 && !occupied) || (dest === curr + 16 && this.initialPositions[1].indexOf(curr) !== -1 && !occupied)) {
                return true;
            }
            else if (occupied && (dest === curr + 7 || dest === curr + 9)) {
                return true;
            }
        }
        return false;
    }
    
    //GETS PATH THAT THE PIECE HAS TO TRAVEL
    getPath(curr, dest) {
        if(dest === curr + 16) {
            return [curr + 8];
        }
        else if (dest === curr - 16) {
            return [curr - 8]
        }
        return []
    }

}