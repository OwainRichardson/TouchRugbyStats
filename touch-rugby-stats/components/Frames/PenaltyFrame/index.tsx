import MatchButton from '../../MatchButton';
import { useMatchContext } from '../../../contexts/MatchContext';
import { penalties } from './penalties';

const PenaltyFrame = () => {
    const { homeSets, setHomeSets, awaySets, setAwaySets, possession, setDisplayedFrame } = useMatchContext();

    let penaltyType = '';

    function showPitchArea(event: any) {
        const button = event.currentTarget;
        penaltyType = button.innerText;

        let penalties = document.getElementById('penalties');
        let pitchArea = document.getElementById('pitch-area');
        penalties?.classList.toggle('hidden');
        pitchArea?.classList.toggle('hidden');
    }

    function handlePenalty() {
        // const time = getTime();

        if (possession === 'home') {
            setHomeSets(homeSets + 1);
        } else {
            setAwaySets(awaySets + 1);
        }

        penaltyType = '';

        setDisplayedFrame('main');
    }

    return (
        <div className="match-frame" id="penalty-frame">
            <div id="penalties">
                {
                    penalties.map((penalty, index) => {
                        return (
                            <MatchButton key={index} buttonText={penalty} clickFunction={showPitchArea} />
                        );
                    })
                }
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