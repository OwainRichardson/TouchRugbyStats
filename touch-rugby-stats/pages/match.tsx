import Timer from '../components/Timer';
import MatchContainer from '../components/MatchContainer';
import Teams from '../components/Teams';
import MatchContextProvider from '../contexts/MatchContext'; 
import { useState } from 'react'
import Reporting from '../components/Reporting';

function Match() {
  return (
    <div className="App">
      <header className="App-header">
        <MatchContextProvider>
          <Timer />
          <Teams />
          <MatchContainer />  
          <Reporting />
        </MatchContextProvider>
      </header>
    </div>
  );
}

export default Match;