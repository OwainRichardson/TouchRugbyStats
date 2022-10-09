import MatchButton from '../../MatchButton';
import { showPlayerFrame, showPenaltyFrame, showTurnoverFrame } from '../../../Functions/MatchFrameFunctions';

const MainMatchFrame = () => {
    return (
        <div className="match-frame" id="main-match-frame">
            <MatchButton buttonText='Try scored' clickFunction={showPlayerFrame} />
            <MatchButton buttonText='Penalty' clickFunction={showPenaltyFrame} />
            <MatchButton buttonText='Turnover' clickFunction={showTurnoverFrame} />
        </div>
    )
};

export default MainMatchFrame;