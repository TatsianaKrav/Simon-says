export function checkInput(string) {
    let arr = string.split('');
    arr = arr.map(el => +el);
    const currSeq = JSON.parse(localStorage.getItem('currSeq'));


    if (arr.length === currSeq.length) {
        const result = JSON.stringify(arr) === JSON.stringify(currSeq) ? 'correct' : 'error';
        return result;
    }


    for (let i = 0; i < arr.length; i++) {
        if (+arr[i] !== currSeq[i]) {
            return 'error';
        }
    }

}

//class Result - check result -> disable input -> show message