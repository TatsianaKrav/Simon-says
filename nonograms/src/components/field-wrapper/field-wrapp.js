import { ElementCreator } from "../../utils/elementCreator.js";
import { ResetBtn } from "../button/resetBtn.js";
import { Timer } from "../button/timer.js";
import { Field } from "../field/field.js";

export class FieldWrapper extends ElementCreator {
    timer;

    constructor(games) {
        super('div', 'field-wrapper');
        this.games = games;
        this.tableId = Math.floor(1 + Math.random() * 5);
        this.currentGame = this.games.find(game => game.id === this.tableId); //random game
        localStorage.setItem('currGame', JSON.stringify(this.currentGame));

        this.create();
    }

    create() {
        const gameName = new ElementCreator('div', 'game-name', this.currentGame.name);
        this.timer = new Timer();
        const field = new Field(this.currentGame, this.timer);

        const resetBtn = new ResetBtn();
        this.append(gameName, this.timer, field, resetBtn);
    }

    getTimer() {
        return this.timer;
    }
}