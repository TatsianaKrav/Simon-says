import { ElementCreator } from "../../utils/elementCreator.js";
import { Cell } from "../cell/cell.js";


export class Field extends ElementCreator {
    constructor(games) {
        super('table', 'field');
        this.games = games;
        this.tableId = Math.floor(1 + Math.random() * 5);
        this.currentGame = this.games.find(game => game.id === this.tableId); //random game

        this.create();
    }

    create() {
        const topClues = this.currentGame.topClues;
        const leftClues = this.currentGame.leftClues;

        for (let i = 0; i <= this.games.length; i++) {
            const row = new ElementCreator("tr");

            for (let j = 0; j <= this.games.length; j++) {
                const col = new Cell();

                if (i === 0 && j === 0) {
                    col.setClasses("empty");

                } else if ((i === 0) & (j !== 0)) {
                    col.setClasses("top-cell");

                    for (let k = 0; k < topClues[j - 1].length; k++) {
                        const spanElem = new ElementCreator("span");
                        spanElem.setClasses("top");
                        spanElem.setInnerText(topClues[j - 1][k]);
                        col.append(spanElem);
                    }
                } else if (i !== 0 && j === 0) {
                    col.setClasses("left-cell");
                    for (let k = 0; k < leftClues[i - 1].length; k++) {
                        const spanElem = new ElementCreator("span");
                        spanElem.setClasses("left");
                        spanElem.setInnerText(leftClues[i - 1][k]);
                        col.append(spanElem);
                    }
                } else {
                    col.setClasses("cell");
                }
                row.append(col);
            }
            this.append(row);
        }
    }
}