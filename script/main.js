const buttonIcon = document.querySelector('#menu-icon')
const buttonIconClose = document.querySelector('#icon-close')
const menu = document.querySelector('#menu')
const carousel = document.querySelector('.js-carousel')

buttonIcon.addEventListener('click', () =>{
    menu.classList.add('active')
})

buttonIconClose.addEventListener('click', () =>{
    menu.classList.remove('active')
})

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