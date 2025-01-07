import { ElementCreator } from "../../utilities/elementCreator.js";

export class UserInput extends ElementCreator {
    constructor() {
        super('div', 'input-wrapper');
        this.create();
    }

    create() {
        const input = new ElementCreator('input');
        input.setAttributes([{ 'readonly': 'true' }]);
        this.append(input);

        /*   input.getElement().value = '1'; */
    }
}