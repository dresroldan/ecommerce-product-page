// navbar menu display
const navbar = document.querySelector('.navbar');
const btnHamburger = document.querySelector('.burger-icon');
const btnMenuClose = document.querySelector('.navbar-icon');
const cartCounterIcon = document.querySelector('.cart-icon__count');

// shopping cart in header
const cartMenu = document.querySelector('.cart-menu');
const btnCart = document.querySelector('.cart-icon');
const cartMessage = document.querySelector('.cart-menu__message');
const productsInCartTotalPrice = document.querySelector('.cart-menu__products');
const checkoutButton = document.querySelector('.cart-menu__button');

// product hero & slideshow gallery
const heroImg = document.querySelector('.product-hero');
const gallery = document.querySelectorAll('.thumb-gallery__wrap');
const btnNext = document.querySelector('.arrow-icon__wrap--next');
const btnPrev = document.querySelector('.arrow-icon__wrap--previous');

// add to shopping cart counter and button
const btnPlusIcon = document.querySelector('.count-icon--plus');
const btnMinusIcon = document.querySelector('.count-icon--minus');
const btnAddtoCart = document.querySelector('.add-cart__button');
const counter = document.querySelector('.counter');

// numerical values
let countValue = 0;
let productsInCart = 0;
let price = 250.0;
let discount = 0.5;
let slideIndex = 1;

console.log('this is index ' + slideIndex);

const nextSlide = () => {
  showSlides(1);
};

const showSlides = (value) => {
  if (slideIndex + value > 1) {
    slideIndex += value;
    console.log('this is index ' + slideIndex);
  }
};

const prevSlide = () => {
  let currentSlide = slideIndex - 1;

  console.log(currentSlide);

  showSlides(currentSlide);
};

// function showSlides(i) {
//   slideIndex += i;

//   for (i = 0; i < gallery.length; i++) {
//     gallery[i].style.display = 'none';
//   }

//   if (slideIndex > gallery.length - 1) {
//     slideIndex = 0;
//   }
//   if (i < 0) {
//     slideIndex = gallery.length - 1;
//   }

//   gallery[slideIndex].style.display = 'block';

//   // gallery.forEach((img) => {
//   //   img.style.display = 'none';
//   // });

//   // gallery[slideIndex - 1].style.display = 'block';
// }

const onHamburgerClick = () => {
  navbar.classList.remove('navbar--hidden');
};

const onMenuCloseClick = () => {
  navbar.classList.add('navbar--hidden');
};

const openCartMenu = () => {
  cartMenu.classList.toggle('cart-menu--hidden');
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
      <img class="product__img" src="./images/image-product-1.jpg" alt="sneaker product"/>
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

  const btnDelete = document.querySelector('.delete-button');
  btnDelete.addEventListener('click', onBtnDeleteClick);
};

const onBtnDeleteClick = () => {
  productsInCart--;
  updateCart();
  const counterInMenu = document.querySelector('.count');
  const totalAmount = document.querySelector('.total-amount');
  counterInMenu.innerHTML = productsInCart;
  totalAmount.innerHTML = `$${(price * discount * productsInCart).toFixed(2)}`;

  if (productsInCart == 0) {
    productsInCartTotalPrice.innerHTML = '';
  }
};

const updateCart = () => {
  updateCartIcon();
  updateEmptyCartMessage();
  updateCheckoutButton();
};

const updateCartIcon = () => {
  // displays count on cart icon
  if (productsInCart === 0) {
    cartCounterIcon.innerHTML = '';
  } else {
    cartCounterIcon.innerHTML = productsInCart;
  }
};

const updateEmptyCartMessage = () => {
  if (productsInCart > 0) {
    cartMessage.classList.add('cart-menu__message--hidden');
  } else {
    cartMessage.classList.remove('cart-menu__message--hidden');
  }
};

const updateCheckoutButton = () => {
  if (productsInCart >= 1) {
    checkoutButton.classList.remove('cart-menu__button--hidden');
  } else {
    checkoutButton.classList.add('cart-menu__button--hidden');
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
btnNext.addEventListener('click', nextSlide);

btnPrev.addEventListener('click', prevSlide);
