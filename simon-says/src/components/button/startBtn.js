import { Button } from "./button.js";
import { App } from "../app.js";
import { RepeatBtn } from "./repeatBtn.js";
import { NewGameBtn } from "./newGameBtn.js";

export class StartBtn extends Button {
    constructor(parent) {
        super('Start', 'start');
        this.parent = parent;
        this.startHandler();
    }

    startHandler() {
        super.startHandler();
        /*        this.setCallback('click', this.createNewGameBtn.bind(this, this.parent)); */
        this.setCallback('click', (() => {
            this.createRepeatBtn(this.parent);
            this.createNewGameBtn(this.parent);
        }));
    }

    createRepeatBtn(parent) {
        const repeatBtn = new RepeatBtn();
        this.removeElement();
        parent.append(repeatBtn);
    }


    createNewGameBtn(parent) {
        /*   const newGameBtn = new Button('New Game', 'new-game'); */
        const newGameBtn = new NewGameBtn();
        parent.append(newGameBtn);

        /* newGameBtn.setCallback('click', this.startNewGame); */
    }

  /*   startNewGame() {
        const level = document.querySelector('select');
        const currentLevel = level.value;

        document.body.innerHTML = '';  
        const app = new App(currentLevel);
        app.createView();
    } */
}