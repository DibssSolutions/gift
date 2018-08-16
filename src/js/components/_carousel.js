import { buildIcon } from '../_utils';
import owlCarousel from 'owl.carousel';

$(document).ready(function() {
  var sliderTrigger = document.querySelector('.js-carousel-dots');

  if (sliderTrigger !== null) {
    var slider = $('.js-carousel-dots');

    slider.owlCarousel({
      onInitialized: sliderVisible,
      loop: true,
      dots: true,
      smartSpeed: 2000,
      nav: true,
      navText: [buildIcon('chevron-down'), buildIcon('chevron-down')],
      items: 1,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      animateOut: 'fadeOut'
    });

    function sliderVisible() {
      $('.slider').css({ opacity: '1', visibility: 'visible' });
    }

    // slider.on('mousewheel', '.owl-stage', function(e) {
    //   if (e.originalEvent.deltaY > 0) {
    //     slider.trigger('next.owl');
    //   } else {
    //     slider.trigger('prev.owl');
    //   }
    //   e.preventDefault();
    // });
  }
});
