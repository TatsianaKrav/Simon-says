import { ElementCreator } from "../../utilities/elementCreator.js";
import { highlightChar } from "../../utilities/highlightBtn.js";
import { Result } from "../../utilities/result.js";
import { setCurrentKeyboard } from "../../utilities/setCurrentKeyboard.js";

export class UserInput extends ElementCreator {
    currentKeyboard;
    result = new Result();
    val;
    prevVal;

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
        let flag = false;

        document.addEventListener('keydown', (e) => {

            if (!flag) {
                const selector = document.getElementsByClassName('levels')[0];
                if (selector.getAttribute('imit')) return;

                flag = true;

                const chars = document.querySelectorAll('.char');
                const startBtn = document.querySelector('.start');
                if (startBtn) return;

                const result = this.result.checkInput(input.getElement().value);
                if (result && result === 'error') {
                    return;
                } else if (result && result === 'correct') {
                    return;
                }


                const currentLevel = document.querySelector('select').value;
                this.currentKeyboard = setCurrentKeyboard(currentLevel);

                this.val = e.key;
                this.val = isNaN(parseInt(this.val)) ? this.val.toUpperCase() : +this.val;
                if (!this.currentKeyboard.includes(this.val)) return;
                if (this.currentKeyboard.includes(this.val)) {
                    selector.setAttribute('pressed', 'true');
                }

                input.getElement().value += this.val;

                Array.from(chars).forEach(char => {
                    if (char.innerText == this.val) {
                        highlightChar(char);
                    }
                });

                const result2 = this.result.checkInput(input.getElement().value);
                const inputValue = [...input.getElement().value]
                this.result.showResult(result2, input, inputValue.length);
                this.result.checkResult(result2, inputValue.length);
                this.prevVal = this.val;
            }
        })

        document.addEventListener('keyup', (e) => {
            const selector = document.getElementsByClassName('levels')[0];
            if (selector.getAttribute('imit')) return;

            let currKey = e.key;
            currKey = isNaN(parseInt(currKey)) ? currKey.toUpperCase() : +currKey;

            if (!this.currentKeyboard || !this.currentKeyboard.includes(currKey)) flag = false;
            if (currKey !== this.prevVal) return;

            this.prevVal = currKey;

            setTimeout(() => {
                flag = false;
                selector.removeAttribute('pressed');
            }, 100)
        })
    }
}