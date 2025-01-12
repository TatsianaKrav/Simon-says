import { clearInput } from "../../utilities/clearInput.js";
import { ElementCreator } from "../../utilities/elementCreator.js";
import { LevelCounter } from "../counter/levelCounter.js";

export class Selector extends ElementCreator {
    constructor(className) {
        super('select');
        this.setClasses(className);
    }

    create(options, value) {
        for (let i = 0; i < options.length; i++) {
            const option = new ElementCreator('option', '', [{ value: options[i] }], options[i]);
            if (options[i] === value) {
                option.setAttributes([{ selected: 'selected' }]);
            }
            this.append(option);
        }

        this.setHandler();
    }

    setHandler() {
        this.setCallback('change', (e) => {
            const val = e.target.value;
            clearInput();
            this.configureState(val);
        });
    }

    configureState(val) {
        const currLevel = document.querySelector('.current-level');
        const newLevel = new LevelCounter(val);
        currLevel.replaceWith(newLevel.getElement());
    }
}

