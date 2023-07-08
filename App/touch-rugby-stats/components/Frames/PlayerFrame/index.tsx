import MatchButton from '../../MatchButton';
import { useMatchContext } from '../../../context/MatchContext';
import { homePlayers, awayPlayers } from './Players';
import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";

function PlayerFrame() {

    const router = useRouter();
    const matchId = router.query.matchId;
    const { homeScore, setHomeScore, awayScore, setAwayScore, possession,
                setPossession, homeSets, setHomeSets, awaySets, setAwaySets,
                setDisplayedFrame, minutes, seconds } = useMatchContext();

    const saveMatchEventMutation = gql`
        mutation saveMatchEvent($timestamp: Int!, $matchId: ID!, $team: String!) {
            addMatchEvent(matchEvent: { timestamp: $timestamp, matchId: $matchId, eventName: "try", team: $team}) {
                timestamp
            }
    }`;

    const [executeMutation, { data, loading, error }] = useMutation(saveMatchEventMutation);

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
        executeMutation({ variables: { timestamp, matchId, team: possession }});
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