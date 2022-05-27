const navToggleButton = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.primary-navigation');
const tabList = document.querySelectorAll('.tab');
const indicatorList = document.querySelectorAll('.dot-indicator');
const numberList = document.querySelectorAll('.num-indicator');
// add fuctionality to nav button
navToggleButton.addEventListener('click', () => {
	navToggleButton.classList.toggle('open');
	navMenu.classList.toggle('open');
});

tabList.forEach((tab) => {
	tab.addEventListener('click', carousel);
});
indicatorList.forEach((dotIndicator) => {
	dotIndicator.addEventListener('click', carousel);
});

numberList.forEach((numIndicator) => {
	numIndicator.addEventListener('click', carousel);
});

function carousel(e) {
	const currentTab = e.target;
	const tabs = e.target.parentNode;
	const activeTab = [...tabs.children].filter((tab) =>
		tab.classList.contains('active')
	)[0];
	const carouselList = document.querySelectorAll('.carousel-inner');
	// remove active state;
	activeTab.classList.remove('active');
	// add active state;
	currentTab.classList.add('active');
	// get number inside current tab;
	const tabNumber = +currentTab.dataset.number;
	carouselList.forEach((carousel) => {
		sliding(carousel, tabNumber);
	});
}

function sliding(ele, num) {
	//get the width of single carousel item;
	const itemWidth = ele.firstElementChild.getBoundingClientRect().width;

	//the total displacement  length;
	const displacement = num * itemWidth;
	ele.style.transform = `translateX(${-1 * displacement}px)`;
}
