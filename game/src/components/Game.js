// MAIN GAME COMPONENT
// IMPLEMENTS ALL THE COMPONENTS AND GAME LOGIC 

import "../App.css";
//import { useState } from "react"
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
        let board = InitializeChessboard();
        return (
            <div>
                <div className="game-board">
                    <Board squares={board} />
                </div>
            </div>
        )
}