import Poutine from './Poutine.js';

export default class Chef {
  constructor(element) {
    this.element = element;
    this.menu = [];
    this.container;
    this.init();
  }

  init() {
    const poutines = document.querySelectorAll('[data-component="Poutine"]');
    for (let i = 0; i < poutines.length; i++) {
      const poutine = poutines[i];
      new Poutine(poutine);
    }

    console.log(this.menu);

    const button = document.querySelector('.button-secondary');
    button.addEventListener('click', this.sendOrder.bind(this));
  }

  sendOrder(e) {
    e.currentTarget.textContent = 1;
  }
}
