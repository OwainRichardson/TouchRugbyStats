import MatchButton from '../../MatchButton';
import { useMatchContext } from '../../../context/MatchContext';
import { turnovers } from './turnovers';

const TurnoverFrame = () => {
    const { homeSets, setHomeSets, awaySets, setAwaySets, possession, setPossession, setDisplayedFrame,
        homeTeam, awayTeam, setTeamInPossession } = useMatchContext();

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
            setTeamInPossession(awayTeam.toLowerCase());
        } else {
            setHomeSets(homeSets + 1);
            setPossession('home');
            setTeamInPossession(homeTeam.toLowerCase());
        }

        turnoverType = '';

        setDisplayedFrame('main');
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