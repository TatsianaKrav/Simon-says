import { ElementCreator } from "../../utils/elementCreator.js";
import { checkGameEnd } from "../../utils/checkGameEnd.js";

export class Cell extends ElementCreator {
    constructor() {
        super('td');

        this.setCallback('click', this.fill.bind(this));
        this.setCallback('contextmenu', (e) => this.cross(e));
    }

    fill() {
        if (this.checkCLasses("top-cell", "left-cell", "empty")) return;

        if (this.checkCLasses('not')) {
            this.getElement().classList.toggle('not');
        }
        this.getElement().classList.toggle('filled');
        checkGameEnd();
    }

    cross(event) {
        event.preventDefault();
        if (this.checkCLasses("top-cell", "left-cell", "empty", "filled")) return;
        this.getElement().classList.toggle('not');
        checkGameEnd();
    }
}