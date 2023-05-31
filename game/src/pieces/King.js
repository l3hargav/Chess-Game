import Piece from "./Piece.js"

export default class King extends Piece {
    constructor(player){
        super(
            player,
            (player == 0 ? "images/king_white.jpg" : "images/king_black.jpg")
        );
    }
}