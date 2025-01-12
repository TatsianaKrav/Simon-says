import { cleanInput } from "../../utilities/cleanInput.js";
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
        cleanInput();
        this.setClasses('clicked');

        const currentSeq = JSON.parse(localStorage.getItem('currSeq'));
        this.handleSeq(currentSeq, 1);
    }
}