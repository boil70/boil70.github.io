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
		if ($(window).width() < 752) {
			if ($(".st-nav").hasClass("menu-active")) {
				$("nav.st-nav").removeClass("menu-active");
				$("ul.menu").css("display", "none");
				$("body").attr("onresize", "chFx()");
			} else {
				$("nav.st-nav").addClass("menu-active");
				$("ul.menu").css("display", "block");
				$("body").attr("onresize", "chFx()");
			}
		}
	};



	$("#menu-toggle").click(function() {toggleMenu()});

	$("ul.menu a").click(function() {toggleMenu()});
});

chFx = function() {
	if ($(window).width() > 752) {
		$("nav.st-nav").removeClass("menu-active");
		$(".menu").removeAttr("style");
		$("body").removeAttr("onresize");
	}
}