$(document).ready(function() {
	
	function heightDetect() {
		$(".main_head").css("min-height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});
	
	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".top_mnu ul a").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").css("opacity", "1");
	}).append("<span>");

	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({
		type:"inline",
		midClick: true
	});


	$(".toggle_mnu").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".top_text").css("opacity", "1");
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").css("opacity", ".1");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
	});
	$(".title_section").animated("fadeInLeft", "fadeOutLeft");
	$(".content_us>p").animated("fadeInRight", "fadeOutRight");
	$(".content_us>span").animated("zoomIn", "zoomOut");
	$(".anim_tada").animated("zoomIn", "zoomOut");
	$(".animation_1").animated("fadeInLeft", "fadeOutLeft");
	$(".animation_2").animated("fadeInDown", "fadeOutUp");
	$(".animation_3").animated("fadeInRight", "fadeOutRight");
	$(".animation_4").animated("fadeInUp", "fadeOutDown");
	$(".animation_5").animated("zoomIn", "zoomOut");
	$(".tech_wrapp").animated("zoomIn", "zoomOut");
	
	$("input, select, textarea").jqBootstrapValidation();

	$(".top_mnu ul a").mPageScroll2id();

});
$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(1000).fadeOut("slow");

	// $(".top_text h1").animated("fadeInDown", "fadeOutUp");
	// $(".top_text p").animated("fadeInUp", "fadeOutDown");

}); 