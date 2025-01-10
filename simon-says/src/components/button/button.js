import { ElementCreator } from "../../utilities/elementCreator.js";
import { random } from "../../utilities/randomSequence.js";
import { highlightBtn } from "../../utilities/highlightBtn.js";
import { App } from "../app.js";

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
        const input = document.querySelector('input');
        input.value = '';
        this.setClasses('clicked');
        this.handleSeq(1);
    }

    startGame(e) {
        if (this.element.innerText === 'Repeat the sequence') {
            this.repeatHandler();
            return;
        };

        const level = document.querySelector('select');
        level.setAttribute('disabled', '');
        const levelValue = level.value;
        const roundValue = document.querySelectorAll('select')[1].value;

        this.currentSeq = random(levelValue, roundValue);
        console.log(this.currentSeq);
        localStorage.setItem('currSeq', JSON.stringify(this.currentSeq));

        let count = 1;
        this.handleSeq(count);

        this.element.innerText = 'Repeat the sequence';
        this.element.classList.remove('start');
        this.element.classList.add('repeat');
        this.createNewGameBtn();
    }

    handleSeq(count) {

        this.currentSeq.forEach((el) => {
            Array.from(this.chars).forEach(async char => {
                if (char.innerText == el) {
                    highlightBtn(count, char, this.currentSeq.length);
                    count++;
                    char.classList.remove('highlight');
                }
            })
        })
    }

    createNewGameBtn() {
        const wrap = document.querySelector('.buttons-wrap');
        const newGameBtn = new Button('new Game', 'next');
        wrap.append(newGameBtn.getElement());

        newGameBtn.setCallback('click', this.startNewGame);
    }

    startNewGame() {
        const level = document.querySelector('select');
        const currentLevel = level.value;

        document.body.innerHTML = '';
        const app = new App(currentLevel);
        app.createView();
    }

    /*  createNextBtn() {
         const wrap = document.querySelector('.buttons-wrap');
         const nextBtn = new Button('Next', 'next');
         wrap.append(nextBtn.getElement());
     } */
}




