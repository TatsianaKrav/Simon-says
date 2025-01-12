import { ElementCreator } from "../../utilities/elementCreator.js";
import { random } from "../../utilities/randomSequence.js";
import { highlightBtn } from "../../utilities/highlightBtn.js";

export class Button extends ElementCreator {

    /*   currentSeq; */
    chars = document.getElementsByClassName('char');

    constructor(btnContent, className) {
        super('button', 'btn', []);
        this.element.innerText = btnContent;
        this.element.classList.add(className);
    }

    startHandler() {
        /*         this.element.addEventListener('click', () => this.startGame()); */
        this.element.addEventListener('click', () => {
            const level = document.querySelector('select');
            level.setAttribute('disabled', '');
            const levelValue = level.value;
            const roundValue = document.querySelectorAll('select')[1].value;
            const currentSeq = random(levelValue, roundValue);

            this.startGame(currentSeq);
        });
    }

    /*  repeatHandler() {
         const input = document.querySelector('input');
         input.value = '';
         input.classList.remove('wrong');
         input.classList.remove('correct');
         this.setClasses('clicked');
         this.handleSeq(1);
     } */

    startGame(currentSeq) {
        /*  if (this.element.innerText === 'Repeat the sequence') {
             this.repeatHandler();
             return;
         }; */

        /* const level = document.querySelector('select');
        level.setAttribute('disabled', '');
        const levelValue = level.value;
        const roundValue = document.querySelectorAll('select')[1].value;

        this.currentSeq = random(levelValue, roundValue); */
        console.log(currentSeq);
        localStorage.setItem('currSeq', JSON.stringify(currentSeq));

        let count = 1;
        this.handleSeq(currentSeq, count);

        /*   this.element.innerText = 'Repeat the sequence';
          this.element.classList.remove('start');
          this.element.classList.add('repeat'); */
        /*  this.createNewGameBtn(); */
    }

    handleSeq(currentSeq, count) {

        currentSeq.forEach((el) => {
            Array.from(this.chars).forEach(async char => {
                if (char.innerText == el) {
                    highlightBtn(count, char, currentSeq.length);
                    count++;
                    char.classList.remove('highlight');
                }
            })
        })
    }

    /* createNewGameBtn() {
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
    } */
}




