import { Button } from "./button.js";

export class NextBtn extends Button {
    constructor() {
        super('Next', 'next');
        this.setAttributes([{ 'disabled': '' }]);
        this.handleNext();
    }

    handleNext() {
        this.setCallback('click', () => {
            this.startGame();
        })
    }
}