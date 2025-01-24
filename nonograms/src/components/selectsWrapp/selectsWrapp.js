import { ElementCreator } from "../../utils/elementCreator.js";
import {  Nonogram } from "../select/nonogram.js";
import { Level } from "../select/level.js";

export class SelectsWrapper extends ElementCreator {
    constructor(level, gameName) {
        super('div', 'selects-wrapper');
        this.level = level;
        this.gameName = gameName;

        this.create();
    }

    create() {
        this.levelSelect = new Level(this.level);
        this.games = new Nonogram(this.levelSelect, this.gameName);

        this.append(this.levelSelect, this.games);
    }


    getSelections() {
        return [this.levelSelect, this.games];
    }
}