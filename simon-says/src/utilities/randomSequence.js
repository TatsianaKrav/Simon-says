import { easyLevel, mediumLevel, hardLevel } from "./keyboardVar.js";

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