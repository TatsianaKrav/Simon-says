import { Button } from "./button.js";
import { App } from "../app.js";

export class StartBtn extends Button {
    constructor(parent) {
        super('Start', 'start');
        this.parent = parent;
        this.startHandler();
    }

    startHandler() {
        super.startHandler();
        this.setCallback('click', this.createNewGameBtn.bind(this, this.parent));
    }

    createNewGameBtn(parent) {
        const newGameBtn = new Button('New Game', 'new-game');
        parent.append(newGameBtn);

        newGameBtn.setCallback('click', this.startNewGame);
    }

    startNewGame() {
        const level = document.querySelector('select');
        const currentLevel = level.value;

        document.body.innerHTML = '';
        const app = new App(currentLevel);
        app.createView();
    }
}