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

//class Result - check result -> disable input -> show message