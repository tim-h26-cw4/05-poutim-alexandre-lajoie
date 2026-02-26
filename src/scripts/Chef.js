import Poutine from './Poutine.js';

export default class Chef {
  constructor(element) {
    this.element = element;
    this.menu = [];
    this.container = this.element.querySelector('.chef__order');
    this.init();
  }

  init() {
    const poutines = this.element.querySelectorAll('.poutine');
    for (let i = 0; i < poutines.length; i++) {
      const poutine = poutines[i];
      const instance = new Poutine(poutine);
      this.menu.push(instance);
    }
    console.log(this.menu);

    const button = this.element.querySelector('.js-button-secondary');
    button.addEventListener('click', this.sendOrder.bind(this));
  }

  sendOrder() {
    this.container.textContent = '';
    let nbPoutine = 0;
    for (let i = 0; i < this.menu.length; i++) {
      const poutine = this.menu[i];
      if (poutine.selectedType) {
        nbPoutine += 1;
      }
    }
    const totalPoutine = nbPoutine;
    const texte = document.createElement('p');
    texte.textContent = `Nombre total de poutine(s) : ${totalPoutine}`;
    this.container.appendChild(texte);
  }
}
