import { ElementCreator } from "../../utils/elementCreator.js";

export class Cell extends ElementCreator {
    constructor() {
        super('td');

        this.setCallback('click', this.fill.bind(this));
        this.setCallback('contextmenu', (e) => this.cross(e));
    }

    fill() {
        if (this.checkCLasses("top-cell", "left-cell", "empty")) return;
        this.getElement().classList.toggle('filled');
    }

    cross(event) {
        event.preventDefault();
        if (this.checkCLasses("top-cell", "left-cell", "empty", "filled")) return;
        this.getElement().classList.toggle('not');
    }
}