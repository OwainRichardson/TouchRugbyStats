import './App.css';
import Timer from './Components/Timer';
import MatchContainer from './Components/MatchContainer';
import Teams from './Components/Teams';
import MatchContextProvider from './Contexts/MatchContext';

const match = {
  homeScore: 0,
  awayScore: 0
};

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
