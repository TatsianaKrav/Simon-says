import { ElementCreator } from "../../utils/elementCreator.js";
import { getLevel } from "../././../utils/getLevel.js";

export class Game extends ElementCreator {
    constructor(level) {
        super('select', 'games');
        this.level = level;

        this.create();
    }

    create() {
        const currentLevel = this.level.getElement().value;
        const currentGames = getLevel(currentLevel);
        const options = [...currentGames];

        for (let i = 0; i < options.length; i++) {
            const option = new ElementCreator('option', '', options[i].name, { value: options[i].name });
            this.append(option);
        }
    }
}