export default class Chef {
  constructor(element) {
    this.element = element;
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
