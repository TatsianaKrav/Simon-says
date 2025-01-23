import { ElementCreator } from "../../utils/elementCreator.js";
import { Game } from "../select/game.js";
import { Level } from "../select/level.js";

export class SelectsWrapper extends ElementCreator {
    constructor() {
        super('div', 'selects-wrapper');
        this.create();
    }

    create() {
        this.level = new Level();
        this.games = new Game(this.level);

        this.append(this.level, this.games);
    }


    getSelections() {
        return [this.level, this.games];
    }
}