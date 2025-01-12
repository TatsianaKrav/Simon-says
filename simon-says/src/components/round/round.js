import { ElementCreator } from "../../utilities/elementCreator.js";
import { RoundCounter } from "../counter/roundCounter.js";

export class Round extends ElementCreator {
    constructor() {
        super('div', 'rounds-wrapp', [], 'Choose round: ');
        this.create();
    }

    create() {
        const selector = new ElementCreator('select', 'rounds');

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
            this.configureBtns();
            this.configureInput();
        });
    }

    configureState(val) {
        const currRound = document.querySelector('.current-round');
        const newRound = new RoundCounter(val);
        currRound.replaceWith(newRound.getElement());
    }

    configureBtns() {
        const repeatBtn = document.querySelector('.btn.repeat');
        const nextBtn = document.querySelector('.btn.next');

        if (repeatBtn) {
            repeatBtn.classList.remove('repeat');
            repeatBtn.classList.add('start');
            repeatBtn.innerText = 'Start';
        }

        if (nextBtn) {
            nextBtn.remove();
        }
    }

    configureInput() {
        const input = document.querySelector('input');
        input.value = '';
    }
}