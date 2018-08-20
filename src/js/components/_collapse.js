import { OPEN, BODY, WIN, widthMD } from '../_constants';

$(document).ready(function() {
  var collapseTrigger = $('.js-collapse-header');
  var collapses = $('.js-collapse');

  if (WIN.width() > widthMD) {
    $(collapses).each(function(index, el) {
      $(el).addClass(OPEN);
      var list = $(el).find('.js-collapse-list');
      $(list).slideDown(50);
    });
  } else {
    var list = $('.js-collapse-list');
    $(list).slideUp();
  }

  collapseTrigger.click(function(event) {
    var parent = $(this).parents('.js-collapse');

    if (!parent.hasClass(OPEN)) {
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
});
