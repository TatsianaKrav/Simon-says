import { ElementCreator } from "../../utilities/elementCreator.js";
import { LevelCounter } from "./levelCounter.js";
import { RoundCounter } from "./roundCounter.js";

export class CounterWrapp extends ElementCreator {
    constructor(level, round) {
        super('div', 'current-game-info');
        this.level = level;
        this.round = round;
        this.appendChildren();
    }

    appendChildren() {
        this.appendLevel();
        this.appendRound();
    }

    appendLevel() {
        const level = new LevelCounter(this.level);
        this.append(level);
    }

    appendRound() {
        const round = new RoundCounter(this.round);
        this.append(round);
    }
}