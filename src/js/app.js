import { settings, select, classNames } from './settings.js';
import Product from './components/Product.js';
import Cart from './components/Cart.js';
import Booking from './components/Booking.js';
import HomePage from './components/HomePage.js';

const app = {
  initPages: function () {
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll('.main-nav a, .container-wrapper .nav-link');
    console.log(thisApp.navLinks);
    

    const idFromHash = window.location.hash.replace('#/', '');

    let pageMatchinHash = thisApp.pages[0].id;

    for (let page of thisApp.pages) {
      if (page.id === idFromHash) {
        pageMatchinHash = page.id;
        break;
      }
    }

    thisApp.activatePage(pageMatchinHash);

    for (let link of thisApp.navLinks) {
      link.addEventListener('click', function (event) {
        const clickedElement = this;
        event.preventDefault();

        /* Get page id from href atribute */
        const id = clickedElement.getAttribute('href').replace('#', '');
        /* run thisApp.activatePage with this id */
        thisApp.activatePage(id);

        /* change URL hash */
        window.location.hash = '#/' + id;
        console.log('click', link);
      });
    }
  },

  activatePage: function (pageId) {
    const thisApp = this;

    /* add class 'active' to matching pages, remove from non-matching */
    for (let page of thisApp.pages) {
      page.classList.toggle(classNames.pages.active, page.id === pageId);
    }
    /* add class 'active' to matching links, remove from non-matching */
    for (let link of thisApp.navLinks) {
      link.classList.toggle(
        classNames.nav.active,
        link.getAttribute('href') === '#' + pageId
      );
    }
  },

  initMenu: function () {
    const thisApp = this;

    for (let productData in thisApp.data.products) {
      new Product(thisApp.data.products[productData].id, thisApp.data.products[productData]);
    }
  },

  initData: function () {
    const thisApp = this;

    thisApp.data = {};
    const url = settings.db.url + '/' + settings.db.products;

    fetch(url)
      .then(function (rawResponse) {
        return rawResponse.json();
      })
      .then(function (parsedResponse) {
        thisApp.data.products = parsedResponse;
        thisApp.initMenu();
      });
  },

  init: function () {
    const thisApp = this;

    thisApp.initPages();
    thisApp.initHome();
    thisApp.initData();
    thisApp.initCart();
    thisApp.initBooking();
    thisApp.initHome();
    

  },

  initCart: function () {
    const thisApp = this;

    const cartElem = document.querySelector(select.containerOf.cart);
    thisApp.cart = new Cart(cartElem);

    thisApp.prodctList = document.querySelector(select.containerOf.menu);

    thisApp.prodctList.addEventListener('add-to-cart', function (event) {
      app.cart.add(event.detail.product);
    });
  },

  initBooking: function () {
    const thisApp = this;

    thisApp.bookingContainer = document.querySelector(select.containerOf.booking);
    thisApp.booking = new Booking(thisApp.bookingContainer);
  },

  initHome: function(){
    const thisApp = this;

    thisApp.homePageContainer = document.querySelector(select.containerOf.homePage);
    thisApp.homePage = new HomePage(thisApp.homePageContainer);
    thisApp.initPages();


  }
};
app.init();
