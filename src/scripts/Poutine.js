export default class Poutine {
  constructor(element) {
    this.element = element;
    this.types = document.querySelectorAll('.types');
    this.selectedType;
    this.init();
  }

  init() {
    const buttons = document.querySelectorAll('.button');
    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
      button.addEventListener('click', this.selectedType.bind(this));
    }
  }

  selectedType(e) {
    for (let i = 0; i < types.length; i++) {
      const type = types[i];
      type.classList.remove('is-active');
    }
    e.currentTarget.classList.add('is-active');
    this.selectedType.textContent = `${e.currentTarget}`;
  }
}
