/* jshint esversion: 11 */

const navButton = document.getElementById('nav-button');
const burgerline = document.getElementById('burgerline');
const navFlex = document.getElementById('nav-links');
const navLink = document.querySelectorAll('.click-link');

navButton.addEventListener('click', () => {
    burgerline.classList.toggle('active');
    navFlex.classList.toggle('active');
});

navLink.forEach(link => {
    link.addEventListener('click', () => {
        navFlex.classList.toggle('active');
        burgerline.classList.toggle('active');
    });
}); 