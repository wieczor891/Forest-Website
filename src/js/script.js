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
			}
		}
	} else if (document.body.classList.contains('offer-page')) {
		navItems.forEach((navItem) => navItem.classList.remove('active'));
		navItems[2].classList.add('active');
	} else if (document.body.classList.contains('contact-page')) {
		navItems.forEach((navItem) => navItem.classList.remove('active'));
		navItems[3].classList.add('active');
	}
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.textContent = year;
};

// Mapa Google

function initMap() {
	const Forest = { lat: 50.08831310990067, lng: 19.892898296257034 };
	const map = new google.maps.Map(document.getElementById('map'), {
		zoom: 10,
		center: Forest,
	});
	const marker = new google.maps.Marker({
		position: Forest,
		map: map,
	});
	const contentString = '<div id="content">Forest Group</div>';

	const infowindow = new google.maps.InfoWindow({
		content: contentString,
	});

	marker.addListener('click', () => {
		infowindow.open(map, marker);
	});
}

// Walidator formularza

const btnSubmit = document.querySelector('.btn-submit');
const btnClose = document.querySelector('.btn-close');
const acceptFormWindow = document.querySelector('.form-accept');
let errorCount = 0;

function formItem(input, alert) {
	this.input = input;
	this.alert = alert;
}

const firstNameItem = new formItem(
	document.querySelector('#first-name'),
	document.querySelector('.first-name-alert')
);
const lastNameItem = new formItem(
	document.querySelector('#last-name'),
	document.querySelector('.last-name-alert')
);
const phoneNumberItem = new formItem(
	document.querySelector('#phone-number'),
	document.querySelector('.phone-number-alert')
);
const emailItem = new formItem(
	document.querySelector('#mail'),
	document.querySelector('.mail-alert')
);
const questionItem = new formItem(
	document.querySelector('#question'),
	document.querySelector('.question-alert')
);

const formItems = [
	firstNameItem,
	lastNameItem,
	phoneNumberItem,
	emailItem,
	questionItem,
];

const sendForm = (e) => {
	e.preventDefault();
	checkForm();
};

const resetForm = () => {
	formItems.forEach((item) => {
		item.input.value = '';
		item.alert.style.display = 'none';
	});
};

const checkForm = () => {
	errorCount = 0;
	formItems.forEach((item) => {
		if (item.input.value === '') {
			item.alert.style.display = 'block';
			item.alert.textContent = 'Uzupełnij pole!';
			errorCount++;
		} else {
			item.alert.style.display = 'none';
			item.alert.textContent = '';
			checkPhoneNumber();
			checkEmail();
		}
	});
	if (errorCount == 0) {
		resetForm();
		positiveForm();
	}
};

const checkPhoneNumber = () => {
	const reg = /^[+]{0,1}[0-9]{9,11}$/;
	if (!reg.test(phoneNumberItem.input.value)) {
		phoneNumberItem.alert.textContent = 'Podaj prawidłowy numer telefonu';
		phoneNumberItem.alert.style.display = 'block';
		errorCount++;
	}
};

const checkEmail = () => {
	const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9.-]+.[a-z]{2,3}$/i;
	if (!reg.test(emailItem.input.value)) {
		emailItem.alert.style.display = 'block';
		emailItem.alert.textContent = 'Podaj prawidłowy adres e-mail';
		errorCount++;
	}
};

const positiveForm = () => {
	acceptFormWindow.classList.add('active');
};

const closeFormWindow = () => {
	acceptFormWindow.classList.remove('active');
};

window.addEventListener('scroll', scrollSpy);
linkClicked();
handleCurrentYear();
menuIcon.addEventListener('click', checkMenu);
window.initMap = initMap;
btnSubmit.addEventListener('click', sendForm);
btnClose.addEventListener('click', closeFormWindow);
