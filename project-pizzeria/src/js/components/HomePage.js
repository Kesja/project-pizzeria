import Carousel from './Carousel.js';
import {select, templates} from '../settings.js';

class HomePage{
  constructor(element){
    const thisHomePage = this;

    thisHomePage.render(element);
    thisHomePage.initWidget();
    //thisHomePage.initPage();
  }

  render(element){
    const thisHomePage = this;
    const generatedHTML = templates.homePage(thisHomePage);
    
    thisHomePage.dom = {};

    thisHomePage.dom.wrapper = element;
    thisHomePage.dom.wrapper.innerHTML = generatedHTML;
    thisHomePage.dom.carouselWrapper = thisHomePage.dom.wrapper.querySelector(select.widgets.carusel.wrapper);
    thisHomePage.dom.orderBtn = thisHomePage.dom.wrapper.querySelector(select.homePage.order);
    thisHomePage.dom.bookingBtn = thisHomePage.dom.wrapper.querySelector(select.homePage.booking);
    thisHomePage.dom.links = thisHomePage.dom.wrapper.querySelectorAll(select.nav.links);

  }

  initWidget(){
    const thisHomePage = this;
    thisHomePage.carouselWidget = new Carousel(thisHomePage.dom.carouselWrapper);
  }

  /*initPage(){
    const thisHomePage = this;

    thisHomePage.dom.orderBtn.addEventListener('click', function(){
      const clickedElement = this;
      const id = clickedElement.getAttribute('href').replace('#', '');
      
      thisApp.activatePage(id);
    });
  }*/
}
export default HomePage;