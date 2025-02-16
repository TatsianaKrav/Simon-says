export class ElementCreator {

  constructor(tagName, className, attributes, innerText = '') {

    this.element = document.createElement(tagName);
    this.setClasses(className);
    this.setAttributes(attributes);
    this.element.innerText = innerText;
  }

  setClasses(className) {
    if (Array.isArray(className)) {
      className.forEach(name => this.element.classList.add(name));
    } else if (className) {
      this.element.classList.add(className)
    }

    return;
  }

  removeClasses(...className) {
    className.forEach(name => this.element.classList.remove(name));
  }

  setAttributes(attributes) {
    if (!attributes) return;
    attributes.forEach(attr =>
      Object.entries(attr).forEach(([key, value]) => this.element.setAttribute(key, value)));
  }

  removeAttributes(...attributes) {
    if (!attributes) return;
    attributes.forEach(attr => this.element.removeAttribute(attr));
  }

  append(...children) {
    children.forEach((child) => {
      if (child instanceof HTMLElement) {
        this.element.append(child);
      } else if (child instanceof ElementCreator) {
        this.element.append(child.element);
      }
    });
  }

  appendTo(parent) {
    if (parent instanceof HTMLElement || parent instanceof ElementCreator) {
      parent.append(this.element);
    } else {
      throw new Error('parent not instanceof HTMLElement or ElementCreator');
    }
  }

  prepend(...children) {
    children.forEach((child) => {
      if (child instanceof HTMLElement) {
        this.element.prepend(child);
      } else if (child instanceof ElementCreator) {
        this.element.prepend(child.element);
      }
    });
  }

  prependTo(parent) {
    if (parent instanceof HTMLElement || parent instanceof ElementCreator) {
      parent.prepend(this.element);
    } else {
      throw new Error('parent not instanceof HTMLElement or ElementCreator');
    }
  }

  getElement() {
    return this.element;
  }

  getInnerText() {
    return this.element.innerText;
  }

  setInnerText(text) {
    this.element.innerText = text;
  }

  setCallback(event, cb) {
    this.element.addEventListener(event, cb);
  }

  removeContent() {
    this.element.innerHTML = '';
  }

  removeElement() {
    this.element.remove();
  }

  getParent() {
    return this.element.parentNode;
  }

}