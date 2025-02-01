import { ElementCreator } from "../../utils/elementCreator.js";

export class Burger extends ElementCreator {
    constructor() {
        super('div', 'burger');
        this.setCallback('click', this.handle.bind(this));

    }

    handle() {
        console.log(1);
    }
}