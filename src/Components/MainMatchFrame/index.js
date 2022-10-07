import MatchButton from '../MatchButton';
import { showPlayerFrame } from '../../Functions/MatchFrameFunctions';

const MainMatchFrame = () => {
    return (
        <div className="match-frame" id="main-match-frame">
            <MatchButton buttonText='Try scored' clickFunction={showPlayerFrame} />
            <MatchButton buttonText='Try conceded' />
            <MatchButton buttonText='Penalty for' />
            <MatchButton buttonText='Penalty conceded' />
        </div>
    )
};

export default MainMatchFrame;