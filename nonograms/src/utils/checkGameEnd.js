import { Popup } from "../components/popup/popup.js";

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
            const popup = new Popup(timer.getTime());
            timer.stop();
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