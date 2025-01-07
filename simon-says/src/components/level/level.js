import { ElementCreator } from "../../utilities/elementCreator.js";


export class Level extends ElementCreator {
    constructor() {
        super('div', 'levels');
        this.create();
    }

    create() {
        const selector = new ElementCreator('select', 'levels');
        const option1 = new ElementCreator('option', '', [{ value: 'Easy' }, { selected: 'selected' }], 'Easy');
        const option2 = new ElementCreator('option', '', [{ value: 'Medium' }], 'Medium');
        const option3 = new ElementCreator('option', '', [{ value: 'Hard' }], 'Hard');
        selector.append(option1, option2, option3);
        this.append(selector.element);
    }
}