const navbar = document.querySelector('.navbar');
const btnHamburger = document.querySelector('.hamburger');
const btnMenuClose = document.querySelector('.navbar__btn');

const onHamburgerClick = () => {
  navbar.classList.remove('navbar--hidden');
};

const onMenuCloseClick = () => {
  navbar.classList.add('navbar--hidden');
};

btnHamburger.addEventListener('click', onHamburgerClick);
btnMenuClose.addEventListener('click', onMenuCloseClick);
