import { Button } from "./button.js";

export class ResetBtn extends Button {
    constructor() {
        super('Reset game', 'reset-btn');

        this.setCallback('click', this.reset);
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
    }
}