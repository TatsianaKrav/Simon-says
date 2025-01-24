import { Game } from "../../game.js";
import { ElementCreator } from "../../utils/elementCreator.js";
import { getLevel } from "../../utils/getLevel.js";
import { ButtonsWrapper } from "../btns-wrapper/btnsWrapp.js";
import { FieldWrapper } from "../field-wrapper/field-wrapp.js";




export class Nonogram extends ElementCreator {
    constructor(level, gameName) {
        super('select', 'games');
        this.level = level;
        this.gameName = gameName;

        this.create();
        this.setCallback('change', this.change.bind(this));
    }

    create() {
        const currentLevel = this.level.getElement().value;
        const currentGames = getLevel(currentLevel);
        const options = [...currentGames];

        for (let i = 0; i < options.length; i++) {
            const option = new ElementCreator('option', '', options[i].name, { value: options[i].name });
            if (options[i].name === this.gameName) {
                option.setAttributes({ 'selected': '' });
            }
            this.append(option);
        }
    }

    change() {

        const levelVal = this.level.getValue();
        document.body.innerHTML = '';
        const newGame = new Game();
        newGame.init(levelVal, this.getValue());

        /* const levelVal = document.querySelector('select').value;
        const field = document.getElementsByClassName('field-wrapper')[0];
        const newFieldWrapp = new FieldWrapper(levelVal, this);
        field.replaceWith(newFieldWrapp.getElement());

        const newField = newFieldWrapp.getField();
        const timer = newFieldWrapp.getTimer();
        const btnsWrapper = new ButtonsWrapper(newField, timer);
        newFieldWrapp.getElement().nextSibling.replaceWith(btnsWrapper.getElement()); */
    }

    getValue() {
        return this.getElement().value
    }

    setValue(value) {
        const options = this.getElement().options;
        const option = Array.from(options).find(el => el.innerText === value);
        option.setAttribute('selected', '');
    }
}