import { clearInput } from "../../utilities/clearInput.js";
import { Button } from "./button.js";

export class RepeatBtn extends Button {
    constructor() {
        super('Repeat the sequence', 'repeat');
        this.setAttributes([{ 'disabled': '' }]);
        this.repeatHandler();
    }

    repeatHandler() {
        this.element.addEventListener('click', () => this.startGame());
    }

    startGame() {
        clearInput();
        this.setClasses('clicked');

        const currentSeq = JSON.parse(localStorage.getItem('currSeq'));
        this.handleSeq(currentSeq);
    }
}