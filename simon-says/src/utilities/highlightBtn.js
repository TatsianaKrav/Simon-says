export function highlightBtn(i, el, dur = 1) {
    const btns = document.querySelectorAll('button');
    const selectors = document.querySelectorAll('select');
    Array.from(btns).forEach(btn => btn.disabled = 'true');
    Array.from(selectors).forEach(select => select.disabled = 'true');
    /*   Array.from(btns).forEach(btn => btn.addEventListener('click', (e) => disable.bind(null, e))); */


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
        }, 500);
    })

    promise.then(result => {
        setTimeout(() => {
            Array.from(btns).forEach(btn => btn.removeAttribute('disabled'));
            Array.from(selectors).forEach(select => select.removeAttribute('disabled'));
        }, 300 * dur);
    })

    /*  promise.then(result => {
         let promise2 = new Promise((resolve, reject) => {
             setTimeout(() => {
                 el.classList.remove('highlight');
                 resolve();
             }, 500);
         })
 
         promise2.then(setTimeout(() => {
             Array.from(btns).forEach(btn => btn.removeAttribute('disabled'));
         }, 600))
     }) */
}

/* function disable(event) {
    event.preventDefault();
} */

export function highlightChar(btn) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            btn.classList.add('clicked');
            resolve();
        }, 100);
    })

    promise.then(setTimeout(() => { btn.classList.remove('clicked') }, 400));
}