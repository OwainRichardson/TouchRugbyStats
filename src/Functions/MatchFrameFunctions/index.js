export function showPlayerFrame() {
    let frames = document.getElementsByClassName('match-frame');
    for(var i = 0; i < frames.length; i++){
        frames[i].classList.add('hidden');
    }

    let playerFrame = document.getElementById('player-frame');
    playerFrame.classList.remove('hidden');
}

function showMainMatchFrame() {
    let frames = document.getElementsByClassName('match-frame');
    for(var i = 0; i < frames.length; i++){
        frames[i].classList.add('hidden');
    }

    let mainMatchFrame = document.getElementById('main-match-frame');
    mainMatchFrame.classList.remove('hidden');
}

export function handleTryScorer(event) {
    // const scorerName = event.target.innerText;
    // const scoreTime = document.getElementById('minutes').innerHTML + ':' + document.getElementById('seconds').innerHTML;

    showMainMatchFrame();
}