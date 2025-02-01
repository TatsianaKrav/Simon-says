import { ElementCreator } from "../../utils/elementCreator.js";
import { findNextGame } from "../../utils/findGame.js";

export class Popup extends ElementCreator {
    constructor(time, container, gameName) {
        super('div', 'popup-wrapper');
        this.time = time;
        this.container = container;
        this.gameName = gameName;

        this.create();
    }

    create() {
        this.modal = new ElementCreator('div', 'modal');
        const modalInfo = new ElementCreator('div', 'modal-info',
            `Great! You have solved the nonogram in ${this.time} seconds!`
        );

        const closeBtn = new ElementCreator('div', 'close-btn');
        /* closeBtn.setCallback('click', () => this.removeClasses('open')); */
        closeBtn.setCallback('click', this.close.bind(this));

        this.modal.append(modalInfo, closeBtn);
        this.append(this.modal);
        this.appendTo(document.body);
        this.setClasses('open');

        if (this.getElement().parentNode.classList.contains('dark')) {
            this.modal.setClasses('dark');
        }
    }

    close() {
        this.removeClasses('open');

        const nextGame = findNextGame(this.gameName);
        this.container.recreate(nextGame.level, nextGame.name);
    }
}