$(function() {
  $('#filter').keyup(filter);

  $('.pressable-day').click(function() {
    $(this).toggleClass('active');

    filter();
  });

  function filter() {
    var rex = new RegExp($('#filter').val(), 'i');
    var rows = $('.searchable .schedule-row');

    rows.hide();

    rows.filter(function() {

      var tester = true;

      tester = filterOnDays(this);

      if (rex) {
        tester = tester && rex.test($(this).text());
      }

      return tester;
    }).show();
  }

  function filterOnDays(selector) {
    var tester = true;
    var all = $('#trWithDays .pressable-day.active');

    for (var i = 0; i < all.length; i++) {
      var day = $(selector).find("[data-schedule='" + all[i].id + "']");

      if (!day.hasClass('active')) {
        tester = false;
      }
    }
    return tester;
  }
});
