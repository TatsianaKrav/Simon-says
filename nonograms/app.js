import { Game } from "./src/game.js";

const game = new Game();
localStorage.removeItem('theme');
game.init('Easy');