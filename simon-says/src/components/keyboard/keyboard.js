import { ElementCreator } from "../../utilities/elementCreator.js";
import { highlightChar } from "../../utilities/highlightBtn.js";
import { easyLevel, mediumLevel, hardLevel } from "../../utilities/keyboardVar.js";
import { Result } from "../../utilities/result.js";

export class VirtKeyboard extends ElementCreator {
    result = new Result;

    constructor(level) {
        super('div', 'keyboard-wrapp');
        this.create(level);
    }

    create(level) {
        const currentLevel = level === 'Easy' ? easyLevel : level === 'Medium' ? mediumLevel : hardLevel;
        /*  const currentLevel = setCurrentKeyboard(level); */

        for (let i = 0; i < currentLevel.length; i++) {
            const char = new ElementCreator('button', 'char', [], currentLevel[i]);
            this.append(char);

            char.setCallback('mousedown', (e) => this.handleChar(e));
        }
    }

    handleChar(e) {

        const startBtn = document.querySelector('.start');
        if (startBtn) return;

        const btn = e.target;
        const val = e.target.innerText;
        const input = document.querySelector('input');


        const result = this.result.checkInput(input.value);
        if (result && result === 'error') {
            return;
        } else if (result && result === 'correct') {
            return;
        }

        input.value += val;


        highlightChar(btn);

        const result2 = this.result.checkInput(input.value);
        const currSeq = JSON.parse(localStorage.getItem('currSeq'));
        console.log(currSeq);
        this.result.showResult(result2, input, currSeq.length);

        this.result.checkResult(result2, currSeq.length);
    }
}