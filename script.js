const toggleBtn = document.querySelectorAll('.btn-toggle')[0];
const mobileNav = document.getElementById('mobile-nav');

addEventListener('click', () => {
    const cList = new Array(...mobileNav.classList);
    if (cList.includes('hidden')) {
        mobileNav.classList.replace('hidden', 'flex')
    } else if (cList.includes('flex')) {
        mobileNav.classList.replace('flex', 'hidden')
    }
});

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        "@1.00": {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        "@1.50": {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});
