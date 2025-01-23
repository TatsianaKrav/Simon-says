import { Button } from "./button.js";

export class ContinueBtn extends Button {
    constructor(field, timer) {
        super('Continue last game', 'continue-btn');

        this.field = field;
        this.timer = timer;
        this.setCallback('click', this.continue.bind(this));
    }

    continue() {
        this.field.clear();
        
        const currentGameName = JSON.parse(localStorage.getItem("savedGame")).currentGameName;
        const savedGame = JSON.parse(localStorage.getItem("savedGame")).savedGame;
        const timerTime = JSON.parse(localStorage.getItem("savedGame")).timer;

        const gameName = document.getElementsByClassName('game-name')[0].innerText = currentGameName;
        this.timer.setClasses('on');

        let min;
        let sec;


        this.timer.setTime(timerTime);

        min = timerTime.slice(0, 2);
        sec = timerTime.slice(3);

        this.timer.init(min, sec);

        if (min[0] === "0") {
            min = min.slice(1);
        }

        if (sec[0] === "0") {
            sec = sec.slice(1);
        }

        const cells = document.querySelectorAll(
            "td:not(.left-cell):not(.top-cell):not(.empty)"
        );

        savedGame.forEach((item, index) => {
            if (item === "1") {
                cells[index].classList.add("filled");
            } else if (item === "x") {
                cells[index].classList.add("not");
            }
        });
    }
}