import MainMatchFrame from '../Frames/MainMatchFrame';
import PlayerFrame from '../Frames/PlayerFrame';
import PenaltyFrame from '../Frames/PenaltyFrame';
import TurnoverFrame from '../Frames/TurnoverFrame';
import { useMatchContext } from '../../context/MatchContext';

const MatchContainer = () => {
    const { displayedFrame } = useMatchContext();

    return (
        <div className="frame-container">
            { displayedFrame === 'main' ? <MainMatchFrame /> :
                displayedFrame === 'player' ? <PlayerFrame /> :
                displayedFrame === 'penalty' ? <PenaltyFrame /> :
                displayedFrame === 'turnover' ? <TurnoverFrame /> :
                null 
            }
        </div>
    );
};

export default MatchContainer;