let darkToggle = document.querySelector('.slider-toggle')
let darkButton = document.querySelector('.foto-perfil')

darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    darkButton.classList.toggle('borderColor')
})
