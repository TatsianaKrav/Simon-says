import { VirtKeyboard } from "../keyboard/keyboard.js";
import { Selector } from "../selector.js/selector.js";


export class Level extends Selector {
    constructor() {
        super('levels');
    }

    setHandler() {
        super.setHandler();
        this.setCallback('change', (e) => {
            const val = e.target.value;
            this.configureKeyboard(val);
        });
    }

    configureKeyboard(val) {
        const wrap = document.querySelector('.keyboard-wrapp');
        const newKeyboard = new VirtKeyboard(val);
        wrap.replaceWith(newKeyboard.getElement());
    }
}

