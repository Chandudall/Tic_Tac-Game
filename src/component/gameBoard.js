import React,{useState} from 'react';
import './gameboard.css';
const gameBoard=[
    [null,null,null],
    [null,null,null],
    [null,null,null]
]

function HandleGameBoard(){
    return(
        <div className='gameboard'>
            {gameBoard.map((row,rowIndex)=><li key={rowIndex}>
                <ol>{row.map((col,colIndex)=><li key={colIndex}>
                    <button className='gameButton'>{col}</button>
                </li>)}</ol>

            </li>)}
            

        </div>
    )
}
export default HandleGameBoard;