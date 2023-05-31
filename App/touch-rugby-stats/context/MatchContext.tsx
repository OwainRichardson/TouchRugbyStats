import React, { createContext, useState, useContext } from 'react'
import { IMatchContext } from './IMatchContext';

export const MatchContext = createContext<IMatchContext>({
    homeScore: 0,
    setHomeScore: () => null,
    awayScore: 0,
    setAwayScore: () => null,
    possession: 'home',
    setPossession: () => null,
    homeSets: 0,
    setHomeSets: () => null,
    awaySets: 0,
    setAwaySets: () => null,
    homeCompletedSets: 0,
    setHomeCompletedSets: () => null,
    awayCompletedSets: 0,
    setAwayCompletedSets: () => null,
    homeTeam: 'Wildcats',
    setHomeTeam: () => null,
    awayTeam: 'Taipains',
    setAwayTeam: () => null,
    minutes: '00',
    setMinutes: () => null,
    seconds: '00',
    setSeconds: () => null,
    displayedFrame: 'main',
    setDisplayedFrame: () => null,
    homePenalties: 0,
    setHomePenalties: () => null,
    awayPenalties: 0,
    setAwayPenalties: () => null,
    matchLengthSeconds: 600,
    matchInProgress: false,
    setMatchInProgress: () => null,
    teamInPossession: 'wildcats',
    setTeamInPossession: () => null
});

export function useMatchContext() {
    return useContext(MatchContext);
}

const MatchContextProvider = (props: any) => {
    const [homeScore, setHomeScore] = useState(0);
    const [awayScore, setAwayScore] = useState(0);
    const [possession, setPossession] = useState(props.possession ?? 'home');
    const [homeSets, setHomeSets] = useState(0);
    const [awaySets, setAwaySets] = useState(0);
    const [homeCompletedSets, setHomeCompletedSets] = useState(0);
    const [awayCompletedSets, setAwayCompletedSets] = useState(0);
    const [homeTeam, setHomeTeam] = useState(props.homeTeam ?? 'Wildcats');
    const [awayTeam, setAwayTeam] = useState(props.awayTeam ?? 'Saxons');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');
    const [homePenalties, setHomePenalties] = useState(0);
    const [awayPenalties, setAwayPenalties] = useState(0);
    const [displayedFrame, setDisplayedFrame] = useState<'main' | 'player' | 'penalty' | 'turnover'>('main');
    const [matchEvents, setMatchEvents] = useState([]);
    const matchLengthSeconds = 600;
    const [matchInProgress, setMatchInProgress] = useState(props.matchInProgess ?? false);
    const [teamInPossession, setTeamInPossession] = useState(props.teamInPossession ?? 'wildcats');
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
                homeTeam,
                setHomeTeam,
                awayTeam,
                setAwayTeam,
                homeCompletedSets,
                setHomeCompletedSets,
                awayCompletedSets,
                setAwayCompletedSets,
                minutes,
                setMinutes,
                seconds,
                setSeconds,
                displayedFrame,
                setDisplayedFrame,
                homePenalties,
                setHomePenalties,
                awayPenalties,
                setAwayPenalties,
                matchLengthSeconds,
                matchInProgress,
                setMatchInProgress,
                teamInPossession,
                setTeamInPossession
            }}>
               {props.children}
         </MatchContext.Provider>
    )
}
export default MatchContextProvider