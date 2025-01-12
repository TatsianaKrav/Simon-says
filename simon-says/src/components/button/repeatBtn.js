import { Button } from "./button.js";

export class RepeatBtn extends Button {
    constructor() {
        super('Repeat the sequence', 'repeat')
        this.repeatHandler();
    }

    repeatHandler() {
        this.element.addEventListener('click', () => this.startGame());
    }

    startGame() {
        const input = document.querySelector('input');
        input.value = '';
        input.classList.remove('wrong');
        input.classList.remove('correct');
        this.setClasses('clicked');

        const currentSeq = JSON.parse(localStorage.getItem('currSeq'));
        this.handleSeq(currentSeq, 1);
    }
}