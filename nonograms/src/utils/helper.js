import { easy, hard, medium } from "../data.js";


export class Helper {


    constructor(gameName) {
        this.gameName = gameName;
    }

    getGameInfo() {
        const allGames = easy.concat(medium).concat(hard);
        const game = allGames.find(el => el.name === this.gameName);
      /*   this.selLevelValue(game.level);
        this.setGamesValue(game.name);
 */
    }

    selLevelValue(value) {
        const level = document.querySelector('select');
        const options = level.options;
        const option = Array.from(options).find(el => el.innerText === value);
        option.setAttribute('selected', '');

        //change options values
    }

    setGamesValue(value) {
        const games = document.querySelectorAll('select')[1];
        const options = games.options;
        const option = Array.from(options).find(el => el.innerText === value);
        option.setAttribute('selected', '');
    }
}