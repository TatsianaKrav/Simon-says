import { ElementCreator } from "../../utilities/elementCreator.js";
import { easyLevel, mediumLevel, hardLevel } from '../../utilities/keyboardVar.js';

export class VirtKeyboard extends ElementCreator {
    easyLevel = easyLevel;
    mediumLevel = mediumLevel;
    hardLevel = hardLevel;

    constructor(level) {
        super('div', 'keyboard-wrapp');
        this.create(level);
    }

    create(level) {
        const currentLevel = level === 'Easy' ? this.easyLevel : level === 'Medium' ?
            this.mediumLevel : this.hardLevel;


        for (let i = 0; i < currentLevel.length; i++) {
            const char = new ElementCreator('button', 'char', [], currentLevel[i]);
            this.append(char);
        }
    }
}