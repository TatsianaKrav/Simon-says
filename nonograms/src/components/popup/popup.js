import { ElementCreator } from "../../utils/elementCreator.js";

export class Popup extends ElementCreator {
    constructor(time) {
        super('div', 'popup-wrapper');
        this.time = time;
        this.create();
    }

    create() {
        this.modal = new ElementCreator('div', 'modal');
        const modalInfo = new ElementCreator('div', 'modal-info',
            `Great! You have solved the nonogram in ${this.time} seconds!`
        );

        const closeBtn = new ElementCreator('div', 'close-btn');
        closeBtn.setCallback('click', () => this.removeClasses('open'));

        this.modal.append(modalInfo, closeBtn);
        this.append(this.modal);
        this.appendTo(document.body);
        this.setClasses('open');

        if (this.getElement().parentNode.classList.contains('dark')) {
            this.modal.setClasses('dark');
        }
    }
}