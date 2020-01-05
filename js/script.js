$(document).ready(function(){
    $(".partners-slider").owlCarousel({
        items: 4,
        loop:true,
        nav:true,
        navText:true,
        margin:30,
        responsive: {
            0: {
                items:1,
                dots: false
            },
            600: {
                items:1
            },
            900: {
                items:2
            },
            1200: {
                items:3
            },
            1400: {
                items:4

            }

        }
    });
});
$(document).ready(function(){
    $(".reviews-slider").owlCarousel({
        items: 1,
        loop:true,
        nav:true,
        navText:true,
        responsive: {
            0: {
                items:1,
                dots: false
            },
            600: {
                items:1
            },
            900: {
                items:1
            },
            1200: {
                items:1
            },
            1400: {
                items:1

            }

        }
    });
});
$(document).ready(function(){
    $(".slider").owlCarousel({
        items: 1,
        loop:true,
        nav:true,
        navText:true,
        responsive: {
            0: {
                items:1,
                dots: false
            },
            600: {
                items:1
            },
            900: {
                items:1
            },
            1200: {
                items:1
            },
            1400: {
                items:1

            }

        }
    });
});
new WOW().init();
$('.mobile-btn').on(  'click',function () {
    $('.mobile-btn').toggleClass('active')
    $('.header').toggleClass('active')
})
$('.nav-items  li a').on('click',function () {
    $('.mobile-btn').removeClass('active')
    $('.header').removeClass('active')
});