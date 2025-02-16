import { ElementCreator } from "../../utilities/elementCreator.js";
import { random } from "../../utilities/randomSequence.js";
import { highlightBtn } from "../../utilities/highlightBtn.js";

export class Button extends ElementCreator {

    highlighted = false;

    constructor(btnContent, className) {
        super('button', 'btn', []);
        this.element.innerText = btnContent;
        this.element.classList.add(className);
    }

    startHandler() {
        this.element.addEventListener('click', () => {
            const level = document.querySelector('select');
            level.setAttribute('disabled', '');
            const levelValue = level.value;
            const round = document.getElementsByClassName('current-round')[0];
            const roundValue = parseInt(round.innerText.match(/\d+/));
            const currentSeq = random(levelValue, roundValue);

            this.startGame(currentSeq);
        });
    }

    startGame(currentSeq) {
        localStorage.setItem('currSeq', JSON.stringify(currentSeq));
        this.handleSeq(currentSeq);
    }

    handleSeq(currentSeq) {
        let count = 1;
        console.log(`Current sequence: ${currentSeq}`);
        const chars = document.getElementsByClassName('char');

        currentSeq.forEach((el) => {
            Array.from(chars).forEach(char => {
                if (char.innerText == el) {
                    highlightBtn(count, char, currentSeq.length);
                    count++;
                    char.classList.remove('highlight');
                }
            })
        })
    }

    enableBtn() {
        this.removeAttributes('disabled');
    }
}




