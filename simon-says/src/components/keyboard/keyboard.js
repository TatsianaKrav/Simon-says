import { ElementCreator } from "../../utilities/elementCreator.js";
import { highlightChar } from "../../utilities/highlightBtn.js";
import { easyLevel, mediumLevel, hardLevel } from "../../utilities/keyboardVar.js";

export class VirtKeyboard extends ElementCreator {
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

            char.setCallback('click', (e) => this.handleChar(e));
        }
    }

    handleChar(e) {
        const startBtn = document.querySelector('.start');
        if (startBtn) return;

        const btn = e.target;
        const val = e.target.innerText;
        const input = document.querySelector('input');
        input.value += val;

        highlightChar(btn);
    }
}