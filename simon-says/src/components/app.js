import { Level } from "./level/level.js";
import { ElementCreator } from "../utilities/elementCreator.js";

export class App extends ElementCreator {

    constructor() {
        super('div', 'container');
        const levels = new Level();
        this.append(levels);
    }

    createView() {
        this.appendTo(document.body);
    }
}