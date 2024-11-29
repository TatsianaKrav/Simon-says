export function createElement(tagName, className = "", text = "") {
    const element = document.createElement(tagName);
    element.className = className;
    element.innerText = text;

    return element;
}

const upBtn = document.querySelector(".up-btn");
if (upBtn) upBtn.style.display = 'none';


export function navigate(links) {
    links.forEach(link => {
        link.addEventListener('click', (e) => goTo(e, link));
    })
}


function goTo(e, link) {
    e.preventDefault();
    setTimeout(() => {
        window.location = link.href;
    }, 600);
}

/* window.addEventListener("scroll", function () {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    if (!upBtn) return;

    scrollY > 0 ? upBtn.style.display = 'flex' : upBtn.style.display = 'none';
}); */

/* window.addEventListener('resize', function() {
    const новаяШирина = window.innerWidth;
    const новаяВысота = window.innerHeight;
  }); */


console.log('Для корректной проверки на экране < 1440px в DevTools выберите Мобильный режим - 1440 - Mobile(no touch) (В ТЗ:Please note that when checking the work in a window with a width of 1440 pixels, the layout may compress by approximately 17 pixels. This happens because part of the layout space is consumed by the vertical scroll (17 pixels - the standard scroll size for Google Chrome)) P.S В режиме Mobile(no touch) hover будет срабатывать. Для проверки отсутствия hover на моб устройствах нужно выбирать режим Mobile.')