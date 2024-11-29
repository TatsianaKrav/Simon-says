import gifts from '../data/gifts.json' with {type: 'json'};
import { handleBurger } from "../utilities/header.js";
import { renderCards } from '../utilities/utilities.js';

const cardsAmount = 4;
const giftCardsWrapp = document.querySelector('.gift-cards-wrapper');


init();

function init() {
    handleBurger();
    renderCards(giftCardsWrapp, gifts, cardsAmount);
}