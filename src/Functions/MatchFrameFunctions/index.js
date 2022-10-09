export function showPlayerFrame() {
    let frames = document.getElementsByClassName('match-frame');
    for(var i = 0; i < frames.length; i++){
        frames[i].classList.add('hidden');
    }

    let playerFrame = document.getElementById('player-frame');
    playerFrame.classList.remove('hidden');
}

export function showPenaltyFrame() {
    let frames = document.getElementsByClassName('match-frame');
    for(var i = 0; i < frames.length; i++){
        frames[i].classList.add('hidden');
    }

    let playerFrame = document.getElementById('penalty-frame');
    playerFrame.classList.remove('hidden');
}

export function showTurnoverFrame() {
    let frames = document.getElementsByClassName('match-frame');
    for(var i = 0; i < frames.length; i++){
        frames[i].classList.add('hidden');
    }

    let playerFrame = document.getElementById('turnover-frame');
    playerFrame.classList.remove('hidden');
}

export function showMainMatchFrame() {
    let frames = document.getElementsByClassName('match-frame');
    for(var i = 0; i < frames.length; i++){
        frames[i].classList.add('hidden');
    }

    let mainMatchFrame = document.getElementById('main-match-frame');
    mainMatchFrame.classList.remove('hidden');
}

export function getTime() {
    const seconds = document.getElementById('seconds').innerHTML;
    const minutes = document.getElementById('minutes').innerHTML;

    return `${minutes}:${seconds}`;
}