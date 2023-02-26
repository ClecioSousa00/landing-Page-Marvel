
const carousel = document.querySelector('.js-carousel')
new Glider(carousel, {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    arrows: {
        prev: '.js-carousel__prev',
        next: '.js-carousel__next',
    },
    scrollLock: true,
    responsive: [
        {
            breakPoint: 1025,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }
    ]
})