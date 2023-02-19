@@include('_webp.js')

function come(elem) {
	var docViewTop = $(window).scrollTop(),
		docViewBottom = docViewTop + $(window).height(),
		elemTop = $(elem).offset().top,
		elemBottom = elemTop + $(elem).height();

	return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$('.slow-scroll').on('click', function() {
	let href = $(this).attr('href') || $(this).attr('data-href');
	let offset = $('.header').height() + 10;

	$('html, body').animate({
		scrollTop: $(href).offset().top - offset
	}, 800);
	setTimeout(function() {
		$('.sidebar').removeClass('sidebar_active');
		$('.header__burg').removeClass('header__burg_active');
	}, 900);
});

$(document).on('scroll', function() {
	if ( $(window).scrollTop() >= 20 )
		$('header').addClass('header_fixed');
	else
		$('header').removeClass('header_fixed');
});

$(document).ready(function() {
	$('.slider').slick({
		arrows: false,
		dots: true,
		initialSlide: 1,
	});

	$('.header__burg').on('click', function() {
		$(this).toggleClass('header__burg_active');
		$('.sidebar').toggleClass('sidebar_active');
		$('body').toggleClass('body_locked');
	});

	$(document).on('scroll', function() {
		
		if ( come('#intro') ) {
			$('.header__item').removeClass('header__item_active');
			$('.header__item[href="#intro"]').addClass('header__item_active');
		} else if (come('#about')) {
			$('.header__item').removeClass('header__item_active');
			$('.header__item[href="#about"]').addClass('header__item_active');
		} else if ( come('#intro') ) {
			$('.header__item').removeClass('header__item_active');
			$('.header__item[href="#intro"]').addClass('header__item_active');
		} else if (come('#about')) {
			$('.header__item').removeClass('header__item_active');
			$('.header__item[href="#about"]').addClass('header__item_active');
		} else if (come('#services')) {
			$('.header__item').removeClass('header__item_active');
			$('.header__item[href="#services"]').addClass('header__item_active');
		} else if (come('#portfolio')) {
			$('.header__item').removeClass('header__item_active');
			$('.header__item[href="#portfolio"]').addClass('header__item_active');
		} else if (come('#testimonials')) {
			$('.header__item').removeClass('header__item_active');
			$('.header__item[href="#testimonials"]').addClass('header__item_active');
		} else if (come('#contact')) {
			$('.header__item').removeClass('header__item_active');
			$('.header__item[href="#contact"]').addClass('header__item_active');
		}
	});

	let wow = new WOW({ mobile: false });

	wow.init();
});