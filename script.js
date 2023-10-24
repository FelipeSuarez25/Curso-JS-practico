//Funcion del menu desk
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toogleDesktopMenu);

function toogleDesktopMenu(){

    const isAsideOClosed = asideCarrito.classList.contains('inactive');

    if(!isAsideOClosed){
        asideCarrito.classList.add('inactive');
    }
    
    desktopMenu.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
}

//Funcion del menu mobile
const HamIconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

HamIconMenu.addEventListener('click', toogleMobileMenu);

function toogleMobileMenu(){

    const isAsideOClosed = asideCarrito.classList.contains('inactive');

    if(!isAsideOClosed){
        asideCarrito.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
}

//funcion carrito
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const asideCarrito = document.querySelector('.product-detail');

menuCarritoIcon.addEventListener('click', toogleCarritoAside);

function toogleCarritoAside(){

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    asideCarrito.classList.toggle('inactive');
}