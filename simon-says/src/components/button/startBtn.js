import { Button } from "./button.js";
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
        this.setCallback('click', (() => {
            this.createRepeatBtn();
            this.createNewGameBtn();
        }));
    }

    createRepeatBtn() {
        const repeatBtn = new RepeatBtn();
        this.removeElement();
        this.parent.append(repeatBtn);
    }


    createNewGameBtn() {
        const newGameBtn = new NewGameBtn();
        this.parent.append(newGameBtn);
    }
}