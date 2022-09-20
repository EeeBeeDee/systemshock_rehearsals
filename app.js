const navButton = document.getElementById('nav-button')
const burgerline = document.getElementById('burgerline')

navButton.addEventListener('click', () => {
    burgerline.classList.toggle('active')
})