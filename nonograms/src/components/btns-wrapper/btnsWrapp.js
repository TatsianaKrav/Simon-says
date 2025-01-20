import { ElementCreator } from "../../utils/elementCreator.js";
import { SaveBtn } from "../button/saveBtn.js";

export class ButtonsWrapper extends ElementCreator {
    constructor(timer) {
        super('div', 'btns-wrapper');
        this.timer = timer;
        this.create();
    }

    create() {
        const saveBtn = new SaveBtn(this.timer);
        this.append(saveBtn);
    }
}