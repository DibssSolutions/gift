// import 'nouislider';
var noUiSlider = require('nouislider');

var slider = document.querySelector('.js-range-slider');
// var startSlider = slider.dataset.start;

// console.log(startSlider, minSlider, maxSlider);

if (slider) {

  var minSlider = parseFloat(slider.dataset['rangeMin']);
  var maxSlider = parseFloat(slider.dataset['rangeMax']);
  var startSlider = parseFloat(slider.dataset['rangeStart']);
  var endSlider = parseFloat(slider.dataset['rangeEnd']);
  
  noUiSlider.create(slider, {
    start: [startSlider, maxSlider],

    connect: true,
    range: {
      min: minSlider,
      max: maxSlider
    }
  });

  slider.noUiSlider.on('update.one', function(e) {
    $('.js-range-min').text(e[0]);
    $('.js-range-max').text(e[1]);
  });
}
