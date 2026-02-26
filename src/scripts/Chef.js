export default class Chef {
  constructor() {
    this.element;
    this.menu = [];
    this.container;
    this.init();
  }

  init() {
    const Poutine = new Poutine();
    menu.push(Poutine);

    const button = document.querySelector('.button-secondary');
    button.addEventListener('click', this.sendOrder.bind(this));
  }

  sendOrder() {}
}
