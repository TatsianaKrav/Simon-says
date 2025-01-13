export function highlightBtn(i, el, dur = 1) {

    const selector = document.getElementsByClassName('levels')[0];
    selector.setAttribute('imit', 'active');

    const btns = document.querySelectorAll('button');
    Array.from(btns).forEach(btn => btn.disabled = 'true');

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            el.classList.add('highlight');
            resolve();
        }, 500 * i)
    })


    promise.then(result => {
        setTimeout(() => {
            el.classList.remove('highlight');
        }, 800);
    })

    promise.then(result => {
        setTimeout(() => {
            const btns = document.querySelectorAll('button');
            Array.from(btns).forEach(btn => {
                if (!btn.classList.contains('clicked')) {
                    btn.removeAttribute('disabled')
                }
            });
            selector.removeAttribute('imit');
        }, 500 * dur);
    })
}

export function highlightChar(btn) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            btn.classList.add('clicked');
            resolve();
        }, 100);
    })

    promise.then(setTimeout(() => { btn.classList.remove('clicked') }, 400));
}