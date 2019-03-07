$(".gallery").fancybox({
    openEffect: 'elastic'
});

$(document).ready(function () {


    $(".fancybox-gallery").fancybox({

        afterShow: function () {
            this.content.find('video').trigger('play')
            this.content.find('video').on('ended', function () {
                $.fancybox.next();
            });
        }

    });

    $(".fancybox-single").fancybox({

        afterShow: function () {
            this.content.find('video').trigger('play')
            this.content.find('video').on('ended', function () {
                $.fancybox.close();
            });
        }

    });

});



$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
});