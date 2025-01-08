import { ElementCreator } from "../../utilities/elementCreator.js";
import { random } from "../../utilities/randomSequence.js";
import { highlightBtn } from "../../utilities/highlightBtn.js";

export class Button extends ElementCreator {

    constructor(btnContent) {
        super('button', 'btn', []);
        this.element.innerText = btnContent;

        if (btnContent === 'Start') {
            this.element.addEventListener('click', this.startGame);
        }
    }

    startGame() {
        const levelValue = document.querySelector('select').value;
        /*   const levelValue = 'Hard'; */
        const roundValue = document.querySelectorAll('select')[1].value;
        /*  const roundValue = 3; */

        const currentSeq = random(levelValue, roundValue);
        const chars = document.getElementsByClassName('char');

        let count = 1;
        currentSeq.forEach((el) => {
            Array.from(chars).forEach(async char => {
                if (char.innerText == el) {
                    highlightBtn(count, char);
                    count++;
                    char.classList.remove('highlight');
                }
            })
        })
    }
}




