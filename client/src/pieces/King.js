import Piece from "./Piece.js"

export default class King extends Piece {
    constructor(player){
        super(
            player,
            (player === 0 ? "../../images/king_white.jpg" : "../../images/king_black.jpg")
        );
    }
    //CHECKS IF GIVEN MOVE IS POSSIBLE
    isMovePossible(curr, dest) {
        return (
            //Left and right
            curr - 1 === dest ||
            curr + 1 === dest ||
            //Top and bottom
            curr + 8 === dest ||
            curr - 8 === dest ||
            //Top left and bottom left
            curr + 7 === dest ||
            curr - 9 === dest ||
            //Top right and bottom right
            curr + 9 === dest ||
            curr - 7 === dest
            )
    }

    //GETS PATH THAT THE PIECE HAS TO TRAVEL
    getPath(curr, dest) {
        return [] //Empty because destination is adjacent tile
    }

    allMoves(curr) {
        return [curr - 1, curr + 1, curr + 8, curr - 8, curr + 7, curr - 9, curr + 9, curr - 7].filter(move => {
            return move >= 0;
        })
    }
}