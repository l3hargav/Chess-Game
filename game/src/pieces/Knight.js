import Piece from "./Piece.js"

export default class Knight extends Piece {
    constructor(player){
        super(
            player,
            (player == 0 ? "images/knight_white.jpg" : "images/knight_black.jpg")
        );
    }
}