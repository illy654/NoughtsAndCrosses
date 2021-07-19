import Tile from "./tile";
import { useState, useEffect } from 'react';
let counter = 0;
let myGo = "True"
let WinnerSign;
let myBool = true;
let myHistory = [];
const Board = () => {
    // Alan woz here
    // can alan change another branch?
    const [board, changeBoard] = useState(
        ['', '', '', '', '', '', '', '', '']
    )
    const DisplayTheWin = (whoWon) => {
        WinnerSign = <div className="won" id="getRekt"><center><h1> {whoWon} Won! </h1></center></div>
    }
    for (let x = 0; x != 3; x++) {
        if (board[3 * x] == board[3 * x + 1] && board[3 * x] == board[3 * x + 2] && board[x * 3] != '') {
            DisplayTheWin(board[3 * x])
        }
        else if (board[x] == board[x + 3] && board[x] == board[x + 6] && board[x] != '') {
            DisplayTheWin(board[x])
        }
        else if (board[0] == board[4] && board[0] == board[8] || board[2] && board[4] && board[6]) {
            if (board[4] != '') { DisplayTheWin(board[4]) }
        }
    }
    const fastForward = () => {
        console.log("forward")
    }
    const moveBackwards = () => {
        let temp = myHistory[myHistory.length -1 ]
        console.log(temp)
        changeBoard(temp)
    }
    if(counter == 1){
        myBool = false;
    }
    counter++
    if(myHistory[myHistory.length - 1] === board){myBool = false}
    if(myBool){
        myHistory.push(board);
    }
    myBool = true;    
    console.log(myHistory)
    return (
        <div>
        <div className="LesBoard">
            {board.map((tile, index) => {
                const changeBoardbyIndex = () => {
                    const newBoard = [...board]
                    if (myGo) { newBoard[index] = 'X'; myGo = '' }
                    else { newBoard[index] = 'O'; myGo = 'True' }
                    changeBoard(newBoard)
                }
                return <div className="tile"><Tile value={tile} changeBoard={changeBoardbyIndex} index={index} /></div>
            })}
            {WinnerSign}

        </div>

        <div className="buttons">
            <button className="backwards" onClick = {fastForward}></button>
            <button className="backwards" onClick = {moveBackwards}></button>
        </div>
        </div>
    );

}

export default Board;