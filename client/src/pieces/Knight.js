import Piece from "./Piece.js"

export default class Knight extends Piece {
    constructor(player){
        super(
            player,
            (player === 0 ? "../../images/knight_white.jpg" : "../../images/knight_black.jpg")
        );
    }

    //CHECKS IF GIVEN MOVE IS POSSIBLE
    isMovePossible(curr, dest) {
        return (
            curr - 10 === dest ||
            curr - 17 === dest ||
            curr + 6 === dest ||
            curr + 15 === dest ||
            curr + 10 === dest ||
            curr + 17 === dest ||
            curr - 6 === dest ||
            curr - 15 === dest 
        )
    }

    //GETS PATH THAT THE PIECE HAS TO TRAVEL
    getPath(curr, dest) {
        return [] //EMPTY SINCE THE KNIGHT JUMPS
    }
}