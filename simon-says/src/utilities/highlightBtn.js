export function highlightBtn(i, el, dur = 1) {
    const btns = document.querySelectorAll('button');
    const selector = document.querySelectorAll('select')[1];
    Array.from(btns).forEach(btn => btn.disabled = 'true');
    selector.setAttribute('disabled', '');

    let promise = new Promise((resolve, reject) => {
        document.addEventListener('keydown', (e) => {
            e.preventDefault();
            return;
        });

        setTimeout(() => {
            el.classList.add('highlight');
            resolve();
        }, 300 * i)
    })


    promise.then(result => {
        setTimeout(() => {
            el.classList.remove('highlight');
        }, 500);
    })

    promise.then(result => {
        setTimeout(() => {
            const btns = document.querySelectorAll('button');
            Array.from(btns).forEach(btn => {
                if (!btn.classList.contains('clicked')) {
                    btn.removeAttribute('disabled')
                }
            });
            selector.removeAttribute('disabled');
        }, 300 * dur);
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