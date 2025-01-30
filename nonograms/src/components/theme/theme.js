import { ElementCreator } from "../../utils/elementCreator.js"


export class Theme extends ElementCreator {
    constructor() {
        super('div', 'theme');
        this.create();
    }

    create() {
        const currentTheme = localStorage.getItem('theme');

        const themeNames = new ElementCreator('div', 'theme-names');
        const lightTheme = new ElementCreator('span', 'light-name', 'Light theme');
        const darkTheme = new ElementCreator('span', 'dark-name', 'Dark theme');
        themeNames.append(lightTheme, darkTheme);

        const wrapper = new ElementCreator('div', 'choice-wrapper');
        const label = new ElementCreator('label', 'theme-label', '', { 'for': 'checkbox' });
        this.input = new ElementCreator('input', '', '', { 'type': 'checkbox' })
        this.input.setAttributes({ 'id': 'checkbox' });
        const span = new ElementCreator('span', 'span-inner');
        label.append(this.input, span);

        if (currentTheme) this.input.setAttributes({ 'checked': '' });


        this.input.setCallback('change', this.change.bind(this));

        wrapper.append(label);
        this.append(themeNames, wrapper);

    }

    change() {
        const elemsToChangeColor = document.querySelectorAll(
            "body, .score, td, select, .btn, .game-name, .timer, .table-name, .field, .modal"
        );

        if (this.input.getElement().checked) {
            elemsToChangeColor.forEach((elem) => {
                elem.classList.add("dark");
            });
        } else {
            elemsToChangeColor.forEach((elem) => {
                elem.classList.remove("dark");
            });
        }

        localStorage.setItem('theme', this.input.getElement());

    }

}