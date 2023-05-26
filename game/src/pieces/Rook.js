import Piece from "/Piece.js"

export default class Rook extends Piece {
    constructor(player){
        super(
            player,
            (player == 0 ? "../../public/images/rook_white.png" : "../../public/images/rook_black.png")
        );
    }
}