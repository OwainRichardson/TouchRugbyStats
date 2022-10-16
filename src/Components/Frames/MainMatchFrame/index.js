import MatchButton from '../../MatchButton';
import { showPlayerFrame, showPenaltyFrame, showTurnoverFrame } from '../../../Functions/MatchFrameFunctions';

const MainMatchFrame = () => {

    const { homeScore, setHomeScore, awayScore, setAwayScore, possession, 
        setPossession, homeSets, setHomeSets, awaySets, setAwaySets,
        history, setHistory, homeTeam, awayTeam } = useMatchContext();
    function completeSet() {
        
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