import { Button } from "../button/button.js";

export class SolutionBtn extends Button {
    constructor(currentGame, timer) {
        super('Solution', 'solution-btn');
        this.currentGame = currentGame;
        this.timer = timer;

        this.setCallback('click', this.show.bind(this));
    }

    show() {
        const gameAnswers = String(this.currentGame.image.flat()).split(",").join("");

        const cells = document.querySelectorAll(
            "td:not(.left-cell):not(.top-cell):not(.empty)"
        );

        for (let i = 0; i < cells.length; i++) {
            if (gameAnswers[i] === "0" && cells[i].getAttribute("filled")) {
                cells[i].classList.remove("filled");
                cells[i].removeAttribute("filled");
            }

            if (gameAnswers[i] === "1" && cells[i].getAttribute("filled") === null) {
                cells[i].classList.add("filled");
                cells[i].setAttribute("filled", "true");
            }

            if (cells[i].getAttribute("not") === "x") {
                cells[i].classList.remove("not");
            }
        }

        clearInterval(this.timer);
    }
}