import { handleBurger } from "../utilities/header.js";

const upBtn = document.querySelector(".up-btn");
let curretWidthScreen = document.documentElement.clientWidth;

init();

function init() {
    handleBurger();

    if (curretWidthScreen <= 768) {
        handleUpBtn();
    } else {
        upBtn.style.opacity = '0';
    }
}


window.addEventListener('resize', function () {
    curretWidthScreen = document.documentElement.clientWidth;

    if (curretWidthScreen <= 768) {
        handleUpBtn();
    } else {
        upBtn.style.opacity = '0';
    }
});

function handleUpBtn() {
    window.addEventListener("scroll", function () {
        const scrollY = window.scrollY || document.documentElement.scrollTop;

        scrollY > 300 && curretWidthScreen <= 768 ? upBtn.style.opacity = '1' : upBtn.style.opacity = '0';
    });
}