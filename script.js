// navbar
const navbar = document.querySelector('.navbar');
const btnHamburger = document.querySelector('.hamburger');
const btnMenuClose = document.querySelector('.navbar-button');

// shopping cart in header
const cartMenu = document.querySelector('.cart');
const btnCart = document.querySelector('.cart-button');
const cartCounter = document.querySelector('.cart-count');
const cartMessage = document.querySelector('.cart-message');
const productsInCartTotalPrice = document.querySelector('.products-in-cart');
const btnDelete = document.querySelector('.delete-button');

// product hero & slideshow gallery
const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector('.previous');
const gallery = document.querySelectorAll('.thumb-img');
const heroImg = document.querySelector('.product-hero');

// add to shopping cart counter and button
const btnPlusIcon = document.querySelector('.count-icon--plus');
const btnMinusIcon = document.querySelector('.count-icon--minus');
const btnAddtoCart = document.querySelector('.addcart-button');
const counter = document.querySelector('.counter');

// numerical values
let countValue = 0;
let productsInCart = 0;
let price = 250.0;
let discount = 0.5;

const onHamburgerClick = () => {
  navbar.classList.remove('navbar--hidden');
};

const onMenuCloseClick = () => {
  navbar.classList.add('navbar--hidden');
};

const openCartMenu = () => {
  cartMenu.classList.toggle('cart--hidden');
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
};

const addItemToCart = () => {
  productsInCart += countValue;

  const productHTML = `   
  <div class="item">
      <img class="product-img" src="./images/image-product-1.jpg" alt="sneaker product"/>
      <div class="product-details">
          <div class="product-name">Autumn Limited Edition...</div>
          <div class="price-group">
            <div class="cart-price">$125.00</div> x
            <div class="count">${productsInCart}</div>
            <div class="total-amount">${(
              price *
              discount *
              productsInCart
            ).toFixed(2)}</div>
    </div>
    </div>
    <img class="delete-button" src="./images/icon-delete.svg" alt="icon delete">
  </div>
  
  `;

  productsInCartTotalPrice.innerHTML = productHTML;

  updateCart();
};

const onBtnDeleteClick = () => {
  productsInCart--;
  updateCart();
};

const updateCart = () => {
  updateCartIcon();
  updateEmptyCartMessage();
};

const updateCartIcon = () => {
  // displays count on cart icon
  cartCounter.innerHTML = productsInCart;
};

const updateEmptyCartMessage = () => {
  if (productsInCart > 0) {
    cartMessage.classList.add('cart-message--hidden');
  } else {
    cartMessage.classList.remove('cart-message--hidden');
  }
};

const onThumbClick = (event) => {
  //clear active state for all thumbnails
  gallery.forEach((img) => {
    img.classList.remove('active');
  });
  //set active thumbnail
  event.target.parentElement.classList.add('active');
  //update hero image
  heroImg.src = event.target.src.replace('-thumbnail', '');
};

gallery.forEach((img) => {
  img.addEventListener('click', onThumbClick);
});

btnHamburger.addEventListener('click', onHamburgerClick);
btnMenuClose.addEventListener('click', onMenuCloseClick);
btnPlusIcon.addEventListener('click', addItemcount);
btnMinusIcon.addEventListener('click', removeItemcount);
btnAddtoCart.addEventListener('click', addItemToCart);
btnCart.addEventListener('click', openCartMenu);
btnDelete.addEventListener('click', onBtnDeleteClick);
