import { ElementCreator } from "../../utilities/elementCreator.js";
import { RoundCounter } from "../counter/roundCounter.js";
import { RepeatBtn } from "../button/repeatBtn.js"
import { clearInput } from "../../utilities/clearInput.js"
import { getCurrentSeq } from "../../utilities/randomSequence.js"
import { highlightBtn } from "../../utilities/highlightBtn.js";

export class Round extends ElementCreator {
    constructor() {
        super('div', 'rounds-wrapp', [], 'Choose round: ');
        this.create();
    }

    create() {
        const selector = new ElementCreator('select', 'rounds');

        for (let i = 0; i < 5; i++) {
            const option = new ElementCreator('option', '', [{ value: i + 1 }], `Round ${i + 1}`);
            if (i === 0) {
                option.setAttributes([{ selected: 'selected' }]);
            }
            selector.append(option);
        }

        this.append(selector.element);

        this.setCallback('change', (e) => {
            const val = e.target.value;
            this.configureState(val);
            /*   this.configureBtns(); */
            this.configureInput();
            this.startNextRound();
        });
    }

    configureState(val) {
        const currRound = document.querySelector('.current-round');
        const newRound = new RoundCounter(val);
        currRound.replaceWith(newRound.getElement());
    }

    configureBtns() {
        const repeatBtn = document.querySelector('.btn.repeat');
        const nextBtn = document.querySelector('.btn.next');

        if (repeatBtn) {
            repeatBtn.classList.remove('repeat');
            repeatBtn.classList.add('start');
            repeatBtn.innerText = 'Start';
        }

        if (nextBtn) {
            nextBtn.remove();
        }
    }

    configureInput() {
        const input = document.querySelector('input');
        input.value = '';

        clearInput();
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
    }

}