// Make MOBILE nav work

const btnNav = document.querySelector('.btn-mobile-nav');
const headerNav = document.querySelector('.header');

btnNav.addEventListener('click', function () {
	headerNav.classList.toggle('.nav-open');
});

////////////////////smooth scrolling animation/////////////
const allLinks = document.querySelectorAll('a:link');
console.log(allLinks);
allLinks.forEach(function (link) {
	link.addEventListener('click', function (e) {
		e.preventDefault();
		const href = link.getAttribute('href');
		console.log(href);

		/////scroll back to top/////////////////
		if (href === '#')
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		if (href !== '#' && href.startsWith('#')) {
			const sectionEl = document.querySelector(href);
			// console.log(sectionEl);
			sectionEl.scrollIntoView({ behavior: 'smooth' });
		}
		///////////////////close mobile nav////////////
		if (link.classList.contains('main-nav-link'))
			headerNav.classList.toggle('nav-open');
	});
});

// timer////////////
const countDown = () => {
	const countDate = new Date('June 05, 2022 16:00:00').getTime();
	// console.log(countDate);
	const now = new Date().getTime();

	const gap = countDate - now;

	const seconds = 1000;

	const minutes = seconds * 60;
	const hours = minutes * 60;
	const days = hours * 24;

	const textDays = Math.floor(gap / days);
	const textHours = Math.floor((gap % days) / hours);
	const textMinutes = Math.floor((gap % hours) / minutes);
	const textSeconds = Math.floor((gap % minutes) / seconds);

	document.querySelector('.days').innerText = textDays;
	document.querySelector('.hours').innerText = textHours;
	document.querySelector('.minutes').innerText = textMinutes;
	document.querySelector('.seconds').innerText = textSeconds;
	// console.log(gap);
};
// console.log(textSeconds);
setInterval(countDown, 1000);
