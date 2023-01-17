import { TypeHTMLElement, TypeObjectClass } from '../../types/types';

export default class Foundation {
  // readonly element: HTMLElement;

  // constructor(tag: keyof HTMLElementTagNameMap = 'div', styles: string[] = []) {
  //   this.element = document.createElement(tag);
  //   this.element.classList.add(...styles);
  // }

  static createElement(
    tagName: string,
    attributes: TypeObjectClass = {},
    children: string | TypeHTMLElement | TypeHTMLElement[] = ''
  ): TypeHTMLElement {
    const element = document.createElement(tagName);

    // Set attributes
    Object.keys(attributes).forEach((key) => {
      if (key === 'className') {
        element.className = attributes[key].toString(); // 'ggg ggg ggg'
      } else {
        element.setAttribute(key, attributes[key].toString());
      }
    });

    // Add children
    if (typeof children === 'string' && children) {
      element.innerHTML = children;
    } else if (children instanceof Array && children.length > 0) {
      children.forEach((child) => {
        if (child instanceof Node) {
          element.appendChild(child);
        }
      });
    } else if (children instanceof HTMLElement && children) {
      element.appendChild(children);
    }

    return element;
  }
}
