const navToggleButton = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.primary-navigation');

navToggleButton.addEventListener('click', () => {
	navToggleButton.classList.toggle('open');
	navMenu.classList.toggle('open');
});
