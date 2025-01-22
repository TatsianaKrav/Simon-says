import { FieldWrapper } from "./components/field-wrapper/field-wrapp.js";
import { ElementCreator } from "./utils/elementCreator.js";
import { easy } from "./data.js";
import { ButtonsWrapper } from "./components/btns-wrapper/btnsWrapp.js";

export class Game extends ElementCreator {
    constructor() {
        super('div', 'container');
    }

    init() {
        /*   const field = new FieldWrapper(easy); */
        /*  const btnsWrapper = new ButtonsWrapper(timer); //timer? */
        const btnsWrapper = new ButtonsWrapper();
        const [level, games] = btnsWrapper.getSelections();
        const field = new FieldWrapper(level, games);
        /* const timer = field.getTimer(); */

        this.append(btnsWrapper, field);
        this.prependTo(document.body);
    }

}

