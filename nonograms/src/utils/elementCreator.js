export class ElementCreator {
    constructor(tagName, className, content, attributes) {
        this.element = document.createElement(tagName);
        this.setClasses(className);
        this.element.innerText = content;
        this.setAttributes(attributes);
    }

    setClasses(...classes) {
        classes.forEach(name => this.element.classList.add(name));
    }


    removeClasses(...classes) {
        classes.forEach(name => this.element.classList.remove(name));
    }


    setAttributes(attributes) {
        if (!attributes) return;

        attributes.forEach(attr =>
            Object.entries(attr).forEach(([key, value]) => this.element.setAttribute(key, value)));
    }
}