import { ElementCreator } from "./utils/elementCreator.js";
import { Field } from "./components/field/field.js";
import { easy } from "./data.js";

export class Game extends ElementCreator {
    constructor() {
        super('div', 'container');
    }

    init() {
        const field = new Field(easy);
        field.appendTo(document.body);
    }
}

