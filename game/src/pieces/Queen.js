import Piece from "./Piece.js"

export default class Queen extends Piece {
    constructor(player){
        super(
            player,
            (player == 0 ? "images/queen_white.jpg" : "images/queen_black.jpg")
        );
    }
}