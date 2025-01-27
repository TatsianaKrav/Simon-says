import { Popup } from "../components/popup/popup.js";
import { Audio } from "../components/audio/audio.js";
import { Timer } from "../components/timer/timer.js";

export function checkGameEnd(timer) {
    const game = JSON.parse(localStorage.getItem('currGame'));
    let currentGameFilledCells = 0;
    const currentGameCells = document.querySelectorAll(
        "td:not(.left-cell):not(.top-cell)"
    );

    Array.from(currentGameCells).forEach((item) => {
        if (item.classList.contains("filled")) {
            currentGameFilledCells++;
        }
    });

    const nonogramFilledCells = game.image
        .flat()
        .filter((item) => item === 1).length;

    if (currentGameFilledCells === nonogramFilledCells) {
        const result = checkResult(game);

        if (result) {
            const currentField = document.getElementsByClassName('field')[0];


            if (currentField.classList.contains('continue')) {
                const savedTimer = JSON.parse(localStorage.getItem("savedGame")).timer;
                const currentTimer = document.getElementsByClassName('timer')[0];
                const currentTimerVal = currentTimer.innerText;

                const newTimer = new Timer();
                currentTimer.replaceWith(newTimer.getElement());
                Object.assign(timer, savedTimer);
                newTimer.setTime(currentTimerVal);
                timer.setTime(currentTimerVal);
            }

            const timerVal = timer.getTime();

            setTimeout(() => {
                const popup = new Popup(timerVal);
                const sound = new Audio();
                sound.win();
                timer.stop();
            }, 1000)
        }
    }
}

function checkResult(nonogram) {
    const currentGameCells = document.querySelectorAll(
        "td:not(.left-cell):not(.top-cell):not(.empty)"
    );

    const gameAnswers = String(nonogram.image.flat()).split(",").join("");

    let stringResult = "";

    Array.from(currentGameCells).forEach((item) => {
        if (item.classList.contains("filled")) {
            stringResult += "1";
        } else {
            stringResult += "0";
        }
    });

    return gameAnswers === stringResult;
}