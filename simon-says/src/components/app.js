import { Level } from "./level/level.js";
import { ElementCreator } from "../utilities/elementCreator.js";
import { Round } from "./round/round.js";

export class App extends ElementCreator {

    constructor() {
        super('div', 'container');
        const levels = new Level();
        const rounds = new Round();
        this.append(levels, rounds);
    }

    createView() {
        this.appendTo(document.body);
    }
}