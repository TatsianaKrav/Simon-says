import { ElementCreator } from "../../utilities/elementCreator.js";

export class RoundCounter extends ElementCreator {
    constructor(level, round) {
        super('div', 'current-game-info');
        this.create(level, round);
    }

    create(level, round) {
        const currentLevel = new ElementCreator('div', 'current-level', [], `Current level: ${level}`);
        const currentRound = new ElementCreator('div', 'current-round', [], `Current round: ${round}`);
        this.append(currentLevel, currentRound);
    }
}