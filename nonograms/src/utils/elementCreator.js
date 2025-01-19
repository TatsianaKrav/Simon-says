export class ElementCreator {
    constructor(tagName, className, content = '', attributes) {
        this.element = document.createElement(tagName);

        if (className) {
            this.setClasses(className);
        }

        this.element.innerText = content;
        this.setAttributes(attributes);
    }

    setClasses(...classes) {
        classes.forEach(name => this.element.classList.add(name));
    }


    removeClasses(...classes) {
        if (!classes) return;
        classes.forEach(name => this.element.classList.remove(name));
    }


    setAttributes(attributes) {
        if (!attributes) return;

        attributes.forEach(attr =>
            Object.entries(attr).forEach(([key, value]) => this.element.setAttribute(key, value)));
    }

    setInnerText(text) {
        this.element.innerText = text;
    }

    append(...children) {
        children.forEach(child => {
            if (child instanceof HTMLElement) {
                this.element.append(child);
            } else if (child instanceof ElementCreator) {
                this.element.append(child.element);
            }
        })
    }

    appendTo(parent) {
        if (parent instanceof HTMLElement || parent instanceof ElementCreator) {
            parent.append(this.element);
        } else {
            throw new Error('parent not instanceof HTMLElement or ElementCreator');
        }
    }

    getFirstChild() {
        return this.element.firstChid;
    }

    insAfter(parent) {
        if (parent instanceof HTMLElement) {
            parent.insertBefore(this.element, parent.firstChild);
        } else if (parent instanceof ElementCreator) {
            parent.element.insertBefore(this.element, parent.element.children[0]);
        }
    }

    setCallback(event, cb) {
        this.element.addEventListener(event, cb);
    }

    getElement() {
        return this.element;
    }

    checkCLasses(...classes) {
        return classes.some(className => this.element.classList.contains(className));
    }
}