$(function () {
    $('#searchfield').keyup(filter);

    $('.pressable-day').click(function () {
        $(this).toggleClass('active');

        filter();
    });

    function filter() {
        var rex = new RegExp($('#searchfield').val(), 'i');
        var rows = $('.searchable tr');

        rows.hide();

        rows.filter(function () {

            var tester = true;

            tester = rex.test($(this).text());

            tester = tester && filterOnDays(this);

            return tester;
        }).show();
    }

    function filterOnDays(selector) {
        var tester = true;
        var all = $('#days .pressable-day.active');

        for (var i = 0; i < all.length; i++) {
            var day = $(selector).find('[data-schedule="' + all[i].id + '"]');

            if (!day.hasClass('active')) {
                tester = false;
            }
        }
        return tester;
    }
});
