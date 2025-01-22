import { Game } from "../select/game.js";
import { ElementCreator } from "../../utils/elementCreator.js";
import { ContinueBtn } from "../button/continueBtn.js";
import { SaveBtn } from "../button/saveBtn.js";
import { Level } from "../select/level.js";

export class ButtonsWrapper extends ElementCreator {
    level;
    games;

    constructor() {
        super('div', 'btns-wrapper');
    /*     this.timer = timer; */
        this.create();
    }

    create() {
        this.level = new Level();
        this.games = new Game(this.level);
      /*   const saveBtn = new SaveBtn(this.timer); */
        const saveBtn = new SaveBtn();
       /*  const continueBtn = new ContinueBtn(this.timer); */
        const continueBtn = new ContinueBtn();
        this.append(this.level, this.games, saveBtn, continueBtn);
    }

    getSelections() {
        return [this.level, this.games];
    }
}