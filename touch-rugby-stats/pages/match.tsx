import Timer from '../components/Timer';
import MatchContainer from '../components/MatchContainer';
import Teams from '../components/Teams';
import MatchContextProvider from '../contexts/MatchContext'; 
import { useState } from 'react'
import Statistics from '../components/Statistics';

function Match() {
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

export default Match;