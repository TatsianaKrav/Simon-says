import { Button } from "./button.js";
import { App } from "../app.js";

export class NewGameBtn extends Button {
    constructor() {
        super('New Game', 'new-game');
        this.setAttributes([{ 'disabled': '' }]);
        this.newGameHandler();
    }

    newGameHandler() {
        this.element.addEventListener('click', () => this.startNewGame());
    }

    startNewGame() {
        const level = document.querySelector('select');
        const currentLevel = level.value;
        const parent = this.getParent().parentNode;

        if (parent) {
            parent.classList.remove('open');
            document.body.style.overflowY = 'auto';
        }

        const children = document.body.children;
        Array.from(children).forEach(child => child.remove());

        const app = new App();
        app.createView(currentLevel);
    }
}