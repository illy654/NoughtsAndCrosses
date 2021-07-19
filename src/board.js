import Tile from "./tile";
import { useState } from "react";
// alans causing conflicts!
// hello!
let counter = 0;
let myGo = "True";
let WinnerSign;
let myBool = true;
const Board = () => {
  // Alan woz here
  // can alan change another branch?
  // another change
  const [board, changeBoard] = useState(["", "", "", "", "", "", "", "", ""]);

  const [history, changeHistory] = useState([board]);

  const DisplayTheWin = (whoWon) => {
    WinnerSign = (
      <div className="won" id="getRekt">
        <center>
          <h1> {whoWon} Won! </h1>
        </center>
      </div>
    );
  };
  for (let x = 0; x != 3; x++) {
    if (board[3 * x] == board[3 * x + 1] && board[3 * x] == board[3 * x + 2] && board[x * 3] != "") {
      DisplayTheWin(board[3 * x]);
    } else if (board[x] == board[x + 3] && board[x] == board[x + 6] && board[x] != "") {
      DisplayTheWin(board[x]);
    } else if ((board[0] == board[4] && board[0] == board[8]) || (board[2] && board[4] && board[6])) {
      if (board[4] != "") {
        DisplayTheWin(board[4]);
      }
    }
  }
  const fastForward = () => {
    console.log("forward");
  };
  const moveBackwards = () => {
    const tempHistory = history.slice(0, history.length - 1);
    changeHistory(tempHistory);
  };
  return (
    <div>
      <div className="LesBoard">
        {history[history.length - 1].map((tile, index) => {
          const changeBoardbyIndex = () => {
            const newBoard = [...board];
            if (myGo) {
              newBoard[index] = "X";
              myGo = "";
            } else {
              newBoard[index] = "O";
              myGo = "True";
            }
            changeBoard(newBoard);
            changeHistory([...history, board]);
          };
          return (
            <div className="tile">
              <Tile value={tile} changeBoard={changeBoardbyIndex} index={index} />
            </div>
          );
        })}
        {WinnerSign}
      </div>

      <div className="buttons">
        <button className="backwards" onClick={moveBackwards}></button>
      </div>
    </div>
  );
};

export default Board;
