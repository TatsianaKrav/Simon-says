import { cleanInput } from "../../utilities/cleanInput.js";
import { Button } from "./button.js";
import { random } from "../../utilities/randomSequence.js";

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


        //current

        //in function
        const level = document.querySelector('select');
        level.setAttribute('disabled', '');
        const levelValue = level.value;
        const roundValue = document.querySelectorAll('select')[1].value;
        const currentSeq = random(levelValue, roundValue);
        this.handleSeq(currentSeq, 1);
    }
}