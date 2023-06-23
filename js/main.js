

const navbar_navigation = document.querySelector('.navbar__nav');
console.log(navbar_navigation);
const hamburger = document.querySelector('.hamburger');
console.log(hamburger);

hamburger.addEventListener('click', () => {
   navbar_navigation.classList.toggle('navbar__nav--open');
   hamburger.classList.toggle('hamburger--open');
})

navbar_navigation.addEventListener('click', () => {
   navbar_navigation.classList.remove('navbar__nav--open');
	hamburger.classList.remove('hamburger--open');
})