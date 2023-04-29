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

const btnDropdown = document.querySelector('.js-btn-dropdown');
const dropdown = document.querySelector('.js-dropdown');

function openDropdown(e) {
    e.preventDefault();
   dropdown.classList.toggle('active');
    
}

btnDropdown.addEventListener('click', openDropdown);
dropdown.addEventListener('mouseleave', openDropdown);