import { cleanInput } from "../../utilities/cleanInput.js";
import { Button } from "./button.js";
import { getCurrentSeq } from "../../utilities/randomSequence.js";
import { RoundCounter } from "../counter/roundCounter.js";
import { RepeatBtn } from "./repeatBtn.js";

export class NextBtn extends Button {
    constructor() {
        super('Next', 'next');
        this.handleNext();
    }

    handleNext() {
        this.setCallback('click', () => {
            this.startGame();
        })
    }


    startGame() {
        cleanInput();

        //update round in select
        const rounds = document.getElementsByClassName('rounds')[0];
        let currentRound = +rounds.value;

        Array.from(rounds.options).forEach(option => {
            option.removeAttribute('selected');

            if (currentRound === (Number(option.value) - 1)) {
                option.setAttribute('selected', '');
            }
        });

        //update current round
        const currRound = document.querySelector('.current-round');
        if (++currentRound === 6) {
            currentRound = 1;
        }
        const newRound = new RoundCounter(currentRound);
        currRound.replaceWith(newRound.getElement());

        const currentSeq = getCurrentSeq();
        localStorage.setItem('currSeq', JSON.stringify(currentSeq));
        this.handleSeq(currentSeq);

        const repeatBtn = new RepeatBtn();
        const parent = this.getParent();
        this.removeElement();
        repeatBtn.prepandTo(parent);
    }
}