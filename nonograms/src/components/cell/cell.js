import { ElementCreator } from "../../utils/elementCreator.js";
import { checkGameEnd } from "../../utils/checkGameEnd.js";

export class Cell extends ElementCreator {
    timerOn = false;
    interval;

    constructor(timer) {
        super('td');
        this.timer = timer;

        this.setCallback('click', this.fill.bind(this));
        this.setCallback('contextmenu', (e) => this.cross(e));
    }

    fill() {
        if (this.checkCLasses("top-cell", "left-cell", "empty")) return;

        this.timerOn = this.timer.getElement().classList.contains('on');

        if (!this.timerOn) {
            this.interval = this.timer.init()
            this.timerOn = true;
            this.timer.getElement().classList.add('on');
        }

        if (this.checkCLasses('not')) {
            this.getElement().classList.toggle('not');
        }
        this.getElement().classList.toggle('filled');
        checkGameEnd(this.timer);
    }

    cross(event) {
        event.preventDefault();
        if (this.checkCLasses("top-cell", "left-cell", "empty", "filled")) return;
        this.getElement().classList.toggle('not');
        checkGameEnd(this.timer);
    }
}