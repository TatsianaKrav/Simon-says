import { ElementCreator } from "../../utils/elementCreator.js";
import { getLevel } from "../././../utils/getLevel.js";
import { FieldWrapper } from "../field-wrapper/field-wrapp.js";


export class Game extends ElementCreator {
    constructor(level) {
        super('select', 'games');
        this.level = level;

        this.create();
        this.setCallback('change', this.change.bind(this));
    }

    create() {
        const currentLevel = this.level.getElement().value;
        const currentGames = getLevel(currentLevel);
        const options = [...currentGames];

        for (let i = 0; i < options.length; i++) {
            const option = new ElementCreator('option', '', options[i].name, { value: options[i].name });
            this.append(option);
        }
    }

    change() {
        const levelVal = document.querySelector('select').value;
        const field = document.getElementsByClassName('field-wrapper')[0];
        const newField = new FieldWrapper(levelVal, this);
        field.replaceWith(newField.getElement());
    }

    getValue() {
        return this.getElement().value
    }
}