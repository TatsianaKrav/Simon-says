import { FieldWrapper } from "./components/field-wrapper/field-wrapp.js";
import { ElementCreator } from "./utils/elementCreator.js";
import { easy } from "./data.js";
import { ButtonsWrapper } from "./components/btns-wrapper/btnsWrapp.js";

export class Game extends ElementCreator {
    constructor() {
        super('div', 'container');
    }

    init() {
        const field = new FieldWrapper(easy);
        const timer = field.getTimer();
        const btnsWrapper = new ButtonsWrapper(timer);

        this.append(field, btnsWrapper);
        this.prependTo(document.body);
    }

}

