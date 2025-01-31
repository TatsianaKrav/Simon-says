import { ElementCreator } from "../../utils/elementCreator.js";

export class Level extends ElementCreator {
    constructor(levelName, parent, container) {
        super('select', 'levels');
        this.levelName = levelName;
        this.parent = parent;
        this.container = container;

        this.create();
        this.setCallback('change', this.change.bind(this));
    }

    create() {
        const options = ['Easy', 'Medium', 'Hard'];

        for (let i = 0; i < options.length; i++) {
            const option = new ElementCreator('option', '', options[i], { value: options[i] });

            if (options[i] === this.levelName) {
                option.setAttributes({ selected: '' });
            }
            this.append(option);
        }
    }

    restore(savedLevel, gameName, container) {
        this.parent.updateGamesSelect(savedLevel, gameName, container);
    }

    change(gameName) {
        this.parent.updateGamesSelect(this.getValue(), gameName, this.container);
    }

    getValue() {
        return this.getElement().value;
    }

    setValue(value) {
        const options = this.getElement().options;
        const option = Array.from(options).find(el => el.innerText.toLowerCase() === value);
        option.setAttribute('selected', '');
    }
}