import { Game } from "./game.js";
import { ElementCreator } from "../../utils/elementCreator.js";

export class Level extends ElementCreator {
    constructor() {
        super('select', 'levels');

        this.create();
        this.setCallback('change', this.change.bind(this));
    }

    create() {
        const options = ['Easy', 'Medium', 'Hard'];

        for (let i = 0; i < options.length; i++) {
            const option = new ElementCreator('option', '', options[i], { value: options[i] });
            this.append(option);
        }
    }

    change() {
        const newGames = new Game(this);
        this.getElement().nextSibling.replaceWith(newGames.getElement());
    }
}