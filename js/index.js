console.log('Hello World');

let body = document.body;
let overlay = document.querySelector('.overlay');

let btnHamburger = document.querySelector('.hamburger');
let closeHamburger = document.querySelector('.close-hamburger-icon');
let dropdownMenu = document.querySelector('.dropdown-menu');

btnHamburger.addEventListener('click', function() {
  dropdownMenu.classList.add('active');
  overlay.classList.add('active');
  body.style.overflow = 'hidden';
});

closeHamburger.addEventListener('click', function() {
  dropdownMenu.classList.remove('active');
  overlay.classList.remove('active');
  body.style.overflow = '';
})

overlay.addEventListener('click', function () {
  dropdownMenu.classList.remove('active');
  overlay.classList.remove('active');
  body.style.overflow = '';
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}