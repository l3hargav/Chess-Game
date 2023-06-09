import "../App.css"
import Tile from "./Tile.js"

export default function Board(props) {
    let board = []
    let index = 0;
    let i = 0;
    for(let i = 0; i < 8; i++){
        for (let j = 0; j < 8; j++){
            let shade = "white";
            
            if ((i+j) % 2 === 0){
                shade = "black";
            }
            board.push(<Tile color={shade} index={index} onClick={() => props.onClick((i*8)+j)} src={props.board[index] ? props.board[index].image : null} />)
            index += 1
        }
    } 
    return(
        <div className="board">
            {board}
        </div>
    )
}