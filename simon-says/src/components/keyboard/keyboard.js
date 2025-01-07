import { ElementCreator } from "../../utilities/elementCreator.js";

export class VirtKeyboard extends ElementCreator {
    easyLevel = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    mediumLevel =
        ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
            'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    hardLevel = this.easyLevel.concat(this.mediumLevel);

    constructor(level) {
        super('div', 'keyboard-wrapp');
        this.create(level);
    }

    create(level) {
        const currentLevel = level === 'easy' ? this.easyLevel : level === 'medium' ?
            this.mediumLevel : this.hardLevel;


        for (let i = 0; i < currentLevel.length; i++) {
            const char = new ElementCreator('button', 'char', [], currentLevel[i]);
            this.append(char);
        }
    }
}