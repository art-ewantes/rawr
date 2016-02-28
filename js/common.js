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
	$(".animation_5").animated("fadeInUp", "fadeOutDown");
	$(".tech_wrapp").animated("zoomIn", "zoomOut");
	$(".portfolio_titile").animated("fadeInUp", "fadeOutDown");
	$(".size_media1").animated("fadeInRight", "fadeOutRight");
	$(".size_media2").animated("fadeInRight", "fadeOutRight");
	$(".size_media3").animated("fadeInRight", "fadeOutRight");
	$(".size_media4").animated("fadeInRight", "fadeOutRight");
	$(".size_media5").animated("fadeInRight", "fadeOutRight");
	$(".size_media6").animated("fadeInRight", "fadeOutRight");
	$(".img_right").animated("fadeInRight", "fadeOutRight");
	$(".section_header").animated("fadeInUp", "fadeOutDown");
	$(".about_animated_left").animated("fadeInLeft", "fadeOutLeft");
	$(".about_animated_pulse").animated("pulse");
	$(".about_animated_left").animated("fadeInLeft", "fadeOutLeft");
	$(".about_animated_right").animated("fadeInLeft", "fadeOutLeft");
	$(".cont_descr_about_right").animated("fadeInRight", "fadeOutRight");
	$(".cont_descr_about_left").animated("fadeInLeft", "fadeOutLeft");
	$(".cont_descr_about_pulse").animated("pulse");
	
	$("input, select, textarea").jqBootstrapValidation();

	$(".top_mnu ul a").mPageScroll2id();
	$(".s_contacts .back_to_top a").mPageScroll2id();

	$('#home a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	})




});
$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(600).fadeOut("slow");

	// $(".top_text h1").animated("fadeInDown", "fadeOutUp");
	// $(".top_text p").animated("fadeInUp", "fadeOutDown");

}); 