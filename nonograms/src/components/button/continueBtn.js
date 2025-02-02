import { Timer } from "../timer/timer.js";
import { Button } from "./button.js";


export class ContinueBtn extends Button {
    constructor(timer, field, levelSelect, container) {
        super('Continue last game', 'continue-btn');

        this.timer = timer;
        this.field = field;
        this.levelSelect = levelSelect;
        this.container = container;

        this.setCallback('click', this.continue.bind(this));
    }

    continue() {
        this.field.clear();
        this.field.setClasses('continue');

        const currentGameName = JSON.parse(localStorage.getItem("savedGame")).currentGameName;
        const currentLevelName = JSON.parse(localStorage.getItem("savedGame")).currentLevel;
        const savedGame = JSON.parse(localStorage.getItem("savedGame")).savedGame;
        const timerTime = JSON.parse(localStorage.getItem("savedGame")).timerTime;
        const timer = JSON.parse(localStorage.getItem("savedGame")).timer;

        this.levelSelect.restore(currentLevelName, currentGameName, this.container);

        const currentTimer = document.getElementsByClassName('timer')[0];
        const newTimer = new Timer();
        currentTimer.replaceWith(newTimer.getElement());
        newTimer.setClasses('on');
        newTimer.id = timer.id;

        let min;
        let sec;

        newTimer.setTime(timerTime);

        min = timerTime.slice(0, 2);
        sec = timerTime.slice(3);



        if (min[0] === "0") {
            min = min.slice(1);
        }

        if (sec[0] === "0") {
            sec = sec.slice(1);
        }

        newTimer.init(min, sec);

        const currentField = document.getElementsByClassName('field')[0];
        currentField.classList.add('continue');

        const cells = document.querySelectorAll(
            "td:not(.left-cell):not(.top-cell):not(.empty):not(.score-cell)"
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