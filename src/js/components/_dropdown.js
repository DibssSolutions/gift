import { OPEN, BODY } from '../_constants';

// BODY.click(function() {
//   dropdowns.removeClass(OPEN);
// });

var dd = $('.js-dropdown-btn');
dd.on('click', function() {
  $(this)
    .parents('.js-dropdown-container')
    .toggleClass(OPEN);
});
// dd.on(' click', function() {
//   $(this).removeClass('is-open');
// });
