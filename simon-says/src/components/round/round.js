import { RoundCounter } from "../counter/roundCounter.js";
import { RepeatBtn } from "../button/repeatBtn.js"
import { getCurrentSeq } from "../../utilities/randomSequence.js"
import { highlightBtn } from "../../utilities/highlightBtn.js";
import { Selector } from "../selector.js/selector.js";
import { NewGameBtn } from "../button/newGameBtn.js";

export class Round extends Selector {
    constructor() {
        super('rounds');
    }

    setHandler() {
        super.setHandler();

        this.setCallback('change', (e) => {
            const startBtn = document.getElementsByClassName('start')[0];
            if (startBtn) return;
            this.startNextRound();

        });
    }
    configureState(val) {
        const currRound = document.querySelector('.current-round');
        const newRound = new RoundCounter(val);
        currRound.replaceWith(newRound.getElement());
    }

    startNextRound() {
        const currentSeq = getCurrentSeq();
        localStorage.setItem('currSeq', JSON.stringify(currentSeq));
        let count = 1;
        console.log(currentSeq);
        const chars = document.getElementsByClassName('char');

        currentSeq.forEach((el) => {
            Array.from(chars).forEach(async char => {
                if (char.innerText == el) {
                    highlightBtn(count, char, currentSeq.length);
                    count++;
                    char.classList.remove('highlight');
                }
            })
        })

        const repeatBtn = new RepeatBtn();
        const btn = document.getElementsByClassName('btn')[0];
        const parent = document.getElementsByClassName('buttons-wrap')[0];
        btn.remove();
        repeatBtn.prependTo(parent);

        const newGameBtn = document.getElementsByClassName('new-game')[0];
        if (!newGameBtn) {
            const newGameBtn = new NewGameBtn();
            newGameBtn.prependTo(parent);
        }
    }
}