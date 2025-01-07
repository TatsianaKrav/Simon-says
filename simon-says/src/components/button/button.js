import { ElementCreator } from "../../utilities/elementCreator.js";

export class Button extends ElementCreator {
    constructor(btnContent) {
        super('button', 'btn', []);
        this.element.innerText = btnContent;
    }
}