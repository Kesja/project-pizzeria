
class Carousel{
  constructor(element){
    const thisCarousel = this;

    thisCarousel.render(element);
    thisCarousel.initCarusel();
  }

  render(element){
    const thisCarousel = this;

    thisCarousel.dom = {};
    thisCarousel.dom.wrapper = element;
  }

  initCarusel(){
    const thisCarousel = this;
    // eslint-disable-next-line no-undef, no-unused-vars
    const carusel = new Flickity(thisCarousel.dom.wrapper, {
      // options
      autoPlay: true,
      cellAlign: 'left',
      contain: true,
      prevNextButtons: false,
    });
  }
}

export default Carousel;