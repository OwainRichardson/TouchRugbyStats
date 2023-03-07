export function showPlayerFrame() {
    if (typeof window !== "undefined") {
        let frames = document.getElementsByClassName('match-frame');
        for(var i = 0; i < frames.length; i++){
            frames[i].classList.add('hidden');
        }

        let playerFrame = document.getElementById('player-frame');
        playerFrame.classList.remove('hidden');
    }
}

export function showPenaltyFrame() {
    if (typeof window !== "undefined") {
            let frames = document.getElementsByClassName('match-frame');
        for(var i = 0; i < frames.length; i++){
            frames[i].classList.add('hidden');
        }

        let playerFrame = document.getElementById('penalty-frame');
        playerFrame.classList.remove('hidden');
    }
}
export function showTurnoverFrame() {
    if (typeof window !== "undefined") {
        let frames = document.getElementsByClassName('match-frame');
        for(var i = 0; i < frames.length; i++){
            frames[i].classList.add('hidden');
        }

        let playerFrame = document.getElementById('turnover-frame');
        playerFrame.classList.remove('hidden');
    }
}

export function showMainMatchFrame() {
    if (typeof window !== "undefined") {
        let frames = document.getElementsByClassName('match-frame');
        for(var i = 0; i < frames.length; i++){
            frames[i].classList.add('hidden');
        }

        let mainMatchFrame = document.getElementById('main-match-frame');
        mainMatchFrame.classList.remove('hidden');
    }
}

export function getTime() {
    if (typeof window !== "undefined") {
        const seconds = document.getElementById('seconds').innerHTML;
        const minutes = document.getElementById('minutes').innerHTML;

        return `${minutes}:${seconds}`;
    }

    return '';
}