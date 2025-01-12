import { clearInput } from "../../utilities/clearInput.js";
import { ElementCreator } from "../../utilities/elementCreator.js";

export class Selector extends ElementCreator {
    constructor(className) {
        super('select');
        this.setClasses(className);
        this.create();
    }

    create(options, value) { //['Easy', 'Medium', 'Hard']; [1, 2, 3, 4, 5];
        for (let i = 0; i < options.length; i++) {
            const option = new ElementCreator('option', '', [{ value: options[i] }], options[i]);
            if (options[i] === value) {
                option.setAttributes([{ selected: 'selected' }]);
            }
            this.append(option);
        }

        this.setHandler();

        return this;
    }

    setHandler() {
        this.setCallback('change', (e) => {
            this.configureInput();
        });
    }

    configureInput() {
      /*   const input = document.querySelector('input');
        input.value = ''; */
        clearInput();
    }

}

//  const val = e.target.value;
// configureState(val);
// this.configureKeyboard(val); for level
// imitation for round