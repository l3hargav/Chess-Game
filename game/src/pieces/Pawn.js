import Piece from "/Piece.js"

export default class Pawn extends Piece {
    constructor(player){
        super(
            player,
            (player == 0 ? "../../public/images/pawn_white.png" : "../../public/images/pawn_black.png")
        );
    }
}