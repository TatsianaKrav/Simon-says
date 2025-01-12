import { ElementCreator } from "../../utilities/elementCreator.js";
import { highlightChar } from "../../utilities/highlightBtn.js";
import { easyLevel, hardLevel, mediumLevel } from "../../utilities/keyboardVar.js";
import { Result } from "../../utilities/result.js";

export class UserInput extends ElementCreator {
    currentKeyboard;
    result = new Result();

    constructor() {
        super('div', 'input-wrapper');
        this.create();
    }

    create() {
        const input = new ElementCreator('input');
        input.setAttributes([{ 'readonly': '' }]);
        this.append(input);

        this.keyboardHandler(input);
    }

    keyboardHandler(input) {
        document.addEventListener('keydown', (e) => {
            const startBtn = document.querySelector('.start');
            if (startBtn) return;

            const result = this.result.checkInput(input.getElement().value);
            if (result && result === 'error') {
                return;
            } else if (result && result === 'correct') {
                return;
            }

            const levelSelector = document.querySelectorAll('select')[1];
            if (levelSelector.disabled) return;

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
            input.getElement().value += val;

            const chars = document.querySelectorAll('.char');
            const btn = Array.from(chars).find(char => char.innerText === val);

            Array.from(chars).forEach(char => {
                if (char.innerText == val) {
                    highlightChar(char);
                }
            });

            const result2 = this.result.checkInput(input.getElement().value);
            const currSeq = JSON.parse(localStorage.getItem('currSeq'));
            this.result.showResult(result2, input, currSeq.length);

            this.result.checkResult(result2, currSeq.length);
        })
    }
}