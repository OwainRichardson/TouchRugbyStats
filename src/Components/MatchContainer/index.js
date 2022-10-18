import MainMatchFrame from '../Frames/MainMatchFrame';
import PlayerFrame from '../Frames/PlayerFrame';
import PenaltyFrame from '../Frames/PenaltyFrame';
import TurnoverFrame from '../Frames/TurnoverFrame';
import Reporting from '../Reporting';
import './index.css';

const MatchContainer = () => {
    return (
        <div className="frame-container">
            <MainMatchFrame />
            <PlayerFrame />
            <PenaltyFrame />
            <TurnoverFrame />
        </div>
    );
};

export default MatchContainer;