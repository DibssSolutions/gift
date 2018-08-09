import select2 from 'select2';

$(document).ready(function() {
  let select = $('.js-select2');
  function formatState(state) {
    if (!state.id) {
      return state.text;
    }
    var baseUrl = './img/flags';
    var $state = $(
      '<span><img src="' +
        baseUrl +
        '/' +
        state.element.value.toLowerCase() +
        '.png" class="img-flag" /> ' +
        state.text +
        '</span>'
    );
    return $state;
  }
  select.select2({
    templateResult: formatState
  });

  // ===== SELECT 2 =====

  let select_2 = $('.js-select');
  // select_2.each(function(s) {
  //   s.select2({
  //     width: '100%',
  //     dropdownAutoWidth: true,
  //     minimumResultsForSearch: Infinity
  //   });
  // });
  console.log(select_2);
  select_2.select2({
    width: '100%',
    dropdownAutoWidth: true,
    minimumResultsForSearch: Infinity
  });
});
