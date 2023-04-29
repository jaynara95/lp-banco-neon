var swiper = new Swiper(".slide-depoimentos", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".s-depoimentos .top .swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1.3,
            spaceBetween: 16
        },
        600: {
            slidesPerView: 2.3,
            spaceBetween: 15
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});

AOS.init({
    duration: 1000,
    once: true
});

/*******************************  
Js de funcionalidade do projeto
********************************/

const btnDropdown = document.querySelector('.js-btn-dropdown');
const dropdown = document.querySelector('.js-dropdown');
const header = document.getElementById('js-header');
const btnMenu = document.getElementById('js-btn-menu-mobile');
const overlayMenu = document.querySelector('.js-overlay');

function openDropdown(e) {
    e.preventDefault();
   dropdown.classList.toggle('active');
    
}

btnDropdown.addEventListener('click', openDropdown);
dropdown.addEventListener('mouseleave', openDropdown);

function fixedMenu() {
    if(window.pageYOffset > 80) {
        header.classList.add('fixed-menu')
    } else {
        header.classList.remove('fixed-menu');
    }
}

document.addEventListener('scroll', fixedMenu);

function openMenuMobile() {
   document.documentElement.classList.toggle('menu-opened'); 
}

btnMenu.addEventListener('click', openMenuMobile);
overlayMenu.addEventListener('click', openMenuMobile);