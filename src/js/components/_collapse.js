import { OPEN, BODY } from '../_constants';

var collapseTrigger = $('.js-collapse-header');
var collapses = $('.js-collapse');

collapseTrigger.click(function(event) {

  var parent = $(this).parents('.js-collapse');

  if (!parent.hasClass(OPEN)) {
    // dropdowns.removeClass(OPEN);
    parent.addClass(OPEN);
    var list = $(parent).find('.js-collapse-list');
    $(list).slideDown(750);
  } else {
    parent.removeClass(OPEN);
    var list = $(parent).find('.js-collapse-list');
    $(list).slideUp(750);
  }
  event.stopPropagation();
});
