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
  select_2.select2({
    width: '100%',
    dropdownAutoWidth: true,
    minimumResultsForSearch: Infinity
  });

  // ===== SELECT WITH FLAGS =====
  let selectWithFlags = $('.js-select-flag');
  function addFlag(state) {
    if (!state.id) {
      return state.text;
    }
    var baseUrl = './img/flags';
    var $state = $(
      '<span><img src="' +
        baseUrl +
        '/' +
        state.element.dataset.flag.toLowerCase() +
        '.png" class="img-flag" /> ' +
        state.text +
        '</span>'
    );
    console.log(state.element.dataset.flag);
    return $state;
  }
  
  selectWithFlags.select2({
    templateResult: addFlag,
    width: '100%'
    // dropdownCss: {'color': 'red'}
  });

  $(selectWithFlags).on('select2:select', function(e) {
    var newCountryFlag = e.params.data.element.dataset.flag;
    var newFlagSrc = `./img/flags/${newCountryFlag}.png`;
    $('.js-selected-counry-flag').attr('src', newFlagSrc);
  });
  
});
