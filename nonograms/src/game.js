import { FieldWrapper } from "./components/field-wrapper/field-wrapp.js";
import { ElementCreator } from "./utils/elementCreator.js";
import { ButtonsWrapper } from "./components/btns-wrapper/btnsWrapp.js";
import { SelectsWrapper } from "./components/selectsWrapp/selectsWrapp.js";


export class Game extends ElementCreator {
    fieldWrapper;
    btnsWrapper;

    constructor() {
        super('div', 'container');
    }

    init(level, gameName) {

        const selectsWrapper = new SelectsWrapper(level, gameName);
        const [levelSelect, games] = selectsWrapper.getSelections();

        this.append(selectsWrapper);
        this.prependTo(document.body);
        this.create(levelSelect, games);
    }

    create(levelSelect, games) {
        this.fieldWrapper = new FieldWrapper(levelSelect, games);
        const timer = this.fieldWrapper.getTimer();
        const field = this.fieldWrapper.getField();
        const currentGame = this.fieldWrapper.getCurrentGame();
        this.btnsWrapper = new ButtonsWrapper(field, timer, currentGame);

        this.append(this.fieldWrapper, this.btnsWrapper);
    }

    recreate(level, gameName) {
        const children = this.getChildren();
        Array.from(children).forEach((el, i) => {
            if (i !== 0) {
                el.remove();
            }
        })

        this.create(level, gameName);
    }

}

