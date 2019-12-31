$(document).ready(function () {
    $('.menu-toggler').on('click', function() {
        console.log(this);
        $(this).toggleClass('open');
        console.log($('.top-nav'));
        $('.top-nav').toggleClass('open');
    })
});