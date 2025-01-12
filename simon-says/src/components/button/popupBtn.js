import { NewGameBtn } from "./newGameBtn.js";

export class PopupBtn extends NewGameBtn {
    constructor() {
        super();
        this.newGameHandler();
    }

    startNewGame() {
        super.startNewGame();
        const parent = this.getParent();
        parent.classList.remove('open');
    }
}