import { ElementCreator } from "../../utilities/elementCreator.js";

export class LevelCounter extends ElementCreator {
    constructor(level) {
        super('div', 'current-level', [], 'Current level: ');
        this.level = level;
        this.setInnerText(this.getInnerText() + this.level);
    }
}