import Timer from './components/Timer';
import MatchContainer from './components/MatchContainer';
import Teams from './components/Teams';
import MatchContextProvider from './context/MatchContext'; 

function Match() {

const props = {
  homeTeam: 'Taipans',
  awayTeam: 'Wildcats',
  possession: 'home',
  teamInPossession: 'taipans'
};

  return (
    <div className="App">
      <header className="App-header">
        <MatchContextProvider {...props}>
          <Timer />
          <Teams />
          <MatchContainer />  
        </MatchContextProvider>
      </header>
    </div>
  );
}

export default Match;