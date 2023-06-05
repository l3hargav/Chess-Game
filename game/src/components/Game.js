// MAIN GAME COMPONENT
// IMPLEMENTS ALL THE COMPONENTS AND GAME LOGIC 

import "../App.css";
import { useState, useEffect } from "react"
import Board from "./Board.js"
import InitializeChessboard from "../helperFunctions/InitializeChessboard.js"

/*
    FOR PLAYER:
        Player == 0 => "WHITE"
        Player == 1 => "BLACK"
*/

export default function Game() {

        //MAINTAINS STATE OF BOARD
        const [state, setState] = useState({
            board: InitializeChessboard(),
            player: 0,    // Player whose move it is. 0 => "WHITE" : 1 => "BLACK"
            selected: -1,    // -1 until a Piece is selected. If a Piece is selected then value is the index in squares
            status: "",
            turn: "white"
        })

        //LOGIC FOR HANDLING CLICK AND MOVING PIECES
        function handleClick(i) {
            const squares = state.board.slice();

            // IF INITIALLY NO PIECE IS SELECTED
            if(state.selected === -1) {
                // CHECKS NON NULL SQUARE'S PLAYER VALUE 
                if(squares[i]?.player === state.player) {
                    setState({
                        ...state,
                        selected: i,
                        status: "Piece selected, Choose destination"
                    })
                }
                else {
                    setState({
                        ...state,
                        status: "Wrong piece, select player piece"
                    })
                }
            }
            // WHEN A PIECE IS SELECTED
            else if(state.selected > -1) {
                let current = state.selected;
                let destination = i;
                let occupied = squares[i]? true: false;
                let path = squares[state.selected].getPath(current, destination);
                
                // CHECK IF MOVE IS POSSIBLE AND WHETHER IT IS LEGAL
                if(squares[state.selected].isMovePossible(current, destination, occupied) && isLegal(path, destination)) {
                    console.log(path)
                    squares[i] = squares[state.selected];
                    squares[state.selected] = null;
                    setState({
                        board: squares,
                        player: state.player === 0? 1 : 0,
                        turn: state.turn === "white"? "black" : "white",
                        selected: -1,
                        status: "Next Player"
                    })
                }
                else {
                    setState({
                        ...state,
                        selected: -1,
                        status: "Move not possible"
                    })
                }
            }
        }

        // CHECKS WHETHER A MOVE IS LEGAL
        function isLegal(path, destination) {
            if(state.board[destination]?.player === state.player) {
                return false;
            }
            for (let i = 0; i < path.length; i++){
                if(state.board[path[i]] !== null) {
                    return false;
                }
            }
            return true;
        }

        
        //TODO: LOGIC FOR WHEN GAME FINISHES





        







        

        // CONSOLE LOG THE STATUS OF THE BOARD STATE AFTER EACH RENDER
        useEffect(() => {
            console.log(state.status);
        }, [state])

        return (
            <div>
                <div className="game-board">
                    <Board board={state.board} onClick={(i) => handleClick(i)}/>
                </div>
            </div>
        )
}