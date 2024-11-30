import gifts from '../data/gifts.json' with {type: 'json'};
import { handleBurger } from "../utilities/header.js";
import { renderCards, getCurrentTime } from '../utilities/utilities.js';

const cardsAmount = 4;
const giftCardsWrapp = document.querySelector('.gift-cards-wrapper');


init();

function init() {
    handleBurger();
    renderCards(giftCardsWrapp, gifts, cardsAmount);
    initTimer();
}

function initTimer() {
    const daysEl = document.querySelectorAll('.count')[0];
    const hoursEl = document.querySelectorAll('.count')[1];
    const minEl = document.querySelectorAll('.count')[2];
    const secEl = document.querySelectorAll('.count')[3];

    const newYearDate = new Date(Date.UTC(2025, 0, 1, 0, 0, 0, 0));
    let timerID = null;


    getCurrentTime(newYearDate, timerID, daysEl, hoursEl, minEl, secEl);
    timerID = setInterval(getCurrentTime.bind(null, newYearDate, timerID, daysEl, hoursEl, minEl, secEl), 1000);
}