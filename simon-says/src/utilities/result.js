import { NextBtn } from "../components/button/nextBtn.js";
import { Popup } from "../components/popup/popup.js";

export class Result {
    checkInput(string) {
        let arr = string.split('');
        arr = arr.map(el => {
            if (!isNaN(parseInt(el))) {
                return +el;
            };

            return el;
        });

        const currSeq = JSON.parse(localStorage.getItem('currSeq'));

        if (arr.length === currSeq.length) {
            const result = JSON.stringify(arr) === JSON.stringify(currSeq) ? 'correct' : 'error';
            return result;
        }

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== currSeq[i]) {
                return 'error';
            }
        }
    }

    checkResult(ans, dur) {
        const repeatBtn = document.querySelector('.btn.repeat');
        const btnWrap = document.querySelector('.buttons-wrap');
        const round = document.getElementsByClassName('current-round')[0];
        const roundValue = parseInt(round.innerText.match(/\d+/));

        if (ans === 'correct') {
            if (roundValue == 5) {

                setTimeout(() => {
                    repeatBtn.setAttribute('disabled', '');
                    this.endGame();
                    return;
                }, 100 * dur)
            } else {
                setTimeout(() => {
                    repeatBtn.remove();
                    const nextBtn = new NextBtn();
                    nextBtn.prependTo(btnWrap);
                }, 100 * dur);
            }

        } else if (ans === 'error') {
            if (repeatBtn.classList.contains('clicked')) {
                this.endGame(ans);
                repeatBtn.setAttribute('disabled', '');
            }
        }
    }

    showResult(result, input, count) {
        const inp = input instanceof HTMLElement ? input : input.getElement();

        setTimeout(() => {
            if (result === 'error') {
                inp.value = "It's wrong";
                inp.classList.toggle('wrong');
            } else if (result === 'correct') {
                inp.value = "It's correct";
                inp.classList.toggle('correct');
            }
        }, 100 * count);
    }

    endGame(result) {
        const popup = new Popup(result);

        setTimeout(() => {
            popup.setClasses('open');
            document.body.style.overflowY = 'hidden';
        }, 500);

        popup.appendTo(document.body);
    }
}