import MatchButton from '../../MatchButton';
import { useMatchContext } from '../../../contexts/MatchContext';
import { homePlayers, awayPlayers } from './Players';

const PlayerFrame = () => {

    const { homeScore, setHomeScore, awayScore, setAwayScore, possession,
                setPossession, homeSets, setHomeSets, awaySets, setAwaySets,
                setDisplayedFrame, matchEvents, setMatchEvents, minutes, seconds } = useMatchContext();


    function homePlayerSelected() {
        // const time = getTime();
        setHomeScore(homeScore + 1);
        setPossession('away');
        setAwaySets(awaySets + 1);
        setDisplayedFrame('main');

        const timestamp = (parseInt(minutes) * 60) + parseInt(seconds);
        setMatchEvents([...matchEvents, { eventType: 'try', possession: possession, timestamp: timestamp }])
    }

    function awayPlayerSelected() {
        // const time = getTime();
        setAwayScore(awayScore + 1);
        setPossession('home');
        setHomeSets(homeSets + 1);
        setDisplayedFrame('main');

        const timestamp = (parseInt(minutes) * 60) + parseInt(seconds);
        setMatchEvents([...matchEvents, { eventType: 'try', possession: possession, timestamp: timestamp }])
    }
    
    if (possession === 'home') {
        return (
            <div className="match-frame" id="player-frame">
                {homePlayers.map((player, index) => (
                    <MatchButton key={index} buttonText={player.name} clickFunction={() => homePlayerSelected()} />
                ))}
            </div>
        )
    }

    if (possession === 'away') {
        return (
            <div className="match-frame" id="player-frame">
                {awayPlayers.map((player, index) => (
                    <MatchButton key={index} buttonText={player.name} clickFunction={() => awayPlayerSelected()} />
                ))}
            </div>
        )
    }

    return (
        <p>Could not work out who is in possession. {possession}</p>
    )
};

export default PlayerFrame;