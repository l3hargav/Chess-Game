// MAIN GAME COMPONENT
// IMPLEMENTS ALL THE COMPONENTS AND GAME LOGIC 

import "../App.css";
import { useState } from "react"
import Board from "./Board.js"
import InitializeChessboard from "../helperFunctions/InitializeChessboard.js"

/*
    FOR PLAYER:
        Player == 0 => "WHITE"
        Player == 1 => "BLACK"
*/

function handleClick(piece) {

}

export default function Game() {
        // TODO: IMPLEMENT LOGIC
        const [state, setState] = useState({
            board: InitializeChessboard(),
            player: 0,    // Player whose move it is. 0 => "WHITE" : 1 => "BLACK"
            sourceSelection: -1,    // -1 until a Piece is selected. If a Piece is selected then value is the index in squares
            turn: "white"
        })
        return (
            <div>
                <div className="game-board">
                    <Board board={state.board} />
                </div>
            </div>
        )
}