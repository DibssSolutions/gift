import owlCarousel from 'owl.carousel';

$(document).ready(function() {
  var sliderTrigger = document.getElementById('slider');

  if (sliderTrigger !== null) {
    var slider = $('.slider');

    slider.owlCarousel({
      onInitialized: sliderVisible,
      loop: true,
      dots: false,
      smartSpeed: 500,
      navText: ['', ''],
      // autoWidth: true,
      responsive: {
        0: {
          items: 1,
          margin: 0
        },
        678: {
          items: 2
        },
        1024: {
          items: 4
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
