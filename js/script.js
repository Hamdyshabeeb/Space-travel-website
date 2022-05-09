const navToggleButton = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.primary-navigation');

// add fuctionality to nav button
navToggleButton.addEventListener('click', () => {
	navToggleButton.classList.toggle('open');
	navMenu.classList.toggle('open');
});
