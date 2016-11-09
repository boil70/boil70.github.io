$(document).ready(function() {


	$(".ft-wrap").slick({
		infinite: true,
		dots: true,
		fade: true,
		arrows: false,
		draggable: false,
		speed: 700,
		// autoplay: true,
		autoplaySpeed: 5000
	});

	$(".slick-dots li").click(function() {
		setTimeout(function() {
			$(".sl-sh").removeClass("animated");
		}, 1000);
		$(".sl-sh").addClass("animated", "");
	});


	function toggleMenu() {
		if ($(".st-nav").hasClass("menu-active")) {
			$("nav.st-nav").removeClass("menu-active");
			// $("nav.st-nav").css("padding-bottom", "10px");
			$("ul.menu").css("display", "none");
		} else {
			$("nav.st-nav").addClass("menu-active");
			// $("nav.st-nav").css("padding-bottom", "0");
			$("ul.menu").css("display", "block");
		}
		// $("ul.menu").toggle();
	};

	$("#menu-toggle").click(function() {toggleMenu()});

	$("ul.menu a").click(function() {toggleMenu()});


});


