const menu = document.querySelector('.mobile-menu');
const menuIcon = document.querySelector('.burger-icon');
const barsIcon = document.querySelector('.fa-bars');
const crossIcon = document.querySelector('.fa-xmark');
const footerYear = document.querySelector('.year');

const openMenu = () => {
	menu.classList.add('mobile-menu-active');
	crossIcon.classList.remove('anime-hide');
	barsIcon.classList.remove('anime-show');
	barsIcon.classList.add('anime-hide');
	crossIcon.classList.add('anime-show');
};

const closeMenu = () => {
	barsIcon.classList.remove('anime-hide');
	crossIcon.classList.remove('anime-show');
	barsIcon.classList.add('anime-show');
	crossIcon.classList.add('anime-hide');
	menu.classList.remove('mobile-menu-active');
	console.log('close');
};

const checkMenu = () => {
	if (menu.classList.contains('mobile-menu-active')) {
		closeMenu();
	} else {
		openMenu();
	}
};

const linkClicked = () => {
	const links = document.querySelectorAll('.mobile-menu a');
	links.forEach((link) => link.addEventListener('click', closeMenu));
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.textContent = year;
};

linkClicked();
handleCurrentYear();
menuIcon.addEventListener('click', checkMenu);
