import { ElementCreator } from "../../utilities/elementCreator.js";
import { random } from "../../utilities/randomSequence.js";
import { highlightBtn } from "../../utilities/highlightBtn.js";

export class Button extends ElementCreator {

    currentSeq;
    chars = document.getElementsByClassName('char');

    constructor(btnContent, className) {
        super('button', 'btn', []);
        this.element.innerText = btnContent;
        this.element.classList.add(className);
        this.startHandler();

    }

    startHandler() {
        if (this.element.innerText === 'Start') {
            this.element.addEventListener('click', (e) => this.startGame(e));
        }
    }

    repeatHandler() {
        this.handleSeq(1);
    }

    startGame(e) {
        if (this.element.innerText === 'Repeat the sequence') {
            this.repeatHandler();
            return;
        };

        const levelValue = document.querySelector('select').value;
        const roundValue = document.querySelectorAll('select')[1].value;

        this.currentSeq = random(levelValue, roundValue);

        let count = 1;
        this.handleSeq(count);

        this.element.innerText = 'Repeat the sequence';
        this.element.classList.remove('start');
        this.element.classList.add('repeat');
        this.createNextBtn();
    }

    handleSeq(count) {
        this.currentSeq.forEach((el) => {
            Array.from(this.chars).forEach(async char => {
                if (char.innerText == el) {
                    highlightBtn(count, char);
                    count++;
                    char.classList.remove('highlight');
                }
            })
        })
    }

    createNextBtn() {
        const wrap = document.querySelector('.buttons-wrap');
        const nextBtn = new Button('Next', 'next');
        wrap.append(nextBtn.getElement());
    }
}




