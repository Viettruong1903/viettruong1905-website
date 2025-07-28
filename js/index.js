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





// Append it to the container
// document.getElementById('popup-container').appendChild(clone);

// const popupContainer = document.querySelector('#popup-container');

// Get the template
const template = document.getElementById('popup');
const templateBtn = document.getElementById('templateBtn');

templateBtn.addEventListener('click', function() {

  // Clone the template content
  const clone = template.content.cloneNode(true);

  document.getElementById('popup-container').appendChild(clone);
  overlay.classList.add('active');
  body.style.overflow = 'hidden';

  const templateClose = document.getElementById('templateClose');
  templateClose.addEventListener('click', function() {
    document.getElementById('popup-container').innerHTML='';
    overlay.classList.remove('active');
    body.style.overflow = '';
    // console.log('hello');
  })
})

