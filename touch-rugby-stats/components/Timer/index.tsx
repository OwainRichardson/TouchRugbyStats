import { match } from 'assert';
import { useMatchContext } from '../../contexts/MatchContext';

const Timer = () => {
    const { possession, homeSets, setHomeSets, awaySets, setAwaySets, minutes, setMinutes, seconds, setSeconds, matchLengthSeconds, setMatchInProgress } = useMatchContext();
    
    function startTimer(event: any) {
        setMatchInProgress(true);

        const timerButton = document.getElementById('timer-button');
        timerButton?.classList.add('hidden');

        const timerDisplay = document.getElementById('timer-display')
        timerDisplay?.classList.remove('hidden');

        if (possession === 'home') {
            setHomeSets(homeSets + 1);
        } else {
            setAwaySets(awaySets + 1);
        }

        var sec:number = 0;

        function pad(val: number): string {
            return val > 9 ? `${val}` : `0${val}`;
        }
    
        var timer = setInterval(function () {
            setSeconds(pad(++sec % 60));
            setMinutes(pad(Math.floor(sec / 60)));
        }, 1000);
    
        setTimeout(function () {
            clearInterval(timer);
        }, matchLengthSeconds * 1000);
    }

    return (
        <div className="timer-container">
            <h2 id="timer-display" className="hidden"><span id="minutes">{minutes}</span>:<span id="seconds">{seconds}</span></h2>
            <input type="button" id="timer-button" onClick={startTimer} value="Kick off" />
        </div>
    );
};

export default Timer;