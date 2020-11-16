//show mobile menu
const navigation__btn = document.querySelector(".navigation__btn");
const mobileNav = document.querySelector(".navigation__collapse");
const navCollapse = document.querySelector('.navigation__collapse');
const nav = document.querySelector('.navigation');

navigation__btn.addEventListener("click", showMobileMenu);

function showMobileMenu() {
    mobileNav.classList.toggle("active");
    if (nav.classList.contains('nav-fixed')) {
        navCollapse.classList.add('color-white');
    } else {
        navCollapse.classList.remove('color-white');
    }
}

const links = document.querySelectorAll("a");
links.forEach((link) => {
    link.addEventListener("click", clickHandler)

});
function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
        top: offsetTop - 50,
        behavior: "smooth"
    });

}

//Change navigation style on scroll
window.addEventListener('scroll', event => {
    if (window.scrollY >= 44) {
        nav.classList.add('nav-fixed');

        if (mobileNav.classList.contains('active') && nav.classList.contains('nav-fixed')) {
            navCollapse.classList.add('color-white');
        }
    } else {
        nav.classList.remove('nav-fixed');
        navCollapse.classList.remove('color-white');
    }

});

//Active navigation on scroll
window.addEventListener('scroll', event => {

    let navigationLinks = document.querySelectorAll(".navigation .navigation__collapse .navigation__list--border .navigation__item a");

    let fromTop = window.scrollY;

    navigationLinks.forEach(link => {
        let section = document.querySelector(link.hash);

        if (
            section.offsetTop <= fromTop + 150 &&
            section.offsetTop + section.offsetHeight > fromTop + 150
        ) {
            link.parentNode.classList.add('active');
        } else {
            link.parentNode.classList.remove('active');
        }
    });
});