import MatchButton from '../MatchButton';
import { handleTryScorer } from '../../Functions/MatchFrameFunctions';

const players = [
    {
        name: 'Owain'
    },
    {
        name: 'Aaron'
    },
    {
        name: 'Sion'
    }
];

const PlayerFrame = () => {
    return (
        <div className="match-frame hidden" id="player-frame">
            {players.map((player, index) => (
                <MatchButton index={index} buttonText={player.name} clickFunction={handleTryScorer} />
            ))}
        </div>
    )
};

export default PlayerFrame;