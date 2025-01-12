import { cleanInput } from "../../utilities/cleanInput.js";
import { Button } from "./button.js";
import { random } from "../../utilities/randomSequence.js";
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
        const rounds = document.getElementsByClassName('rounds')[0];
        let currentRound = +rounds.value;

        Array.from(rounds.options).forEach(option => {
            option.removeAttribute('selected');

            if (currentRound === (Number(option.value) - 1)) {
                option.setAttribute('selected', '');
            }
        });


        const currRound = document.querySelector('.current-round');
        if (++currentRound === 6) {
            currentRound = 1;
        }
        const newRound = new RoundCounter(currentRound);
        currRound.replaceWith(newRound.getElement());

        //in function
        const level = document.querySelector('select');
        level.setAttribute('disabled', '');
        const levelValue = level.value;
        const roundValue = document.querySelectorAll('select')[1].value;
        const currentSeq = random(levelValue, roundValue);
        this.handleSeq(currentSeq, 1);

        const repeatBtn = new RepeatBtn(); // current round 
        const parent = this.getParent();
        this.removeElement();
        repeatBtn.prepandTo(parent);
    }
}