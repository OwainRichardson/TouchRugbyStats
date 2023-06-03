import MatchButton from '../../MatchButton';
import { useMatchContext } from '../../../context/MatchContext';

const MainMatchFrame = () => {

    const { possession, setPossession, homeSets, setHomeSets, awaySets, setAwaySets,
        homeCompletedSets, setHomeCompletedSets,
        awayCompletedSets, setAwayCompletedSets, setDisplayedFrame, matchInProgress } = useMatchContext();
        

    function completeSet() {
        if (possession === 'home') {
            setHomeCompletedSets(homeCompletedSets + 1);
            setAwaySets(awaySets + 1);
            setPossession('away');
        } else {
            setAwayCompletedSets(awayCompletedSets + 1);
            setHomeSets(homeSets + 1);
            setPossession('home');
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
    } else {
        return (
            <div>Kick off to start the match</div>
        );
    }
};

export default MainMatchFrame;