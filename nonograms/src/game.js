import { FieldWrapper } from "./components/field-wrapper/field-wrapp.js";
import { ElementCreator } from "./utils/elementCreator.js";
import { ButtonsWrapper } from "./components/btns-wrapper/btnsWrapp.js";
import { SelectsWrapper } from "./components/selectsWrapp/selectsWrapp.js";


export class Game extends ElementCreator {
    constructor() {
        super('div', 'container');
    }

    init() {

        const selectsWrapper = new SelectsWrapper();
        const [level, games] = selectsWrapper.getSelections();
        const fieldWrapper = new FieldWrapper(level, games);
        const timer = fieldWrapper.getTimer();
        const field = fieldWrapper.getField();
        const currentGame = fieldWrapper.getCurrentGame();
        const btnsWrapper = new ButtonsWrapper(field, timer, currentGame);


        this.append(selectsWrapper, fieldWrapper, btnsWrapper);
        this.prependTo(document.body);
    }

}

