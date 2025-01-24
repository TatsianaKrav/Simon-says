import { Button } from "./button.js";

export class SaveBtn extends Button {
    constructor(timer, currentGame) {
        super('Save game', 'save-btn');

        this.timer = timer;
        this.currentGame = currentGame
        this.setCallback('click', this.save.bind(this));
    }

    save() {
        this.timer.stop();

        const cells = document.querySelectorAll(
            "td:not(.left-cell):not(.top-cell):not(.empty)"
        );
        const savedGame = [];

        cells.forEach((item, index) => {
            if (item.classList.contains("filled")) {
                savedGame[index] = "1";
            } else if (item.classList.contains("not")) {
                savedGame[index] = "x";
            } else {
                savedGame[index] = "0";
            }
        });

        const time = document.getElementsByClassName("timer")[0].innerText;
        const gameName = document.getElementsByClassName("game-name")[0].innerText;


        const toSave = {
            currentGameName: gameName,
            savedGame: savedGame,
            timer: time,
        };


        localStorage.setItem("savedGame", JSON.stringify(toSave));
    }
}