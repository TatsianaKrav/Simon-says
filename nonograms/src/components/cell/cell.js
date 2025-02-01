import { ElementCreator } from "../../utils/elementCreator.js";
import { checkGameEnd, handleGameEnd } from "../../utils/checkGameEnd.js";
import { Audio } from "../audio/audio.js";
import { Timer } from "../timer/timer.js";



export class Cell extends ElementCreator {
    timerOn = false;
    interval;


    constructor(timer, scoreTable, field) {
        super('td');
        this.timer = timer;
        this.scoreTable = scoreTable;
        this.field = field;

        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) this.setClasses('dark');

        this.setCallback('click', this.fill.bind(this));
        this.setCallback('contextmenu', (e) => this.cross(e));
    }

    fill() {
        const result = checkGameEnd();
        if (result) return;

        if (this.checkCLasses("top-cell", "left-cell", "empty")) return;
        if (this.field.checkCLasses('done')) return;

        const sound = new Audio();

        this.timerOn = this.timer.getElement().classList.contains('on');

        if (!this.timerOn) {
            this.interval = this.timer.init(0, 0);
            this.timerOn = true;
            this.timer.getElement().classList.add('on');
        }

        if (this.checkCLasses('not')) {
            this.getElement().classList.toggle('not');
        }

        this.checkCLasses('filled') ? sound.remove() : sound.fill();
        this.getElement().classList.toggle('filled');
        handleGameEnd(this.timer, this.scoreTable);
    }

    cross(event) {
        event.preventDefault();
        const result = checkGameEnd();
        if (result) return;

        if (this.checkCLasses("top-cell", "left-cell", "empty", "filled")) return;
        if (this.field.checkCLasses('done')) return;

        this.timerOn = this.timer.getElement().classList.contains('on');

        if (!this.timerOn) {
            this.interval = this.timer.init(0, 0);
            this.timerOn = true;
            this.timer.getElement().classList.add('on');
        }

        const sound = new Audio();

        this.checkCLasses('not') ? sound.remove() : sound.cross();
        this.getElement().classList.toggle('not');
        handleGameEnd(this.timer, this.scoreTable);;
    }
}

