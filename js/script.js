(function () {
    "use-strict";

    // Window on Load
     $(window).on('load', function(){
        $(".btt").hide();
    });

    // Window on Scroll
    $(window).on('scroll', function () {
        let scrolling = $(this).scrollTop();
        
        if (scrolling > 50) {
            $('.main-header').addClass('fixed-header');
        } else {
            $('.main-header').removeClass('fixed-header');
        }

        if (scrolling > 200) {
            $('.btt').show(500);
        } else {
            $('.btt').hide(500);
        }
    });
    
    // Back to Top
    $('.btt').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
    
    // Responsive Nav
    function responsiveNav()
    {
        $('.solidbar').on('click', function () {
            $('.page-navigation').toggle(500);
            $(this).toggleClass('active');
            $('.hover-dropdown-child').show();

            $('.hover-dropdown').on('click', function () {
                $('.hover-dropdown').toggleClass('active');
                $('.hover-dropdown-child').toggle(500);
            });
        });
    }
    responsiveNav();
})();