import { ElementCreator } from "../../utilities/elementCreator.js";
import { RoundCounter } from "../counter/roundCounter.js";
import { VirtKeyboard } from "../keyboard/keyboard.js";


export class Level extends ElementCreator {
    constructor() {
        super('div', 'levels', [], 'Choose level: ');
        this.create();
    }

    create() {
        const selector = new ElementCreator('select', '');
        const option1 = new ElementCreator('option', '', [{ value: 'Easy' }, { selected: 'selected' }], 'Easy');
        const option2 = new ElementCreator('option', '', [{ value: 'Medium' }], 'Medium');
        const option3 = new ElementCreator('option', '', [{ value: 'Hard' }], 'Hard');
        selector.append(option1, option2, option3);
        this.append(selector.element);

        this.setCallback('change', (e) => {
            const val = e.target.value;
            this.configureState(val);
            this.configureKeyboard(val);
            this.configureBtns();
        });
    }

    configureKeyboard(val) {
        const wrap = document.querySelector('.keyboard-wrapp');
        const newKeyboard = new VirtKeyboard(val);
        wrap.replaceWith(newKeyboard.getElement());
    }

    configureState(val) {
        const currLevel = document.querySelector('.current-game-info');
        const currRound = document.querySelector('.current-round');
        const newLevel = new RoundCounter(val, parseInt(currRound.innerText.match(/\d+/)));
        currLevel.replaceWith(newLevel.getElement());
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
}

//make baseSelector class