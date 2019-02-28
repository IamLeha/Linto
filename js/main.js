$('.slider').slick({
    prevArrow: $('.bottom__box-arrow-prev'),
    nextArrow: $('.bottom__box-arrow-next'),
});


$(".slider").on('afterChange', function (event, slick, currentSlide) {
    $("#number").text(currentSlide + 1);
});


