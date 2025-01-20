import { calculateClues } from "../../utils/calculateClues.js";
import { ElementCreator } from "../../utils/elementCreator.js";
import { Cell } from "../cell/cell.js";



export class Field extends ElementCreator {
    constructor(game, timer) {
        super('table', 'field');
        this.currentGame = game;
        this.timer = timer;

        this.create();
    }

    create() {
        const topClues = this.currentGame.topClues;
        const leftClues = this.currentGame.leftClues;
        const [topCluesMaxCount, leftCluesMaxCount] = calculateClues(this.currentGame);

        for (let i = 0; i <= this.currentGame.image.length; i++) {
            const row = new ElementCreator("tr");

            for (let j = 0; j <= this.currentGame.image.length; j++) {
                const col = new Cell(this.timer);

                if (i === 0 && j === 0) {
                    col.setClasses("empty");

                } else if ((i === 0) & (j !== 0)) {
                    col.setClasses("top-cell");

                    for (let l = 0; l < topCluesMaxCount; l++) {
                        const divElem = new ElementCreator("div", "top");
                        divElem.insAfter(col);

                        if (topClues[j - 1][l]) {
                            divElem.setInnerText(topClues[j - 1][l]);
                        }
                    }
                } else if (i !== 0 && j === 0) {
                    col.setClasses("left-cell");

                    for (let l = 0; l < leftCluesMaxCount; l++) {
                        const divElem = new ElementCreator("div", "left");
                        divElem.insAfter(col);

                        if (leftClues[i - 1][l]) {
                            divElem.setInnerText(leftClues[i - 1][l]);
                        }
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