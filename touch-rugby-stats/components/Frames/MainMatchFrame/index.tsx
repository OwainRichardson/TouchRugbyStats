import MatchButton from '../../MatchButton';
import { useMatchContext } from '../../../contexts/MatchContext';

const MainMatchFrame = () => {

    const { possession, setPossession, homeSets, setHomeSets, awaySets, setAwaySets,
        homeCompletedSets, setHomeCompletedSets,
        awayCompletedSets, setAwayCompletedSets, displayedFrame, setDisplayedFrame } = useMatchContext();
        
    function completeSet() {
        // const time = getTime();

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

    return (
        <div className="match-frame" id="main-match-frame">
            <MatchButton buttonText='Try scored' clickFunction={() => setDisplayedFrame('player')} />
            <MatchButton buttonText='Completed set' clickFunction={completeSet} />
            <MatchButton buttonText='Penalty' clickFunction={() => setDisplayedFrame('penalty')} />
            <MatchButton buttonText='Turnover' clickFunction={() => setDisplayedFrame('turnover')} />
        </div>
    )
};

export default MainMatchFrame;