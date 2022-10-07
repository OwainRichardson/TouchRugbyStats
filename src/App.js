import './App.css';
import Timer from './Components/Timer';
import MatchContainer from './Components/MatchContainer';
import Teams from './Components/Teams';
import MatchContextProvider from './Contexts/MatchContext'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MatchContextProvider>
          <Timer />
          <Teams />
          <MatchContainer />  
        </MatchContextProvider>
      </header>
    </div>
  );
}

export default App;
