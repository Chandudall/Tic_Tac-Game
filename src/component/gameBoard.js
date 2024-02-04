import React,{useState} from 'react';
import './gameboard.css';
const initialgameBoard=[
    [null,null,null],
    [null,null,null],
    [null,null,null]
]

function GameBoard({onSelectPlayer,onActiveSquareBoard}){
    const [gameBoard,setgameBoard]=useState(initialgameBoard);

    const handleButtonClick=(rowIndex,colIndex)=>{
        const updatedGameboard=[...gameBoard];
        updatedGameboard[rowIndex][colIndex]=onActiveSquareBoard;
        setgameBoard(updatedGameboard);
        
        onSelectPlayer();

        
       
    }
    
   
    return(
        <div className='gameboard'>
      {gameBoard.map((row, rowIndex) => (
        <div key={rowIndex} className='row'>
          {row.map((col, colIndex) => (
            <button
              key={colIndex}
              className='gameButton'
              onClick={() => handleButtonClick(rowIndex, colIndex) }
              disabled={col!==null}
            >
              {col}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
export default GameBoard;