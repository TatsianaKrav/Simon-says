import { ElementCreator } from "../../utils/elementCreator.js";

export class Button extends ElementCreator {
    constructor(content, className) {
        super('button', 'btn');
        this.setInnerText(content);
        this.setClasses(className);
    }
}