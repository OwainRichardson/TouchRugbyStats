import MainMatchFrame from '../MainMatchFrame';
import PlayerFrame from '../PlayerFrame';
import './index.css';

const MatchContainer = () => {
    return (
        <div className="frame-container">
            <MainMatchFrame />
            <PlayerFrame />
        </div>
    );
};

export default MatchContainer;