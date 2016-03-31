$(".link").click(function() {
    var arrow = $(this).find('.arrow');
    if (arrow.text() == 'keyboard_arrow_down') {
        arrow.text('keyboard_arrow_up');
    } else {
        arrow.text('keyboard_arrow_down');
    }
});
