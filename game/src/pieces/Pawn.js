import Piece from "./Piece.js"

export default class Pawn extends Piece {
    constructor(player){
        super(
            player,
            (player == 0 ? "images/pawn_white.jpg" : "images/pawn_black.jpg")
        );
    }
}