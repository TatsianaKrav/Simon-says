import { Button } from "./button.js";

export class ResetBtn extends Button {
    constructor(timer) {
        super('Reset game', 'reset-btn');
        this.timer = timer;

        this.setCallback('click', this.reset.bind(this));
    }

    reset() {
        const cells = document.querySelectorAll(
            "td:not(.left-cell):not(.top-cell)"
        );
        Array.from(cells).forEach((cell) => {
            cell.classList.remove("filled");
            cell.classList.remove("not");
        });

        const clues = document.querySelectorAll('.top, .left');
        Array.from(clues).forEach(clue => clue.classList.remove('cross'));

        this.timer.stop();
        this.timer.element.classList.remove('on');
        this.timer.setTime('00:00');


        const field = document.getElementsByClassName('field')[0];
        field.classList.remove('done');
    }
}