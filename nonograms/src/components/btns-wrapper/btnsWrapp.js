import { ElementCreator } from "../../utils/elementCreator.js";
import { ContinueBtn } from "../button/continueBtn.js";
import { SaveBtn } from "../button/saveBtn.js";
import { SolutionBtn } from "../button/solutionBtn.js";


export class ButtonsWrapper extends ElementCreator {
    level;
    games;

    constructor(levelObj) {
        super('div', 'btns-wrapper');
        this.levelObj = levelObj;
    }

    create(timer, field, currentGame) {
        const saveBtn = new SaveBtn(timer, this.levelObj);
        const continueBtn = new ContinueBtn(timer, field, this.levelObj);
        const solutionBtn = new SolutionBtn(currentGame, timer);
        this.append(saveBtn, continueBtn, solutionBtn);
    }

}