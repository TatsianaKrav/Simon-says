import { ElementCreator } from "../../utils/elementCreator.js";
import { Nonogram } from "../select/nonogram.js";
import { Level } from "../select/level.js";

export class SelectsWrapper extends ElementCreator {
    constructor(levelName, gameName, container) {
        super('div', 'selects-wrapper');
        this.levelName = levelName;
        this.gameName = gameName;
        this.container = container;
        this.currentTheme = localStorage.getItem('theme');

        this.create();
    }

    create() {

        this.levelObj = new Level(this.levelName, this, this.container);
        this.games = new Nonogram(this.levelName, this.gameName, this.container);

        this.append(this.levelObj, this.games);

        if (this.currentTheme) {
            Array.from(this.getChildren()).forEach(select => select.classList.add('dark'));
        }
    }

    updateGamesSelect(levelName, gameName, container) {
        Array.from(this.getChildren())[1].remove();
        this.games = new Nonogram(levelName, gameName, container);
        this.games.change();
        this.append(this.games);
    }

    getSelections() {
        return [this.levelObj, this.games];
    }
}