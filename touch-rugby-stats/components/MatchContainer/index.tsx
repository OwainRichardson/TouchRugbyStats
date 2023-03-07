import MainMatchFrame from '../Frames/MainMatchFrame';
import PlayerFrame from '../Frames/PlayerFrame';
import PenaltyFrame from '../Frames/PenaltyFrame';
import TurnoverFrame from '../Frames/TurnoverFrame';
import styles from './index.module.css';
import { useMatchContext } from '../../contexts/MatchContext';

const MatchContainer = () => {
    const { displayedFrame } = useMatchContext();

    return (
        <div className={styles['frame-container']}>
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