import "../App.css"
import Tile from "./Tile.js"

export default function Board(props) {
    let board = []
    for(let i = 0; i < 8; i++){
        for (let j = 0; j < 8; j++){
            let shade = "white";
            
            if ((i+j) % 2 === 0){
                shade = "black";
            }
            board.push(<Tile color={shade} onClick={props.onClick} src={props.board[index] ? props.board[index].image : null} />)
        }
    } 
    return(
        <div className="board">
            {board}
        </div>
    )
}