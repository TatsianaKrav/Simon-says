export function highlightBtn(i, el) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            el.classList.add('highlight');
            resolve();
            console.log(el.innerText);
        }, 300 * i)
    })


    promise.then(result => {
        setTimeout(() => {
            el.classList.remove('highlight');
        }, 500)
    })
}