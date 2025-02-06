console.log('Hello World');

let btnHamburger = document.querySelector('.hamburger');

btnHamburger.addEventListener('click', function() {
  this.classList.toggle('active');
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}