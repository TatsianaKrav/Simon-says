import { ElementCreator } from "../../utils/elementCreator.js";
import { Field } from "../field/field.js";

export class FieldWrapper extends ElementCreator {
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
        const field = new Field(this.currentGame);
        this.append(gameName, field);
    }
}