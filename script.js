//Funcion del menu desk
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toogleDesktopMenu);

function toogleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

//Funcion del menu mobile
const HamIconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

HamIconMenu.addEventListener('click', toogleMobileMenu);

function toogleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}

