import Piece from "/Piece.js"

export default class Knight extends Piece {
    constructor(player){
        super(
            player,
            (player == 0 ? "../../public/images/knight_white.png" : "../../public/images/knight_black.png")
        );
    }
}