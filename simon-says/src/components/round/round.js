import { ElementCreator } from "../../utilities/elementCreator.js";
import { RoundCounter } from "../counter/roundCounter.js";

export class Round extends ElementCreator {
    constructor() {
        super('div', 'rounds', [], 'Choose round: ');
        this.create();
    }

    create() {
        const selector = new ElementCreator('select', '');

        for (let i = 0; i < 5; i++) {
            const option = new ElementCreator('option', '', [{ value: i + 1 }], `Round ${i + 1}`);
            if (i === 0) {
                option.setAttributes([{ selected: 'selected' }]);
            }
            selector.append(option);
        }

        this.append(selector.element);

        this.setCallback('change', (e) => {
            const val = e.target.value;
            this.configureState(val);
        });
    }

    configureState(val) {
        const currRound = document.querySelector('.current-game-info');
        const currLevel = document.querySelector('.current-level');
        const arr = ['Easy', 'Medium', 'Hard'];
        const reg = new RegExp(arr.join('|'), 'i');
        const levelVal = currLevel.innerText.match(reg);
        const newRound = new RoundCounter(levelVal, val);
        currRound.replaceWith(newRound.getElement());
    }
}