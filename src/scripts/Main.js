import Icons from './utils/Icons.js';
import Chef from './Chef.js';

class Main {
  constructor() {
    Icons.load();
    this.init();
  }

  init() {
    const chefs = document.querySelectorAll('[data-component="Chef"]');
    for (let i = 0; i < chefs.length; i++) {
      const chef = chefs[i];
      new Chef(chef);
    }
  }
}

new Main();
