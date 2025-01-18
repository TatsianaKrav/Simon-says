import { ElementCreator } from "../../utils/elementCreator.js";

export class Clue extends ElementCreator {
    constructor(className) {
        super('div');
        this.setClasses(className);
    }
}