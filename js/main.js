$(document).ready(function () {
    addScrolled();
    paragraphAppear();
});
$(window).scroll(function () {
    addScrolled();
});

function addScrolled() {
    var navHeight = $('#main-nav').outerHeight();
    var headerHeight = $('#main-head').outerHeight();
    var skillsHeight = $('#skills').outerHeight();
    var aboutHeight = $('#about').outerHeight();
    var actualPos = $(window).scrollTop();

    if (actualPos > navHeight) {
        $('#head').addClass('scrolled');
        $('#href').addClass('color');
        $('#main-nav').addClass('scrolled');
    } else {
        $('#main-nav').removeClass('scrolled');
        $('#head').removeClass('scrolled');
        $('#href').removeClass('color');
    }
    if (actualPos > headerHeight) {
        $('#href').removeClass('color');
        $('#href1').addClass('color');
        $('#main-nav h3').addClass('color');
    } else {
        $('#href1').removeClass('color');
        $('#main-nav h3').removeClass('color');
    }
    if (actualPos > (headerHeight + aboutHeight)) {
        $('#href1').removeClass('color');
        $('#href2').addClass('color');
    } else {
        $('#href2').removeClass('color');
    }
    if (actualPos > (headerHeight + aboutHeight + skillsHeight)) {
        $('#href2').removeClass('color');
        $('#href3').addClass('color');
    } else {
        $('#href3').removeClass('color');
    }
}


function paragraphAppear() {
    $('.icon img').click(function () {
        if ($(this).next().css('display') == "none") {
            $(this).next().slideDown(1000);
            $(this).parent().siblings().find('p').slideUp(1000);
        } else {
            $(this).next().slideUp(1000);
        }
    })
};
