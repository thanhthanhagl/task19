$(document).ready(function () {
    //-----------------open menu mobile -------
    $(".c-header__iconmenu").click(function () {
        if ($(window).scrollTop() < 30) {
            $(".c-header").toggleClass("is-scroll");
        }
        $(".c-header__navmb").toggleClass("is-open");
        $(".c-header__icon").toggleClass("is-open");
        $('body').toggleClass("is-fixed");
    });
    $(".c-header__itemmb").click(function () {
        $(".c-header__navmb").toggleClass("is-open");
        $(".c-header__icon").toggleClass("is-open");
        $('body').toggleClass("is-fixed");
    });
    //----------slick slider------------
    $('.c-mainvisual__slider').slick({
        infinite: true,
        fade: true,
        autoplay: true,
        autoplayspeed: 3000,
        speed: 2000,
        arrows: false,
        dots: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        cssEase: 'linear'
    });
    //-----------tab--------------------
    $('[name=tabs]').each(function (i, d) {
        var p = $(this).prop('checked');
        //   console.log(p);
        if (p) {
            $('.c-tab__content').eq(i)
                .addClass('is-active');
            $('.c-tab__label').eq(i)
                .addClass('is-active');
        }
    });

    $('[name=tabs]').on('change', function () {
        var p = $(this).prop('checked');

        // $(type).index(this) == nth-of-type
        var i = $('[name=tabs]').index(this);

        $('.c-tab__content').removeClass('is-active');
        $('.c-tab__content').eq(i).addClass('is-active');
        $('.c-tab__label').removeClass('is-active');
        $('.c-tab__label').eq(i).addClass('is-active');
    });
});