import './App.css';
import Playerinfo from './component/playerInfo';
import HandleGameBoard from './component/gameBoard.js';


function App() {
  return (
  <>
    <div className="App">
       <Playerinfo initialname='Player1' symbol='X'/>
       <Playerinfo initialname='Player2' symbol='O'/>
    </div>
      <HandleGameBoard />
  </>
  );
}

export default App;
