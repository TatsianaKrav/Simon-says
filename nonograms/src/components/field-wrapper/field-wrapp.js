import { ElementCreator } from "../../utils/elementCreator.js";
import { getLevel } from "../../utils/getLevel.js";
import { ResetBtn } from "../button/resetBtn.js";
import { Timer } from "../timer/timer.js";
import { Field } from "../field/field.js";

export class FieldWrapper extends ElementCreator {
    timer;

    constructor(levelObj, gameObj = [], scoreTable, gameName) {
        super('div', 'field-wrapper');

        this.levelObj = levelObj;
        this.gameObj = gameObj;
        this.scoreTable = scoreTable;
        this.gameName = gameName;

        this.create();
    }


    create() {

        this.currentGames = this.levelObj instanceof ElementCreator ? [...getLevel(this.levelObj.getValue())]
            : [...getLevel(this.levelObj)];

        this.currentGame = this.currentGames.find(game => game.name === this.gameObj.getValue());
        localStorage.setItem('currGame', JSON.stringify(this.currentGame));

        const gameName = new ElementCreator('div', 'game-name', this.currentGame.name);
        this.timer = new Timer();
        this.field = new Field(this.currentGame, this.timer, this.scoreTable);

        const resetBtn = new ResetBtn();
        this.append(gameName, this.timer, this.field, resetBtn);

        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            Array.from(this.getChildren()).forEach(el => el.classList.add('dark'));
        }
    }

    getTimer() {
        return this.timer;
    }

    getField() {
        return this.field;
    }

    getCurrentGame() {
        return this.currentGame;
    }
}