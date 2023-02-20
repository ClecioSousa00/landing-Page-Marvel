const buttonIcon = document.querySelector('#menu-icon')
const buttonIconClose = document.querySelector('#icon-close')

const menu = document.querySelector('#menu')

buttonIcon.addEventListener('click', () =>{
    menu.classList.add('active')
})

buttonIconClose.addEventListener('click', () =>{
    menu.classList.remove('active')
})