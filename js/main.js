/* global window, document, console, alert */

/* Jquery */
$(document).ready(function() {

    /* Body */
    const body = $('body')

    /* add Active Class on Click on Links */
    $('.links a').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
    })

    /* Trigger MixItUp */
    var mixer = mixitup('.mixitup');

    /* On Click on Card => Post FadeIn */
    const theCard = $('.news .card');
    const thePost = $('.post')
    theCard.on('click', function() {
        thePost.fadeIn()
        body.css('overflowY', 'hidden');
        theCard.css('opacity', '0.5')
    })

    // if (thePost.is(':visible')) {
    //     $(window).click(function() { 
    //         thePost.fadeOut();
    //     });
    // }

    /* On CLick Esc => Post FadeOut */
    body.on('keydown', function (e) {
        if ( e.keyCode === 27 ) {
            if (thePost.is(':visible')) {
                thePost.fadeOut();
                body.css('overflowY', 'scroll');
                theCard.css('opacity', '1')
            }
        }
    });

    /* Toggle theNav Bar */
    $('#openTheNav').on('click', function() {
        $('.mainNav').fadeToggle()
    });

    /* Dry code :( */
    $('.mainNav #home').on('click', function() {
        $('section.home').show(700).siblings().fadeOut(700)
    });

    $('.mainNav #about').on('click', function() {
        $('section.about').show(700).siblings().fadeOut(700)
    });

    $('.mainNav #portfolio').on('click', function() {
        $('section.portfolio').show(700).siblings().fadeOut(700)
    });

    $('.mainNav #news').on('click', function() {
        $('section.news').show(700).siblings().fadeOut(700)
    });

    $('.mainNav #contact').on('click', function() {
        $('section.contact').show(700).siblings().fadeOut(700)
    });
    /* Dry code :( */

    /* On Click Esc When a Nav Bar is Open */
    body.on('keydown', function (e) {
        if ( e.keyCode === 27 ) {
            if ($('.mainNav').is(':visible')) {
                $('.mainNav').fadeOut()
            }
        }
    });
});