import owlCarousel from 'owl.carousel';

$(document).ready(function() {
  var sliderTrigger = document.querySelector('.js-slider-dots');

  if (sliderTrigger !== null) {
    var slider = $('.js-slider-dots');

    slider.owlCarousel({
      onInitialized: sliderVisible,
      loop: true,
      dots: true,
      smartSpeed: 2000,
      nav: true,
      items: 1
    });

    function sliderVisible() {
      $('.slider').css({ opacity: '1', visibility: 'visible' });
    }

    slider.on('mousewheel', '.owl-stage', function(e) {
      if (e.originalEvent.deltaY > 0) {
        slider.trigger('next.owl');
      } else {
        slider.trigger('prev.owl');
      }
      e.preventDefault();
    });
  }
});
