export function createElement(tagName, className = "", text = "") {
    const element = document.createElement(tagName);
    element.className = className;
    element.innerText = text;

    return element;
}

const upBtn = document.querySelector(".up-btn");
upBtn.style.display = 'none';

window.addEventListener("scroll", function () {
    const screenHeight = this.document.documentElement.clientHeight;

    const scrollY = window.scrollY || document.documentElement.scrollTop;
    console.log(scrollY);
    scrollY > 0 ? upBtn.style.display = 'flex' : upBtn.style.display = 'none';
});

/* window.addEventListener('resize', function() {
    const новаяШирина = window.innerWidth;
    const новаяВысота = window.innerHeight;
  }); */