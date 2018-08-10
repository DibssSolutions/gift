// import 'nouislider';
var noUiSlider = require('nouislider');

var slider = document.querySelector('.js-range-slider');

noUiSlider.create(slider, {
  start: [0, 1000],
  connect: true,
  range: {
    min: 0,
    max: 1000
  },
  tooltips: true
});

slider.noUiSlider.on('change.one', function(e) {
  console.log(e[0], e[1]);
});
