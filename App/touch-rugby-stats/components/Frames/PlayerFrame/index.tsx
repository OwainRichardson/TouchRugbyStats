import MatchButton from '../../MatchButton';
import { useMatchContext } from '../../../context/MatchContext';
import { homePlayers, awayPlayers } from './Players';
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { SaveMatchEventMutation, ExecuteMutation } from "../../../services/MatchEventService";

function PlayerFrame() {

    const router = useRouter();
    const matchId = router.query.matchId as string;
    const { homeScore, setHomeScore, awayScore, setAwayScore, possession,
                setPossession, homeSets, setHomeSets, awaySets, setAwaySets,
                setDisplayedFrame, minutes, seconds } = useMatchContext();

    const [createMatchEvent, { data, loading, error }] = useMutation(SaveMatchEventMutation);

    function homePlayerSelected() {
        setHomeScore(homeScore + 1);
        setPossession('away');
        setAwaySets(awaySets + 1);
        setDisplayedFrame('main');

        saveMatchevent(getTime());
    }

    function awayPlayerSelected() {
        setAwayScore(awayScore + 1);
        setPossession('home');
        setHomeSets(homeSets + 1);
        setDisplayedFrame('main');

        saveMatchevent(getTime());
    }

    function getTime() {
        return (parseInt(minutes) * 60) + parseInt(seconds);
    }

    function saveMatchevent(timestamp: Number) {
        ExecuteMutation(createMatchEvent, timestamp, matchId, possession, 'try');
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