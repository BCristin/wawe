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
