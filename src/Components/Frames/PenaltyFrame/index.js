import MatchButton from '../../MatchButton';
import { showMainMatchFrame, getTime } from '../../../Functions/MatchFrameFunctions';
import { useMatchContext } from '../../../Contexts/MatchContext';

const PenaltyFrame = () => {
    const { homeSets, setHomeSets, awaySets, setAwaySets, possession, history, setHistory,
                homeTeam, awayTeam } = useMatchContext();

    let penaltyType = '';

    function showPitchArea(event) {
        const button = event.currentTarget;
        penaltyType = button.innerText;

        let penalties = document.getElementById('penalties');
        let pitchArea = document.getElementById('pitch-area');
        penalties.classList.toggle('hidden');
        pitchArea.classList.toggle('hidden');
    }

    function handlePenalty() {
        const time = getTime();

        if (possession === 'home') {
            setHomeSets(homeSets + 1);
            setHistory([...history, { penalty: penaltyType, time: time, team: awayTeam, turnover: false }]);
        } else {
            setAwaySets(awaySets + 1);
            setHistory([...history, { penalty: penaltyType, time: time, team: homeTeam, turnover: false }]);
        }

        penaltyType = '';

        showMainMatchFrame();
    }

    return (
        <div className="hidden match-frame" id="penalty-frame">
            <div id="penalties">
                <MatchButton buttonText='Hard touch' clickFunction={showPitchArea} buttonInfo='nonTurnover' />
                <MatchButton buttonText='Poor ruck' clickFunction={showPitchArea} buttonInfo='turnover' />
            </div>
            <div className="hidden" id="pitch-area">
                <MatchButton buttonText='Goal <-> 7m' clickFunction={handlePenalty} />
                <MatchButton buttonText='7m <-> 10m' clickFunction={handlePenalty} />
                <MatchButton buttonText='10m <-> 10m' clickFunction={handlePenalty} />
                <MatchButton buttonText='10m <-> 7m' clickFunction={handlePenalty} />
                <MatchButton buttonText='7m <-> Goal' clickFunction={handlePenalty} />
            </div>
        </div>
    );
}

export default PenaltyFrame;