import { Level } from "./level/level.js";
import { ElementCreator } from "../utilities/elementCreator.js";
import { Round } from "./round/round.js";
import { UserInput } from "./input/input.js";
import { VirtKeyboard } from "./keyboard/keyboard.js";
import { Button } from "./button/button.js";
import { RoundCounter } from "./counter/roundCounter.js";

export class App extends ElementCreator {

    constructor(value) {
        super('div', 'container');
        this.value = value;
    }

    createView() {
        const gameChoice = new ElementCreator('div', 'game-choice');
        const levels = new Level(this.value);
        const rounds = new Round();
        gameChoice.append(levels, rounds);

        const currentGameInfo = new RoundCounter(this.value, 1);
        const input = new UserInput();
        const keyboard = new VirtKeyboard(this.value);

        const buttons = new ElementCreator('div', 'buttons-wrap');
        const startGameBtn = new Button('Start', 'start');
        buttons.append(startGameBtn);

        this.append(gameChoice, currentGameInfo, input, keyboard, buttons);
        this.appendTo(document.body); // insert before script!
    }
}