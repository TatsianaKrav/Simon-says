import { ElementCreator } from "../../utils/elementCreator.js";
import { ScoreTable } from "../score-table/scoreTable.js";

export class ScoreTableWrapper extends ElementCreator {
    constructor() {
        super('div', 'score-table-wrapper');

        this.create();
    }

    create() {
        const tableName = new ElementCreator('p', 'table-name', 'High score table');
        this.table = new ScoreTable();

        this.append(tableName, this.table);
    }

    getScoreTable() {
        return this.table;
    }
}