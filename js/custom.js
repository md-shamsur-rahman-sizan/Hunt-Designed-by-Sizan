$(document).ready(function(){


// ==================== MAIN PART START ==================== //

    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();

        if(scrolling > 50){
            $(".back-to-top").fadeIn(750);
        }
        else{
            $(".back-to-top").fadeOut(750);
        }
        
        if(scrolling > 100){
            $("#menu").addClass('menu-background');
        }
        else{
            $("#menu").removeClass('menu-background');
        }
    });


    // =============== BACK TO TOP PART START =============== //

    $(".back-to-top").click(function(){
        $('html,body').animate({
            scrollTop: 0
        },1750);
    });

    // =============== BACK TO TOP PART END =============== //


    // =============== PRELOADER PART START =============== //

    $(window).on('load', function(){
        $(".preloader").delay(500).fadeOut(750);
    });

    // =============== PRELOADER PART END =============== //


    // =============== THEME PART START =============== //

    $('.theme-button').click(function(){
        $('html,body').toggleClass('dark-theme');
        
        if(document.body.classList.contains('dark-theme')){
            $(".dark-mode").delay(50).fadeOut(100);
        }
        else{
            $(".dark-mode").delay(100).fadeIn(150);
        }
        if(document.body.classList.contains('dark-theme')){
            $(".light-mode").delay(100).fadeIn(150);
        }
        else{
            $(".light-mode").delay(50).fadeOut(100);
        }
    });

    // =============== THEME PART END =============== //


    // =============== SLICK SLIDER PART START =============== //


    // ========== BANNER SLICK SLIDER PART START ========== //

    $('.banner-slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2750,
        nextArrow: ".next-banner",
        prevArrow: ".prev-banner",
        fade: true,
    });

    // ========== BANNER SLICK SLIDER PART END ========== //


    // ========== SERVICE SLICK SLIDER PART START ========== //

    $('.service-slick').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2750,
        nextArrow: ".next-service",
        prevArrow: ".prev-service",
        centerMode: true,
        centerPadding: 0,
        vertical: true,
        responsive: [
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                }
            },
            {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                }
            }
        ]
    });

    // ========== SERVICE SLICK SLIDER PART END ========== //


    // ========== TESTIMONIAL SLICK SLIDER PART START ========== //

    $('.testimonial-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.testimonial-nav',
        autoplay: true,
        autoplaySpeed: 2750,
    });

    $('.testimonial-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimonial-for',
        centerMode: true,
        centerPadding: "0",
        focusOnSelect: true,
        vertical: true,
        nextArrow: '.next-testimonial',
        prevArrow: '.prev-testimonial',
        autoplay: true,
        autoplaySpeed: 2750,
        responsive: [
            {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                }
            },
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                }
            },
            {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                }
            }
        ]
    });

    // ========== TESTIMONIAL SLICK SLIDER PART END ========== //


    // =============== SLICK SLIDER PART END =============== //


    // =============== COUNTER UP PART START =============== //

    $('.counter').counterUp();

    // =============== COUNTER UP PART END =============== //


    // =============== SCROLL ANIMATION PART START =============== //

    var html_body = $('html, body');
    $('.navbar .nav-link').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500,);
                return false;
            }
        }
    });

    // =============== SCROLL ANIMATION PART END =============== //


// ==================== MAIN PART END ==================== //


});