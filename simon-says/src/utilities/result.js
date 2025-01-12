import { NextBtn } from "../components/button/nextBtn.js";
import { Popup } from "../components/popup/popup.js";

export function checkInput(string) {
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


export function checkResult(ans, dur) {
    const repeatBtn = document.querySelector('.btn.repeat');
    const btnWrap = document.querySelector('.buttons-wrap');
    const currentRound = document.querySelectorAll('select')[1];

    if (ans === 'correct') {
        if (currentRound.value == 5) {

            setTimeout(() => {
                /*  console.log('game over'); */
                repeatBtn.setAttribute('disabled', '');
                endGame();
                return;
            }, 300 * dur)
        } else {
            setTimeout(() => {
                repeatBtn.parentElement.removeChild(repeatBtn);
                const nextBtn = new NextBtn();
                nextBtn.prependTo(btnWrap);
            }, 300 * dur);
        }

    } else if (ans === 'error') {
        if (repeatBtn.classList.contains('clicked')) {
            /* console.log('game over'); */
            endGame(ans);
            repeatBtn.setAttribute('disabled', '');
        }
    }
}


export function showResult(result, input, count) {
    const inp = input instanceof HTMLElement ? input : input.getElement();

    setTimeout(() => {
        if (result === 'error') {
            inp.value = "It's wrong";
            inp.classList.toggle('wrong');
        } else if (result === 'correct') {
            inp.value = "It's correct";
            inp.classList.toggle('correct');
        }
    }, 300 * count);
}

function endGame(result) {
    const popup = new Popup(result);

    setTimeout(() => {
        popup.setClasses('open');
    }, 500);

    popup.appendTo(document.body);
}

