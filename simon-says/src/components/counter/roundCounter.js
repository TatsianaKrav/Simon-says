import { ElementCreator } from "../../utilities/elementCreator.js";

export class RoundCounter extends ElementCreator {

    constructor(round) {
        super('div', 'current-round', [], 'Current round: ');
        this.round = round;
        this.setInnerText(this.getInnerText() + this.round + "/5");
    }
}