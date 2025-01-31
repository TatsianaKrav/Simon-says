import { Game } from "../../game.js";
import { ElementCreator } from "../../utils/elementCreator.js";
import { getLevel } from "../../utils/getLevel.js";


export class Nonogram extends ElementCreator {
    constructor(levelName, gameName, container) {
        super('select', 'games');
        this.levelName = levelName;
        this.gameName = gameName;
        this.container = container;

        this.create();
        this.setCallback('change', this.change.bind(this));
    }

    create() {
        const currentGames = getLevel(this.levelName);
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
        /*   document.body.innerHTML = ''; */
        /*  const newGame = new Game();
         newGame.init(this.levelName, this.getValue()); */
        this.container.recreate(this.levelName, this.getValue());
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