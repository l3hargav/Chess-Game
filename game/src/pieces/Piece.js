export default class Piece {
    constructor(player, imgUrl) {
        this.player = player;
        this.image = {background: "url('"+imgUrl+"')"};
    }
}