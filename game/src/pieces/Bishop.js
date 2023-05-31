import Piece from "./Piece.js"

export default class Bishop extends Piece {
    constructor(player){
        super(
            player,
            (player == 0 ? "images/bishop_white.jpg" : "images/bishop_black.jpg")
        );
    }
}