import { useMatchContext } from '../../contexts/MatchContext';

// ToDo: Put timer in to useState and then in to the context

const Timer = () => {
    const { possession, homeSets, setHomeSets, awaySets, setAwaySets, minutes, setMinutes, seconds, setSeconds } = useMatchContext();
    
    function startTimer(event: any) {
        event.target.classList.add('hidden');

        if (possession === 'home') {
            setHomeSets(homeSets + 1);
        } else {
            setAwaySets(awaySets + 1);
        }

        var sec:number = 0;
        var secondHalf = false;

        function pad(val: number): string {
            return val > 9 ? `${val}` : `0${val}`;
        }
    
        var timer = setInterval(function () {
            setSeconds(pad(++sec % 60));
            setMinutes(pad(sec / 60));
        }, 1000);
    
        setTimeout(function () {
            clearInterval(timer);
            secondHalf = true;
        }, 60000);
    }

    return (
        <div>
            <h2><span id="minutes">{minutes}</span>:<span id="seconds">{seconds}</span></h2>
            <input type="button" onClick={startTimer} value="Start timer" />
        </div>
    );
};

export default Timer;