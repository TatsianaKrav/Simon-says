import { ElementCreator } from "../../utilities/elementCreator.js";

export class Round extends ElementCreator {
    constructor() {
        super('div', 'rounds', [], 'Choose round: ');
        this.create();
    }

    create() {
        const selector = new ElementCreator('select', 'rounds');

        for (let i = 0; i < 5; i++) {
            const option = new ElementCreator('option', '', [{ value: i + 1 }], `Round ${i + 1}`);
            if (i === 0) {
                option.setAttributes([{ selected: 'selected' }]);
            }
            selector.append(option);
        }

        this.append(selector.element);
    }
}