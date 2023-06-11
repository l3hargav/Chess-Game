// MAIN GAME COMPONENT
// IMPLEMENTS ALL THE COMPONENTS AND GAME LOGIC 

import "../App.css";
import { useState, useEffect } from "react"
import Board from "./Board.js"
import InitializeChessboard from "../helperFunctions/InitializeChessboard.js"
import King from "../pieces/King.js"

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
                if(squares[state.selected].isMovePossible(current, destination, occupied) && isLegal(path, destination)){
                    if(isCheck(squares, state.player)[0]) {
                        squares[i] = squares[state.selected];
                        squares[state.selected] = null;
                        if(isCheck(squares, state.player)[0]) {
                            setState({
                                ...state,
                                selected: -1,
                                status: "Not appropriate move still in check"
                            })
                        }
                        else {
                            setState({
                                board: squares,
                                player: state.player === 0? 1 : 0,
                                turn: state.turn === "white"? "black" : "white",
                                selected: -1,
                                status: "Next Player"
                            })
                        }
                    }
                    else {
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

        

        // CHECK WHETHER PLAYER IS IN CHECK
        function isCheck(board, player) {
            function isMoveLegal(path) {
                for(let i = 0; i < path.length; i++){
                    if(board[path[i]] !== null) {
                        return false;
                    }
                }
                return true;
            }
            let posOfKing;
            for(let i = 0; i < 64; i++) {
                if(board[i] instanceof King && board[i].player === player) {
                    posOfKing = i;
                }
            }
            for(let i = 0; i < 64; i++) {
                if(board[i] === null) {
                    continue;
                }
                else if(board[i].player !== player){
                    let occupied = board[i]? true: false;
                    let path = board[i].getPath(i, posOfKing);
                    
                    if(board[i].isMovePossible(i, posOfKing, occupied) && isMoveLegal(path)){
                        return [true, i, ...path];
                    }
                    
                }
            }
            return [false];
        }





        //TODO: LOGIC FOR CHECKMATE AND GAME END        

        function isCheckmate(board, player) {
            let squares = board.slice();
            let check = isCheck(board, player);
            let legal = [];
            if(check[0]) {

                //FOR KING
                for(let i = 0; i < 64; i++) {
                    if(squares[i] instanceof King && squares[i].player === player) {
                        let moves = squares[i].allMoves(i).filter((move) => {
                            return isLegal([], move);
                        })
                        //console.log(moves);
                        for(let j = 0; j < moves.length; j++) {
                            squares[moves[j]] = squares[i];
                            squares[i] = null;
                            if(!isCheck(squares, player)[0]) {
                                legal.push(moves[j]);
                            }
                            squares = board.slice();
                        }

                        break;
                    }
                }

                //FOR OTHER PIECES
                for(let i = 0; i < 64; i++) {
                    let path = check.slice(1);
                    if(squares[i]?.player === player && !(squares[i] instanceof King)) {
                        for(let j = 0; j < path.length; j++) {
                            if(squares[i].isMovePossible(i, path[j]) && isLegal(squares[i].getPath(i, path[j]), path[j])) {
                                legal.push(squares[i]);
                                break;
                            }
                        }
                    }
                }
                
            }
            else {
                return false;
            }
            if(legal.length > 0) {
                return false;
            }
            else {
                return true;
            }
        }



        // CONSOLE LOG THE STATUS OF THE BOARD STATE AFTER EACH RENDER
        useEffect(() => {
            console.log(state.status);
            console.log(state.player);
            //console.log(isCheck(state.board, state.player));
            console.log(isCheckmate(state.board, state.player))
        }, [state])

        return (
            <div>
                <div className="game-board">
                    <Board board={state.board} onClick={(i) => handleClick(i)}/>
                </div>
            </div>
        )
}