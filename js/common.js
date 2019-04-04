window.onload = function () {
    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            mousewheel: true,
        },
    });

    var swiper2 = new Swiper('.swiper-container2', {
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: false,
        },
    });
};