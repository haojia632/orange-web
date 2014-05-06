/* ======= Animations ======= */
jQuery(document).ready(function($) {

    //Only animate elements when using non-mobile devices
    if (jQuery.browser.mobile === false) {

        /* Screenshots page transitions, taken from main template */
        $('.screenshot').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delayp1');}
        });
    }

    $('[rel="hovertitle"]').hover(function() {
        $(this).fadeTo("slow",0.3);
    }, function() {
        $(this).fadeTo("slow",1);
    });
    $('[rel="hovertitle"]').tooltip();

    $('.alert').alert();

});