import { ElementCreator } from "../../utilities/elementCreator.js";
import { NewGameBtn } from "../button/newGameBtn.js";

export class Popup extends ElementCreator {
    constructor(content) {
        super('div', 'popup-wrapper');
        this.content = content;
        this.create();
    }

    create() {
        const modal = new ElementCreator('div', 'modal');

        const modalInfo = new ElementCreator('div', 'modal-info');
        const content = this.content === 'error' ? 'Game over, you loose' : 'Game over, you win';
        modalInfo.setInnerText(content);

        const newGameBtn = new NewGameBtn();
        newGameBtn.enableBtn();

        modal.append(modalInfo, newGameBtn);
        this.append(modal);
    }
}