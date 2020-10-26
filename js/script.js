if (window.SimpleSlide) {
    new SimpleSlide({
        slide: "carousel",
        time: 6000,
        nav: true,
    });
}

if (window.SimpleSlide) {
    new SimpleSlide({
        slide: "carousel-colecao-1",
        time: 4000,
        nav: false,
    });
}

if (window.SimpleSlide) {
    new SimpleSlide({
        slide: "carousel-colecao-2",
        time: 4000,
        nav: false,
    });
}

if (window.SimpleSlide) {
    new SimpleSlide({
        slide: "carousel-insta",
        time: 4000,
        nav: true,
    });
}

// Abrir Submenu
const menuCachorros = document.querySelector('a[href="#cachorros"]');
const subMenu = document.querySelector('.submenu');


function toggleSubMenu(){
    subMenu.classList.toggle('submenuOpen');
}

menuCachorros.addEventListener('click', toggleSubMenu);