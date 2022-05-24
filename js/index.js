let nav_link = document.querySelectorAll('.nav_link')

nav_link.forEach((link) => {
    link.onclick = () => {
        hamburger.classList.remove('is-active')
        menu.classList.remove('active')
    }
})

let header = document.getElementById('header')

window.addEventListener('scroll', () => {
    header.style.background = window.pageYOffset > (header.offsetHeight) ? '#000' : ''
})

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


