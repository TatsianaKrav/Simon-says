import { ElementCreator } from "../../utils/elementCreator.js";
import { ContinueBtn } from "../button/continueBtn.js";
import { SaveBtn } from "../button/saveBtn.js";


export class ButtonsWrapper extends ElementCreator {
    level;
    games;

    constructor(levelObj) {
        super('div', 'btns-wrapper');
        this.levelObj = levelObj;
    }

    create(timer, field) {
        const saveBtn = new SaveBtn(timer , this.levelObj);
        const continueBtn = new ContinueBtn(timer, field, this.levelObj);
        this.append(saveBtn, continueBtn);
    }

}