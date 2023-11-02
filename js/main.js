$(function () {
	$('.blog__slider').slick({
		arrows: false,
		dots: true,
	});
	var mixer = mixitup('.gallery__photos');
});

Fancybox.bind('[data-fancybox]', {
	// Your custom options
});

const btn = document.querySelector('.menu__btn-burgher');
const nav = document.querySelector('.header__nav');
if (btn) {
	btn.addEventListener('click', () => {
		nav.classList.toggle('open');
	});
}
