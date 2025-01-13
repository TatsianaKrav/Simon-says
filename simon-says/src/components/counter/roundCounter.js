import { ElementCreator } from "../../utilities/elementCreator.js";

export class RoundCounter extends ElementCreator {

    constructor(round) {
        super('div', 'current-round', [], 'Current round: ');
        this.round = round;
        this.create();
    }

    create() {
        const roundValue = new ElementCreator('span', 'round-value', [], this.round);
        const span = new ElementCreator('span', '', [], "/5");
        this.append(roundValue, span);
    }
}