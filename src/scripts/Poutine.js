export default class Poutine {
  constructor(element) {
    this.element = element;
    this.types = document.querySelectorAll('.button');
    this.selectedType = '';
    this.init();
  }

  init() {
    const buttons = document.querySelectorAll('.button');
    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
      button.addEventListener('click', this.selectType.bind(this));
    }
  }

  selectType(e) {
    for (let i = 0; i < this.types.length; i++) {
      const type = this.types[i];
      type.classList.remove('is-active');
    }
    e.currentTarget.classList.add('is-active');
    this.selectedType = `${e.currentTarget}`;
    console.log(this.selectedType);
    this.updatePhoto();
  }

  updatePhoto() {}
}
