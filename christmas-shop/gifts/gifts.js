import gifts from '../data/gifts.json' with {type: 'json'};
import { handleBurger } from "../utilities/header.js";
import { renderCards } from "../utilities/utilities.js";

let curretWidthScreen = document.documentElement.clientWidth;

const upBtn = document.querySelector(".up-btn");
const giftCardsWrapp = document.querySelector('.gift-cards-wrapper');

init();

function init() {
    handleBurger();
    renderCards(giftCardsWrapp, gifts);

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