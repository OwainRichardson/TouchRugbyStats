import MatchButton from '../../MatchButton';
import { useMatchContext } from '../../../context/MatchContext';
import { turnovers } from './turnovers';
import { SaveMatchEventMutation, ExecuteMutation } from "../../../services/MatchEventService";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
const TurnoverFrame = () => {
    const { homeSets, setHomeSets, awaySets, setAwaySets, possession, setPossession, setDisplayedFrame, minutes, seconds } = useMatchContext();

    const [createMatchEvent, { data, loading, error }] = useMutation(SaveMatchEventMutation);
    const router = useRouter();
    const matchId = router.query.matchId as string;

    let turnoverType = '';

    function showPitchArea(event: any) {
        const button = event.currentTarget;
        turnoverType = button.innerText;

        let penalties = document.getElementById('turnovers');
        let pitchArea = document.getElementById('pitch-area-turnovers');
        penalties?.classList.toggle('hidden');
        pitchArea?.classList.toggle('hidden');
    }

    function handleTurnover() {
        // const time = getTime();

        if (possession === 'home') {
            setAwaySets(awaySets + 1);
            setPossession('away');
        } else {
            setHomeSets(homeSets + 1);
            setPossession('home');
        }

        turnoverType = '';

        setDisplayedFrame('main');

        saveMatchevent(getTime());
    }

    function getTime() {
        return (parseInt(minutes) * 60) + parseInt(seconds);
    }

    function saveMatchevent(timestamp: Number) {
        ExecuteMutation(createMatchEvent, timestamp, matchId, possession, 'turnover');
    }

    return (
        <div className="match-frame" id="turnover-frame">
            <div id="turnovers">
                {
                    turnovers.map((turnover, index) => {
                        return (
                            <MatchButton key={index} buttonText={turnover} clickFunction={showPitchArea} />
                        );
                    })
                }
            </div>
            <div className="hidden" id="pitch-area-turnovers">
                <MatchButton buttonText='Goal <-> 7m' clickFunction={handleTurnover} />
                <MatchButton buttonText='7m <-> 10m' clickFunction={handleTurnover} />
                <MatchButton buttonText='10m <-> 10m' clickFunction={handleTurnover} />
                <MatchButton buttonText='10m <-> 7m' clickFunction={handleTurnover} />
                <MatchButton buttonText='7m <-> Goal' clickFunction={handleTurnover} />
            </div>
        </div>
    );
};

export default TurnoverFrame;