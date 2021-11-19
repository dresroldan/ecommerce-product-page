const navbar = document.querySelector('.navbar');
const btnHamburger = document.querySelector('.hamburger');
const btnMenuClose = document.querySelector('.navbar-btn');
const btnPlusIcon = document.querySelector('.count-icon--plus');
const btnMinusIcon = document.querySelector('.count-icon--minus');
const btnAddtoCart = document.querySelector('.product-btn');
const counter = document.querySelector('.counter');
const cartCounter = document.querySelector('.cart-count');

let countValue = 0;
let cartCountValue = 0;

const onHamburgerClick = () => {
  navbar.classList.remove('navbar--hidden');
};

const onMenuCloseClick = () => {
  navbar.classList.add('navbar--hidden');
};

const addItemcount = () => {
  setProductCounter(1);
};

const removeItemcount = () => {
  setProductCounter(-1);
};

const setProductCounter = (value) => {
  if (countValue + value > 0) {
    countValue += value;
    counter.innerHTML = countValue;
  }

  console.log(countValue);
};

const addItemToCart = () => {
  newVal = countValue += cartCountValue;

  cartCounter.innerHTML = newVal;
};

btnHamburger.addEventListener('click', onHamburgerClick);
btnMenuClose.addEventListener('click', onMenuCloseClick);
btnPlusIcon.addEventListener('click', addItemcount);
btnMinusIcon.addEventListener('click', removeItemcount);
btnAddtoCart.addEventListener('click', addItemToCart);
