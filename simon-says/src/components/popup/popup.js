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

        const modalInfo = new ElementCreator('div', 'modal-info', [], 'Game over, ');

        const content = this.content === 'error' ? 'you loose' : 'you win';
        const modalContent = new ElementCreator('span', 'modal-content', [], content);
        content === 'you loose' ? modalContent.setClasses('wrong') : modalContent.setClasses('correct');

        modalInfo.append(modalContent);

        const newGameBtn = new NewGameBtn();
        newGameBtn.enableBtn();

        modal.append(modalInfo, newGameBtn);
        this.append(modal);
    }
}