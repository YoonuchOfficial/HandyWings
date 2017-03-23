// Write your Javascript code.

document.addEventListener('DOMContentLoaded', function () {
    Typed.new('.element', {
        strings: ["หัวใจ", "ความห่วงใย", "ความใส่ใจ", "ความรัก", "ความจริงใจ"],
        typeSpeed: 100,
        loop: true
    });
});

$(document).ready(function () {
    $('.hub-slider-slides ul').hubSlider({
        selector: $('li'),
        button: {
            next: $('.hub-slider-arrow_next'),
            prev: $('.hub-slider-arrow_prev')
        },
        startOffset: 30,
        auto: true
    });

    $('.hub-slider-slides ul').hubSlider({
        selector: null,
        button: {
            next: null,
            prev: null
        },
        opacity: 1,
        opacityStep: 0.2,
        startOffset: 20,
        offset: 0,
        scale: 1,
        scaleStep: '0.05',
        transition: '0.6s',
        auto: false,
        time: 3 // secondly.
    });

    $(document).scroll(function () {
        var y = $(this).scrollTop();
        if (y > 100) {
            $('.navbar-default').css("background-color", "rgba(47, 52, 61, 0.95)");
        } else {
            $('.navbar-default').css("background-color", "rgba(47, 52, 61, 0.2)");
        }
    });

    // ------------------------------
    // http://codepen.io/mattsince87/pen/exByn
    // http://twitter.com/mattsince87
    // ------------------------------

    function scrollNav() {
        $('.nav a').click(function () {
            //Toggle Class
            $(".active").removeClass("active");
            $(this).closest('li').addClass("active");
            var theClass = $(this).attr("class");
            $('.' + theClass).parent('li').addClass('active');
            //Animate
            $('html, body').stop().animate({
                scrollTop: $($(this).attr('href')).offset().top - 160
            }, 400);
            return false;
        });
        $('.scrollTop a').scrollTop();
    }
    scrollNav();

});

