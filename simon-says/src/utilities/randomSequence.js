import { easyLevel, mediumLevel, hardLevel } from "./keyboardVar.js";

export function getCurrentSeq() {
    const level = document.querySelector('select');
    if (level) {
        level.setAttribute('disabled', '');
        const levelValue = level.value;
        /*  const roundValue = document.querySelectorAll('select')[1].value; */
        const round = document.getElementsByClassName('current-round')[0];
        const roundValue = parseInt(round.innerText.match(/\d+/));
        
        const currentSeq = random(levelValue, roundValue);
        return currentSeq;
    } else {
        throw new Error('No select found');
    }
}

export function random(level, round) {
    let arr = [];
    let currentLevel;
    let seqAmount = round * 2;

    if (level === 'Easy') {
        currentLevel = [...easyLevel];
    } else if (level === 'Medium') {
        currentLevel = [...mediumLevel];
    } else if (level === 'Hard') {
        currentLevel = [...hardLevel];
    }

    arr = [...shuffle(currentLevel)];
    const currentSeq = arr.slice(0, seqAmount);

    return currentSeq;
}


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}