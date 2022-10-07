const Timer = () => {
    return (
        <div>
            <h2><span id="minutes">00</span>:<span id="seconds">00</span></h2>
            <input type="button" onClick={startTimer} value="Start timer" />
            <input type="button" className="hidden" id="start-second-half" onClick={startTimer} value="Start second half" />
        </div>
    );
};

function startTimer(event) {
    event.target.classList.add('hidden');

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
    }, 11000);
}
function showStartSecondHalfButton() {
    var secondHalfButton = document.getElementById('start-second-half');
    secondHalfButton.classList.remove('hidden');
}

var sec = 0;
var secondHalf = false;

function pad(val) {
    return val > 9 ? val : "0" + val;
}

export default Timer;