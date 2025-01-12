import { ElementCreator } from "../../utilities/elementCreator.js";
import { LevelCounter } from "../counter/levelCounter.js";
import { VirtKeyboard } from "../keyboard/keyboard.js";


export class Level extends ElementCreator {
    constructor(value) {
        super('div', 'levels-wrapp', [], 'Choose level: ');
        this.value = value;
        this.create();
    }

    create() {
        const selector = new ElementCreator('select', 'levels');
        const levelOptions = ['Easy', 'Medium', 'Hard'];


        for (let i = 0; i < 3; i++) {
            const option = new ElementCreator('option', '', [{ value: levelOptions[i] }], levelOptions[i]);

            if (levelOptions[i] === this.value) {
                option.setAttributes([{ selected: 'selected' }]);
            }
            selector.append(option);
        }

        this.append(selector.element);

        this.setCallback('change', (e) => {
            const val = e.target.value;
            this.configureState(val);
            this.configureKeyboard(val);
           /*  this.configureBtns(); */
            this.configureInput();
        });
    }

    configureKeyboard(val) {
        const wrap = document.querySelector('.keyboard-wrapp');
        const newKeyboard = new VirtKeyboard(val);
        wrap.replaceWith(newKeyboard.getElement());
    }

    configureState(val) {
        const currLevel = document.querySelector('.current-level');
        const newLevel = new LevelCounter(val);
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

    configureInput() {
        const input = document.querySelector('input');
        input.value = '';
    }
}

//make baseSelector class