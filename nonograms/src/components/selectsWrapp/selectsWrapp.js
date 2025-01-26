import { ElementCreator } from "../../utils/elementCreator.js";
import { Nonogram } from "../select/nonogram.js";
import { Level } from "../select/level.js";

export class SelectsWrapper extends ElementCreator {
    constructor(levelName, gameName) {
        super('div', 'selects-wrapper');
        this.levelName = levelName;
        this.gameName = gameName;

        this.create();
    }

    create() {
        this.levelObj = new Level(this.levelName, this);
        this.games = new Nonogram(this.levelName, this.gameName);

        this.append(this.levelObj, this.games);
    }

    updateGamesSelect(levelName, gameName) {
        Array.from(this.getChildren())[1].remove();
        this.games = new Nonogram(levelName, gameName);
        this.games.change();
        this.append(this.games);
    }

    getSelections() {
        return [this.levelObj, this.games];
    }
}