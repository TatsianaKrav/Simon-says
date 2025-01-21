import { Game } from "../select/game.js";
import { ElementCreator } from "../../utils/elementCreator.js";
import { ContinueBtn } from "../button/continueBtn.js";
import { SaveBtn } from "../button/saveBtn.js";
import { Level } from "../select/level.js";

export class ButtonsWrapper extends ElementCreator {
    level;

    constructor(timer) {
        super('div', 'btns-wrapper');
        this.timer = timer;
        this.create();
    }

    create() {
        this.level = new Level();
        const games = new Game(this.level);
        const saveBtn = new SaveBtn(this.timer);
        const continueBtn = new ContinueBtn(this.timer);
        this.append(this.level, games, saveBtn, continueBtn);
    }
}