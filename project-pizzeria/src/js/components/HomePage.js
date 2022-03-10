import Carousel from './Carousel.js';
import {select, templates} from '../settings.js';

class HomePage{
  constructor(element){
    const thisHomePage = this;

    thisHomePage.render(element);
    thisHomePage.initWidget();
  }

  render(element){
    const thisHomePage = this;
    const generatedHTML = templates.homePage(thisHomePage);
    
    thisHomePage.dom = {};

    thisHomePage.dom.wrapper = element;
    thisHomePage.dom.wrapper.innerHTML = generatedHTML;
    thisHomePage.dom.carouselWrapper = thisHomePage.dom.wrapper.querySelector(select.widgets.carusel.wrapper);
  }

  initWidget(){
    const thisHomePage = this;
    thisHomePage.carouselWidget = new Carousel(thisHomePage.dom.carouselWrapper);
  }

}
export default HomePage;