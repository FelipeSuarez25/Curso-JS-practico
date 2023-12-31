//Funcion del menu desk
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toogleDesktopMenu);

function toogleDesktopMenu(){

    const isAsideOClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideOClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
}

//Funcion del menu mobile
const HamIconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

HamIconMenu.addEventListener('click', toogleMobileMenu);

function toogleMobileMenu(){

    const isAsideOClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideOClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
}

//funcion carrito
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

menuCarritoIcon.addEventListener('click', toogleCarritoAside);

function toogleCarritoAside(){

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}

//funcion producDetail
const productDetailContainer = document.querySelector('#productDetail');
const producDetailCloseIcon = document.querySelector('.product-detail-close');

producDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function openProductDetailAside(){

    shoppingCartContainer.classList.add('inactive');

    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

//productos
const cardsContainer = document.querySelector('.cards-container');

const producList = [];
producList.push({
    name: 'Bike',
    price: '120.000',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
producList.push({
    name: 'Bike',
    price: '120.000',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
producList.push({
    name: 'Bike',
    price: '120.000',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProduct(arr){
    for(product of arr){

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoDiv.append(productPrice, productName);
        productInfoFigure.appendChild(productImgCart);
        productInfo.append(productInfoDiv, productInfoFigure);
        productCard.append(productImg, productInfo);

        cardsContainer.appendChild(productCard);
    }
}

renderProduct(producList);
