/*=============== SHOW MODAL ===============*/
const modal = document.getElementById('promotion__modal');
modal.addEventListener('click', function (e) {
	e.preventDefault();
	Swal.fire({
		imageUrl: 'assets/img/action.jpg',
		imageWidth: 380,
		imageHeight: 320,
		imageAlt: 'Custom image',
		showCloseButton: true,
		showCancelButton: false,
		showConfirmButton: false,
		buttonsStyling: false,
	});
});

/*=============== SHOW NAVMENU ===============*/
const navMenu = document.getElementById('nav-menu'),
	navToggle = document.getElementById('nav-toggle'),
	navClose = document.getElementById('nav-close');

/*===== NAVMENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show-menu');
	});
}

/*===== NAVMENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show-menu');
	});
}

/*=============== REMOVE NAVMENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
	const navMenu = document.getElementById('nav-menu');
	// When we click on each nav__link, we remove the show-menu class
	navMenu.classList.remove('show-menu');
};
navLink.forEach((n) => n.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
	const header = document.getElementById('header');
	// When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
	this.scrollY >= 50
		? header.classList.add('bg-header')
		: header.classList.remove('bg-header');
};
window.addEventListener('scroll', scrollHeader);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
	const scrollUp = document.getElementById('scroll-up');
	// When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350
		? scrollUp.classList.add('show-scroll')
		: scrollUp.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
	const scrollY = window.pageYOffset;

	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight,
			sectionTop = current.offsetTop - 58,
			sectionId = current.getAttribute('id'),
			sectionsClass = document.querySelector(
				'.nav__menu a[href*=' + sectionId + ']'
			);

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			sectionsClass.classList.add('active-link');
		} else {
			sectionsClass.classList.remove('active-link');
		}
	});
};
window.addEventListener('scroll', scrollActive);

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
	document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
	themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

// We validate if the user previously chose a topic
if (selectedTheme) {
	// If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
	document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
		darkTheme
	);
	themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](
		iconTheme
	);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
	// Add or remove the dark / icon theme
	document.body.classList.toggle(darkTheme);
	themeButton.classList.toggle(iconTheme);
	// We save the theme and the current icon that the user chose
	localStorage.setItem('selected-theme', getCurrentTheme());
	localStorage.setItem('selected-icon', getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
	origin: 'top',
	distance: '60px',
	duration: 2500,
	delay: 400,
	reset: true, //Animations repeat
});

sr.reveal(
	'.home__img, .newsletter__container, .footer__logo, .footer__description, .footer____title, .footer__links, .footer__info'
);
sr.reveal('.home__data, .order', { origin: 'bottom' });
sr.reveal('.recently__data', { origin: 'right' });
sr.reveal('.recently__img, .pizza__layers', {
	origin: 'left',
});
sr.reveal('.menu__data__block', { interval: 100 });

/*============== SHOW MENU LIST ===================*/
const pizzaItems = [
	{
		id: 1,
		name: '4 Сири',
		price: 216,
		description:
			'Cоус вершковий, сир моцарела, сир дор блю, сир королівський, сир пармезан',
		category: 'vegan',
	},
	{
		id: 2,
		name: 'Піца з грушею',
		price: 202,
		description:
			'Соус вершковий, сир моцарела, сир дор блю, груша, горіх	грецький',
		category: 'vegan',
	},
	{
		id: 3,
		name: 'Базиліца',
		price: 182,
		description:
			'Соус вершковий, сир моцарела, сир фета, помідори, маслини, соус песто',
		category: 'vegan',
	},
	{
		id: 4,
		name: 'Супрім',
		price: 165,
		description:
			'Соус томатний, сир моцарела, помідори черрі, сир пармезан, рукола',
		category: 'vegan',
	},
	{
		id: 5,
		name: 'Маргарита',
		price: 136,
		description: 'Соус томатний, сир моцарела, помідори',
		category: 'vegan',
	},
	{
		id: 6,
		name: 'Гавайська',
		price: 165,
		description: 'Соус вершковий, сир моцарела, ананас, кукурудза, маслини',
		category: 'vegan',
	},
	{
		id: 7,
		name: 'Аморе',
		price: 201,
		description:
			'Cоус вершковий, сир моцарела, помідори черрі, кукурудза, рукола, сир пармезан',
		category: 'vegan',
	},
	{
		id: 8,
		name: 'Галицька',
		price: 201,
		description:
			'Томатна основа, моцарела, шинка, кукурудза, помідори черрі, халапеньо, перепелине яйце',
		category: 'meat',
	},
	{
		id: 9,
		name: 'Чізбургер',
		price: 179,
		description:
			'Соус томатний, сир моцарела, бекон, помідори, огірки мариновані, цибуля, гірчиця',
		category: 'meat',
	},
	{
		id: 10,
		name: 'Капрічоза',
		price: 194,
		description: 'Соус томатний, сир моцарела, шинка, салямі, гриби, помідори',
		category: 'meat',
	},
	{
		id: 11,
		name: 'Папероні',
		price: 189,
		description: 'Соус томатний, сир моцарела, папероні',
		category: 'meat',
	},
	{
		id: 12,
		name: 'Цезар',
		price: 207,
		description:
			'Cоус томатний, сир моцарела, куряче філе, перепелині яйця, сир пармезан, сезонний салат, помідори черрі',
		category: 'meat',
	},
	{
		id: 13,
		name: 'Козацька',
		price: 203,
		description:
			'Cоус томатний, сир моцарела, шинка, салямі, мисливські ковбаски, огірки мариновані цибуля , чилі',
		category: 'meat',
	},
	{
		id: 14,
		name: 'Прошуто Фунгі',
		price: 119,
		description: 'Соус томатний, сир моцарела, гриби, шинка',
		category: 'meat',
	},
];
const vegan = document.querySelector('.vegan');
const meat = document.querySelector('.meat');

if (pizzaItems.length > 0) {
	pizzaItems.map((item) => {
		if (item.category === 'vegan') {
			vegan.innerHTML += `<li>
									<div class="item">
										<span class="item__name">${item.name}</span>
										<span class="item__price">${item.price} грн. <i class="add-to-cart fa-solid fa-circle-plus" data-name="${item.name}" data-price="${item.price}"></i></span>
									</div>
									<div class="item__description">
										${item.description}
									</div>
								</li>`;
		} else if (item.category === 'meat') {
			meat.innerHTML += `<li>
									<div class="item">
										<span class="item__name product-name">${item.name}</span>
										<span class="item__price product-price">${item.price} грн. <i class="add-to-cart fa-solid fa-circle-plus" data-name="${item.name}" data-price="${item.price}" data-action="add-to-cart"></i></span>
									</div>
									<div class="item__description">
										${item.description}
									</div>
								</li>`;
		}
	});
}
