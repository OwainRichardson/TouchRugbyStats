import MatchButton from '../MatchButton';
import { handleTryScorer } from '../../Functions/MatchFrameFunctions';
import { useMatchContext } from '../../Contexts/MatchContext';
import { homePlayers, awayPlayers } from './Players';

const PlayerFrame = () => {

    const { homeScore, setHomeScore, awayScore, setAwayScore, possession, 
                setPossession, homeSets, setHomeSets, awaySets, setAwaySets } = useMatchContext()

    function playerSelected() {
        if (possession === 'home') {
            setHomeScore(homeScore + 1);
            setPossession('away');
            setAwaySets(awaySets + 1);
        } else {
            setAwayScore(awayScore + 1);
            setPossession('home');
            setHomeSets(homeSets + 1);
        }

        handleTryScorer();
    };

    if (possession === 'home') {
        return (
            <div className="match-frame hidden" id="player-frame">
                {homePlayers.map((player, index) => (
                    <MatchButton key={index} buttonText={player.name} clickFunction={playerSelected} />
                ))}
            </div>
        )
    }

    if (possession === 'away') {
        return (
            <div className="match-frame hidden" id="player-frame">
                {awayPlayers.map((player, index) => (
                    <MatchButton key={index} buttonText={player.name} clickFunction={playerSelected} />
                ))}
            </div>
        )
    }

    return (
        <p>Could not work out who is in possession. {possession}</p>
    )
};

export default PlayerFrame;