import './App.css';
import Playerinfo from './component/playerInfo';


function App() {
  return (
    <div className="App">
       <Playerinfo initialname='Player1' symbol='X'/>
       <Playerinfo initialname='Player2' symbol='O'/>
      
    </div>
  );
}

export default App;
