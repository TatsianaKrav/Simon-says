import { ElementCreator } from "../../utils/elementCreator.js";

export class Popup extends ElementCreator {
    constructor(time) {
        super('div', 'popup-wrapper');
        this.time = time;
        this.create();
    }

    create() {
        const modal = new ElementCreator('div', 'modal');
        const modalInfo = new ElementCreator('div', 'modal-info',
            `Great! You have solved the nonogram in ${this.time} seconds!`
        );

        const closeBtn = new ElementCreator('div', 'close-btn');
        closeBtn.setCallback('click', () => this.removeClasses('open'));

        modal.append(modalInfo, closeBtn);
        this.append(modal);
        this.appendTo(document.body);
        this.setClasses('open');
    }
}