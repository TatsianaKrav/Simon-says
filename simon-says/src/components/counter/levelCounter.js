import { ElementCreator } from "../../utilities/elementCreator.js";

export class LevelCounter extends ElementCreator {
    constructor(level) {
        super('div', 'current-level', [], 'Current level: ');
        this.level = level;
        this.create();
    }

    create() {
        const levelValue = new ElementCreator('span', 'level-value', [], this.level);
        this.append(levelValue);
    }
}