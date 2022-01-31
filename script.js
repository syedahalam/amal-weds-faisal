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
