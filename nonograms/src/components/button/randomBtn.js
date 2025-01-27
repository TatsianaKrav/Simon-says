import { Button } from "./button.js";
import { easy, medium, hard } from "../../data.js";
import { Game } from "../../game.js";


export class RandomGameBtn extends Button {
    constructor() {
        super('Random game', 'random-btn');

        this.setCallback('click', this.create.bind(this));
    }

    create() {
        const allGames = easy.concat(medium).concat(hard);

        let random = Math.floor(Math.random() * allGames.length);
        let randomGame = allGames[random];

        document.body.innerHTML = '';
        const newGame = new Game();
        newGame.init(randomGame.level, randomGame.name);

    }
}