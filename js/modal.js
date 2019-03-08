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


