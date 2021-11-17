const navbar = document.querySelector('.navbar');
const btnHamburger = document.querySelector('.hamburger');
const btnMenuClose = document.querySelector('.navbar__btn');
const btnPlusIcon = document.querySelector('.count__icon--plus');
const btnMinusIcon = document.querySelector('.count__icon--minus');
const counter = document.querySelector('.counter');

let count = 0;

const onHamburgerClick = () => {
  navbar.classList.remove('navbar--hidden');
};

const onMenuCloseClick = () => {
  navbar.classList.add('navbar--hidden');
};

const addItemcount = () => {
  count++;
  counter.innerHTML = count;
};

const removeItemcount = () => {
  if (count >= 1) {
    count--;
    counter.innerHTML = count;
  } else {
    return count;
  }
};

btnHamburger.addEventListener('click', onHamburgerClick);
btnMenuClose.addEventListener('click', onMenuCloseClick);
btnPlusIcon.addEventListener('click', addItemcount);
btnMinusIcon.addEventListener('click', removeItemcount);
