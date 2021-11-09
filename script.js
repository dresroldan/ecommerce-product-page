const menu = document.querySelector('.header__menu');
const btnHamburger = document.querySelector('.hamburger');
const btnMenuClose = document.querySelector('#btnMenuClose');

const onHamburgerClick = () => {
  menu.classList.remove('hidden');
};

const onMenuCloseClick = () => {
  menu.classList.add('hidden');
};

btnHamburger.addEventListener('click', onHamburgerClick);
btnMenuClose.addEventListener('click', onMenuCloseClick);
