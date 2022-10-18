import React, { createContext, useState, useContext } from 'react'

export const MatchContext = createContext({})

export function useMatchContext() {
    return useContext(MatchContext);
}

const MatchContextProvider = (props) => {
    const [history, setHistory] = useState([]);
    const [homeScore, setHomeScore] = useState(0);
    const [awayScore, setAwayScore] = useState(0);
    const [possession, setPossession] = useState('home');
    const [homeSets, setHomeSets] = useState(0);
    const [awaySets, setAwaySets] = useState(0);
    const [homeCompletedSets, setHomeCompletedSets] = useState(0);
    const [awayCompletedSets, setAwayCompletedSets] = useState(0);
    
    return (
         <MatchContext.Provider 
            value={{
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
               {props.children}
         </MatchContext.Provider>
    )
}
export default MatchContextProvider