var firstScreenSlidersAnimationSpeed = 1500;
var firstScreenSlidersChangeSlidesTime = 3000;

var firstScreenLeftSlider = $('.firstScreen__slider--left');
	firstScreenLeftSlider.slick({
	autoplay: false,
	initialSlide: 0,
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	speed: firstScreenSlidersAnimationSpeed,
	arrows: false,
	dots: false,
	pauseOnHover: false,
	pauseOnFocus: false,
	verticalSwapping: false,
	draggable: false,
	swipe: false,
	touchMove: false,
	fade: false,

	vertical: true,
});

var firstScreenRightSlider = $('.firstScreen__slider--right');
	firstScreenRightSlider.slick({
	autoplay: false,
	initialSlide: 0,
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	speed: firstScreenSlidersAnimationSpeed,
	arrows: false,
	dots: true,
	pauseOnHover: false,
	pauseOnFocus: false,
	verticalSwapping: false,
	draggable: false,
	swipe: false,
	touchMove: false,
	fade: false,


	vertical: true,
	onInit: startFirstScreenSliders()


});

function firstScreenChangeSlides() {
	firstScreenLeftSlider.slick('slickPrev');
	firstScreenRightSlider.slick('slickNext');
}

function startFirstScreenSliders() {
	setInterval(function () {
		firstScreenChangeSlides();
	}, firstScreenSlidersChangeSlidesTime);
}


new WOW().init();
