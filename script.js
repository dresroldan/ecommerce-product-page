const navbar = document.querySelector('.navbar');
const btnHamburger = document.querySelector('.hamburger');
const btnMenuClose = document.querySelector('.navbar-btn');
const btnPlusIcon = document.querySelector('.count-icon--plus');
const btnMinusIcon = document.querySelector('.count-icon--minus');
const btnAddtoCart = document.querySelector('.product-btn');
const counter = document.querySelector('.counter');
const cartCounter = document.querySelector('.cart-count');
const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector('.previous');
const gallery = document.querySelectorAll('.thumb-img');
const heroImg = document.querySelector('.product-hero');

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

function onThumbClick(event) {
  //clear active state for all thumbnails
  gallery.forEach((img) => {
    img.classList.remove('active');
  });
  //set active thumbnail
  event.target.parentElement.classList.add('active');
  //update hero image
  heroImg.src = event.target.src.replace('-thumbnail', '');
}

gallery.forEach((img) => {
  img.addEventListener('click', onThumbClick);
});

btnHamburger.addEventListener('click', onHamburgerClick);
btnMenuClose.addEventListener('click', onMenuCloseClick);
btnPlusIcon.addEventListener('click', addItemcount);
btnMinusIcon.addEventListener('click', removeItemcount);
btnAddtoCart.addEventListener('click', addItemToCart);
