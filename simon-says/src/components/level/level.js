import { ElementCreator } from "../../utilities/elementCreator.js";
import { VirtKeyboard } from "../keyboard/keyboard.js";
import { clearInput } from "../../utilities/clearInput.js";
import { LevelCounter } from "../counter/levelCounter.js";


export class Level extends ElementCreator {
    constructor(value) {
        super('div', 'levels-wrapp', [], 'Choose level: ');
        this.value = value;
        this.create();
    }

    create() {
        const levelSelector = new ElementCreator('select', 'levels');
        const options = ['Easy', 'Medium', 'Hard'];

        for (let i = 0; i < options.length; i++) {
            const option = new ElementCreator('option', '', [{ value: options[i] }], options[i]);
            if (options[i] === this.value) {
                option.setAttributes([{ selected: 'selected' }]);
            }
            levelSelector.append(option);

            levelSelector.setCallback('change', (e) => {
                const val = e.target.value;
                clearInput();
                this.configureState(val);
                this.configureKeyboard(val);
            });
        }

        this.append(levelSelector);
    }


    configureState(val) {
        const currLevel = document.querySelector('.current-level');
        const newLevel = new LevelCounter(val);
        currLevel.replaceWith(newLevel.getElement());
    }

    configureKeyboard(val) {
        const wrap = document.querySelector('.keyboard-wrapp');
        const newKeyboard = new VirtKeyboard(val);
        wrap.replaceWith(newKeyboard.getElement());
    }
}

