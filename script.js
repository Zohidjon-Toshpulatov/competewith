const toggleBtn = document.querySelectorAll('.btn-toggle')[0];
const mobileNav = document.getElementById('mobile-nav');

addEventListener('click', () => {
    const cList = new Array(...mobileNav.classList);
    if (cList.includes('hidden')) {
        mobileNav.classList.replace('hidden', 'flex')
    } else if (cList.includes('flex')) {
        mobileNav.classList.replace('flex', 'hidden')
    }
})