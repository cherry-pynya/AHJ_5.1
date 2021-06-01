/* eslint-disable class-methods-use-this */
import createPop from './createPop';

export default class Btn {
  constructor(str) {
    if (typeof str === 'string') {
      this.element = document.querySelector(str);
    } else {
      this.element = str;
    }
    this.poped = false;
    this.onClick = this.onClick.bind(this);
    this.element.addEventListener('click', this.onClick);
  }

  onClick() {
    if (!this.poped) {
      const pop = createPop(
        this.element.dataset.title,
        this.element.dataset.content,
        this.element.dataset.id,
      );
      document.body.appendChild(pop);
      const { top, left } = this.element.getBoundingClientRect();
      pop.style.width = `${this.element.offsetWidth}px`;
      pop.style.top = `${window.scrollY + top + this.element.offsetHeight - pop.offsetHeight / 2 - this.element.offsetHeight * 2}px`;
      pop.style.left = `${window.scrollX + left}px`;
      this.poped = true;
    } else if (this.poped) {
      document.getElementById(this.element.dataset.id).classList.toggle('invalid');
    }
  }
}
