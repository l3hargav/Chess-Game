import Piece from "/Piece.js"

export default class Bishop extends Piece {
    constructor(player){
        super(
            player,
            (player == 0 ? "../../public/images/bishop_white.png" : "../../public/images/bishop_black.png")
        );
    }
}