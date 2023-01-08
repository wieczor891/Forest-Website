const menu = document.querySelector('.mobile-menu');
const menuIcon = document.querySelector('.burger-icon');
const barsIcon = document.querySelector('.fa-bars');
const crossIcon = document.querySelector('.fa-xmark');
const footerYear = document.querySelector('.year');
const navItems = document.querySelectorAll('.nav-items a');
const sections = document.querySelectorAll('.section');

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

const scrollSpy = () => {
	if (document.body.classList.contains('default-page')) {
		for (let i = 0; i < sections.length; i++) {
			if (scrollY >= sections[i].offsetTop - 49) {
				navItems.forEach((navItem) => navItem.classList.remove('active'));
				navItems[i].classList.add('active');
				console.log(sections[i].offsetTop);
				console.log(scrollY);
			}
		}
	}
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.textContent = year;
};

window.addEventListener('scroll', scrollSpy);
linkClicked();
handleCurrentYear();
menuIcon.addEventListener('click', checkMenu);
