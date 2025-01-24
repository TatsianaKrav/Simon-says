import { ElementCreator } from "../../utils/elementCreator.js";
import { getLevel } from "../../utils/getLevel.js";
import { ResetBtn } from "../button/resetBtn.js";
import { Timer } from "../button/timer.js";
import { Field } from "../field/field.js";

export class FieldWrapper extends ElementCreator {
    timer;

    constructor(level, games = []) {
        super('div', 'field-wrapper');

        this.level = level;
        this.games = games;

        this.create();
    }


    create() {

        this.currentGames = this.level instanceof ElementCreator ? [...getLevel(this.level.getValue())]
            : [...getLevel(this.level)];

        this.currentGame = this.currentGames.find(game => game.name === this.games.getValue());
        localStorage.setItem('currGame', JSON.stringify(this.currentGame));

        const gameName = new ElementCreator('div', 'game-name', this.currentGame.name);
        this.timer = new Timer();
        this.field = new Field(this.currentGame, this.timer);

        const resetBtn = new ResetBtn();
        this.append(gameName, this.timer, this.field, resetBtn);
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