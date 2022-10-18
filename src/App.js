import './App.css';
import Timer from './Components/Timer';
import MatchContainer from './Components/MatchContainer';
import Teams from './Components/Teams';
import { MatchContext } from './Contexts/MatchContext'; 
import { useState } from 'react'

function App() {
  const [history, setHistory] = useState([]);
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [possession, setPossession] = useState('home');
  const [homeSets, setHomeSets] = useState(0);
  const [awaySets, setAwaySets] = useState(0);
  const [homeCompletedSets, setHomeCompletedSets] = useState(0);
  const [awayCompletedSets, setAwayCompletedSets] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <MatchContext.Provider value={{
                setHomeScore,
                homeScore,
                setAwayScore,
                awayScore,
                possession,
                setPossession,
                homeSets,
                setHomeSets,
                awaySets,
                setAwaySets,
                history,
                setHistory,
                homeTeam: 'Wildcats',
                awayTeam: 'Saxons',
                homeCompletedSets,
                setHomeCompletedSets,
                awayCompletedSets,
                setAwayCompletedSets
            }}>
          <Timer />
          <Teams />
          <MatchContainer />  
        </MatchContext.Provider>
      </header>
    </div>
  );
}

export default App;
