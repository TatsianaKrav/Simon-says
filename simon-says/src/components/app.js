import { Level } from "./level/level.js";
import { ElementCreator } from "../utilities/elementCreator.js";
import { Round } from "./round/round.js";
import { UserInput } from "./input/input.js";
import { VirtKeyboard } from "./keyboard/keyboard.js";

export class App extends ElementCreator {

    constructor() {
        super('div', 'container');
    }

    createView() {
        const gameChoice = new ElementCreator('div', 'game-choice');
        const levels = new Level();
        const rounds = new Round();
        const input = new UserInput();
        gameChoice.append(levels, rounds);

        const keyboard = new VirtKeyboard('easy');
        this.append(gameChoice, input, keyboard);
        this.appendTo(document.body); // insert before script!
    }
}