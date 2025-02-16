import { Level } from "./level/level.js";
import { ElementCreator } from "../utilities/elementCreator.js";
import { UserInput } from "./input/input.js";
import { VirtKeyboard } from "./keyboard/keyboard.js";
import { StartBtn } from "./button/startBtn.js";
import { CounterWrapp } from "./counter/counterWrapp.js";


export class App extends ElementCreator {

    constructor() {
        super('div', 'container');
    }

    createView(value) {
        const gameName = new ElementCreator('div', 'game-name', [], 'Simon says');
        const levels = new Level(value);
        const currentGameInfo = new CounterWrapp(value, 1);
        const input = new UserInput();
        const keyboard = new VirtKeyboard(value);

        const buttons = new ElementCreator('div', 'buttons-wrap');
        const startGameBtn = new StartBtn(buttons);
        buttons.append(startGameBtn);

        this.append(gameName, levels, currentGameInfo, input, keyboard, buttons);
        this.prependTo(document.body);
    }
}