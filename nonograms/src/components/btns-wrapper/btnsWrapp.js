import { ElementCreator } from "../../utils/elementCreator.js";
import { ContinueBtn } from "../button/continueBtn.js";
import { SaveBtn } from "../button/saveBtn.js";

export class ButtonsWrapper extends ElementCreator {
    constructor(timer) {
        super('div', 'btns-wrapper');
        this.timer = timer;
        this.create();
    }

    create() {
        const saveBtn = new SaveBtn(this.timer);
        const continueBtn = new ContinueBtn(this.timer);
        this.append(saveBtn, continueBtn);
    }
}