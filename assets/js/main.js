// SHOW MENU
let navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

// MENU SHOW
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// MENU HIDDEN
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('nav-menu')
const linkAction = () => {
    // when nav___link is clicked, remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach( n => n.addEventListener('click', linkAction))

// blured out header
let blurHeader = () => {
    let header = document.getElementById('header');
    // if scroll is >50 viewport height. add the blur-header class to the header tag.
    this.scrollY >= 50 ? header.classList.add('blur-header')
                        : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

//Swiper favorites
let swiperFavorite = new Swiper ('.favorite__swiper', {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
    grabCursor: true,

    breakpoints: {
        768:{
            slidesPerView: 3, 
        }
    }
  
})

// show the scroll-up
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}

// Scroll sections active link
const sections = document.querySelectorAll('section[id]')
const scrollActive = () => {
    const scrollDown = window.scrollY
    sections.forEach(current => {
        const sectionsHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector ('.nav_menu a[href*=' + sectionId + ']')
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionsHeight){
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollUp)

//scroll animation 
const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 3500,
    delay: 400,
    reset: true, // animations repeat
})
sr.reveal('.home__social, .favorite__container, .sponsor__container, .footer');
sr.reveal('.home__title span:nth-child(1)', { origin: 'left', opacity: 1 });
sr.reveal('.home__title span:nth-child(3)', { origin: 'right', opacity: 1 });
sr.reveal('.home__tooltip, .home__button, .model__button', { origin: 'bottom'});
sr.reveal('.about__data', { origin: 'left'});
sr.reveal('.about__img, .model__tooltip', { origin: 'right'});
