import Piece from "./Piece.js"

export default class Rook extends Piece {
    constructor(player){
        super(
            player,
            (player == 0 ? "images/rook_white.jpg" : "images/rook_black.jpg")
        );
    }
}