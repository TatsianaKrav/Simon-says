import { ElementCreator } from "../../utilities/elementCreator.js";
import { easyLevel, hardLevel, mediumLevel } from "../../utilities/keyboardVar.js";

export class UserInput extends ElementCreator {
    currentKeyboard;

    constructor() {
        super('div', 'input-wrapper');
        this.create();
    }

    create() {
        const input = new ElementCreator('input');
        input.setAttributes([{ 'readonly': 'true' }]);
        this.append(input);

        this.keyboardHandler(input);
    }

    //disable до старта и во время имитации
    //подсвечивать
    //добавить вирт клав

    keyboardHandler(input) {
        document.addEventListener('keydown', (e) => {
            const currentLevel = document.querySelector('select').value;
            if (currentLevel === 'Easy') {
                this.currentKeyboard = [...easyLevel];
            } else if (currentLevel === 'Medium') {
                this.currentKeyboard = [...mediumLevel];
            } else if (currentLevel === 'Hard') {
                this.currentKeyboard = [...hardLevel];
            }

            let val = e.key;
            val = isNaN(parseInt(val)) ? val.toUpperCase() : +val;

            if (!this.currentKeyboard.includes(val)) return;
            input.getElement().value += e.key;
        })
    }
}