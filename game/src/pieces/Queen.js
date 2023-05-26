import Piece from "/Piece.js"

export default class Queen extends Piece {
    constructor(player){
        super(
            player,
            (player == 0 ? "../../public/images/queen_white.png" : "../../public/images/queen_black.png")
        );
    }
}