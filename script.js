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

const swiper1 = new Swiper(".swiper1", {
    slidesPerView: 4,
    spaceBetween: 30,
    // freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: 'bullets',
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

const swiper2 = new Swiper(".swiper2", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination2",
        type: 'bullets',
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
