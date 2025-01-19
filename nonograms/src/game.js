import { FieldWrapper } from "./components/field-wrapper.js/field-wrapp.js";
import { ElementCreator } from "./utils/elementCreator.js";
import { easy } from "./data.js";

export class Game extends ElementCreator {
    constructor() {
        super('div', 'container');
    }

    init() {
        const field = new FieldWrapper(easy);

        this.append(field);
        this.prependTo(document.body);
    }
}

