import Piece from "/Piece.js"

export default class King extends Piece {
    constructor(player){
        super(
            player,
            (player == 0 ? "../../public/images/king_white.png" : "../../public/images/king_black.png")
        );
    }
}