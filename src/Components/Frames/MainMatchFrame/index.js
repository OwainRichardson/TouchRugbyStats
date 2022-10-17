import MatchButton from '../../MatchButton';
import { showPlayerFrame, showPenaltyFrame, showTurnoverFrame, getTime } from '../../../Functions/MatchFrameFunctions';
import { useMatchContext } from '../../../Contexts/MatchContext';

const MainMatchFrame = () => {

    const { possession, setPossession, homeSets, setHomeSets, awaySets, setAwaySets,
        history, setHistory, homeTeam, awayTeam, homeCompletedSets, setHomeCompletedSets,
        awayCompletedSets, setAwayCompletedSets } = useMatchContext();
    
    function completeSet() {
        const time = getTime();

        if (possession === 'home') {
            setHomeCompletedSets(homeCompletedSets + 1);
            setHistory([...history, { action: 'completedSet', time: time, team: homeTeam }]);
            setAwaySets(awaySets + 1);
            setPossession('away');
        } else {
            setAwayCompletedSets(awayCompletedSets + 1);
            setHistory([...history, { action: 'completedSet', time: time, team: awayTeam }]);
            setHomeSets(homeSets + 1);
            setPossession('home');
        }     
    }

    return (
        <div className="match-frame" id="main-match-frame">
            <MatchButton buttonText='Try scored' clickFunction={showPlayerFrame} />
            <MatchButton buttonText='Completed set' clickFunction={completeSet} />
            <MatchButton buttonText='Penalty' clickFunction={showPenaltyFrame} />
            <MatchButton buttonText='Turnover' clickFunction={showTurnoverFrame} />
        </div>
    )
};

export default MainMatchFrame;