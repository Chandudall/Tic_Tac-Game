import React,{useState} from 'react';
import './App.css';
import Playerinfo from './component/playerInfo.js';
import GameBoard from './component/gameBoard.js';


function App() {

    const [activePlayer,setActivePlayer]=useState('X');


    function HandleActiveplayer(){
      setActivePlayer((curActiveplayer)=> curActiveplayer==='X' ? 'O' : 'X');
      }

     
  return (
    
      <div className="App">
        <ol id='player' className='highlight-player'>
              <Playerinfo initialname='Player1' symbol='X' isActive={activePlayer==='X'}/>
              <Playerinfo initialname='Player2' symbol='O' isActive={activePlayer==='O'}/>
        </ol>
          <GameBoard  onSelectPlayer={HandleActiveplayer} onActiveSquareBoard={activePlayer}/>
       
      </div>

  )
    
    
 }

export default App;
