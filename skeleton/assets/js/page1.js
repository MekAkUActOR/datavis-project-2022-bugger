$(function() {
    var $win = $(window);
    var $backToTop = $('.js-back-to-top');
    // When the web position is larger than 100, show the back button
    $win.scroll(function() {
        if ($win.scrollTop() > 100) {
            $backToTop.show();
        } else {
            $backToTop.hide();
        }
    });
    // When the use click the button, go back
    $backToTop.click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 200);
    });
});
