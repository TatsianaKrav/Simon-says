import { ElementCreator } from "../../utilities/elementCreator.js";
import { highlightChar } from "../../utilities/highlightBtn.js";
import { easyLevel, hardLevel, mediumLevel } from "../../utilities/keyboardVar.js";
import { Result } from "../../utilities/result.js";

export class UserInput extends ElementCreator {
    currentKeyboard;
    result = new Result();
    pressedBtns = [];
    val;

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

                /*  const levelSelector = document.querySelectorAll('select')[1];
                 if (levelSelector.disabled) return; */

                const selector = document.getElementsByClassName('levels')[0];
                if (selector.getAttribute('imit')) return;

                const currentLevel = document.querySelector('select').value;
                if (currentLevel === 'Easy') {
                    this.currentKeyboard = [...easyLevel];
                } else if (currentLevel === 'Medium') {
                    this.currentKeyboard = [...mediumLevel];
                } else if (currentLevel === 'Hard') {
                    this.currentKeyboard = [...hardLevel];
                }

                this.val = e.key;
                this.val = isNaN(parseInt(this.val)) ? this.val.toUpperCase() : +this.val;
                this.pressedBtns.push(this.val);
                if (!this.currentKeyboard.includes(this.val)) return;

                input.getElement().value += this.val;

                Array.from(chars).forEach(char => {
                    if (char.innerText == this.val) {
                        highlightChar(char);
                    }
                });

                const result2 = this.result.checkInput(input.getElement().value);
                const currSeq = JSON.parse(localStorage.getItem('currSeq'));
                this.result.showResult(result2, input, currSeq.length);

                this.result.checkResult(result2, currSeq.length);
            }
        })

        document.addEventListener('keyup', (e) => {
            setTimeout(() => {
                flag = false;
            }, 100)
        })
    }
}