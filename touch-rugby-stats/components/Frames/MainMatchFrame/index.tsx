import MatchButton from '../../MatchButton';
import { useMatchContext } from '../../../contexts/MatchContext';

const MainMatchFrame = () => {

    const { possession, setPossession, homeSets, setHomeSets, awaySets, setAwaySets,
        homeCompletedSets, setHomeCompletedSets,
        awayCompletedSets, setAwayCompletedSets, setDisplayedFrame, matchInProgress,
        homeTeam, awayTeam, setTeamInPossession } = useMatchContext();
        

    function completeSet() {
        // const time = getTime();

        if (possession === 'home') {
            setHomeCompletedSets(homeCompletedSets + 1);
            setAwaySets(awaySets + 1);
            setPossession('away');
            setTeamInPossession(awayTeam.toLowerCase());
        } else {
            setAwayCompletedSets(awayCompletedSets + 1);
            setHomeSets(homeSets + 1);
            setPossession('home');
            setTeamInPossession(homeTeam.toLowerCase());
        }     
    }

    if (matchInProgress) {
        return (
            <div className="match-frame" id="main-match-frame">
                <MatchButton buttonText='Try scored' clickFunction={() => setDisplayedFrame('player')} />
                <MatchButton buttonText='Completed set' clickFunction={completeSet} />
                <MatchButton buttonText='Penalty' clickFunction={() => setDisplayedFrame('penalty')} />
                <MatchButton buttonText='Turnover' clickFunction={() => setDisplayedFrame('turnover')} />
            </div>
        )
    };
};

export default MainMatchFrame;