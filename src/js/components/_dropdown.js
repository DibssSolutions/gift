import { OPEN, BODY } from '../_constants';
var dropdownTriggers = $('.js-dropdown-btn');
var dropdowns = $('.js-dropdown-on-click');

console.log(dropdownTriggers);

dropdownTriggers.each(function(index, trigger) {
  
  $(trigger).click(function(event) {
		
    var parent = $(trigger).parents('.js-dropdown-on-click');

    if (!parent.hasClass(OPEN)) {
      // dropdowns.removeClass(OPEN);
      parent.addClass(OPEN);
      var list = $(parent).find('.dropdown__list');
      $(list).slideDown(350);
    } else {
      parent.removeClass(OPEN);
      var list = $(parent).find('.dropdown__list');
      $(list).slideUp(350);
    }
    event.stopPropagation();
  });
});

// BODY.click(function() {
//   dropdowns.removeClass(OPEN);
// });

var dd = $('.js-dropdown');
dd.on('mouseover click', function() {
  $(this).addClass('is-open');
});
dd.on('mouseleave click', function() {
  $(this).removeClass('is-open');
});
