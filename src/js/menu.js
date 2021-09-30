import cardTemplate from '../temlate/menu-card.hbs';
import menu from '../menu.json';

const menuEl = document.querySelector('.js-menu');

const menuMarkup = menu.map(cardTemplate).join('');

menuEl.insertAdjacentHTML('beforeend', menuMarkup);
