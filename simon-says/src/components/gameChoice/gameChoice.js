import { ElementCreator } from "../../utilities/elementCreator.js";
import { Level } from "../level/level.js";
import { Round } from "../round/round.js";

export class GameChoice extends ElementCreator {
    constructor(levelValue) {
        super('div', 'game-choice');
        this.levelValue = levelValue;
        this.appendChildren();
    }

    appendChildren() {
        this.appendLevels();
        this.appendRounds();
    }

    appendLevels() {
        const levels = new ElementCreator('div', 'levels-wrapp', [], 'Choose level: ');
        const levelSelector = new Level();
        levelSelector.create(['Easy', 'Medium', 'Hard'], this.levelValue);
        levels.append(levelSelector);
        this.append(levels);
    }

    appendRounds() {
        const rounds = new ElementCreator('div', 'rounds-wrapp', [], 'Choose round: ');
        const roundSelector = new Round();
        roundSelector.create([1, 2, 3, 4, 5], 1);
        rounds.append(roundSelector);
        this.append(rounds);
    }
}