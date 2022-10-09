import { useMatchContext } from '../../Contexts/MatchContext';

const Timer = () => {
    const { possession, homeSets, setHomeSets, awaySets, setAwaySets } = useMatchContext();
    
    function startTimer(event) {
        event.target.classList.add('hidden');

        if (possession === 'home') {
            setHomeSets(homeSets + 1);
        } else {
            setAwaySets(awaySets + 1);
        }

        var sec = 0;
        var secondHalf = false;

        function pad(val) {
            return val > 9 ? val : "0" + val;
        }
    
        var timer = setInterval(function () {
            document.getElementById('seconds').innerHTML = pad(++sec % 60);
            document.getElementById('minutes').innerHTML = pad(parseInt(sec / 60, 10));
        }, 1000);
    
        setTimeout(function () {
            clearInterval(timer);
    
            if (!secondHalf) {
                showStartSecondHalfButton();
            }
    
            secondHalf = true;
        }, 20000);
    }
    function showStartSecondHalfButton() {
        var secondHalfButton = document.getElementById('start-second-half');
        secondHalfButton.classList.remove('hidden');
    }

    return (
        <div>
            <h2><span id="minutes">00</span>:<span id="seconds">00</span></h2>
            <input type="button" onClick={startTimer} value="Start timer" />
            <input type="button" className="hidden" id="start-second-half" onClick={startTimer} value="Start second half" />
        </div>
    );
};

export default Timer;