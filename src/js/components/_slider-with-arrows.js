import owlCarousel from 'owl.carousel';

$(document).ready(function() {
  var sliderTrigger = document.getElementById('slider');

  if (sliderTrigger !== null) {
    var slider = $('.slider');

    slider.owlCarousel({
      onInitialized: sliderVisible,
      loop: true,
      // center: true,
      dots: false,
      smartSpeed: 500,
      margin: 0,
      nav: true,
      lazyLoad:true,
      navText: ['<img src="./assets/img/general/back-button.svg">', '<img src="./assets/img/general/back-button.svg">'],
      responsive: {
        0: {
          items: 1,
          margin: 0,
          nav: true
        },
        678: {
          items: 3,
          nav: true
        },
        1024: {
          items: 5,
          nav: true
        }
      }
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
