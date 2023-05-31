import "../App.css"
import Tile from "./Tile.js"

export default function Board(props) {
    const board = []
    let index = 0;
    for(let i = 0; i < 8; i++){
        for (let j = 0; j < 8; j++){
            let shade = "white";
            
            if ((i+j) % 2 === 0){
                shade = "black";
            }
            board.push(<Tile color={shade} onClick={props.onClick} src={props.squares[index] ? props.squares[index].image : null} />)
            index += 1;
        }
    }
    return(
        <div className="board">
            {board}
        </div>
    )
}