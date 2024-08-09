$(document).ready(function() {
    "use strict";

	$(".burger_menu button").click(function() {
		$(this).toggleClass("active");
		$(this).parent().parent().find(".drop").slideToggle();
	});

	$("#closeBurger").click(function() {
		$(".burger").removeClass("active");
	});

	$(".header_wrap_mob_btn").click(function() {
		$(".burger").addClass("active");
	});

    $(".faq_block_right_item_head").click(function() {
		$(this).toggleClass("active");
		$(this).parent().find("p").slideToggle();
	});

	$(".price_list_item_top").click(function() {
		$(this).parent().toggleClass("active");
		$(this).parent().find(".price_list_item_hide").slideToggle();
	});

	$('.our_slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: true,
		infinite: true,
		cssEase: 'linear',
		arrows: true,
		prevArrow: $('.our_prev'),
		nextArrow: $('.our_next'),
		responsive: [
			{
				breakpoint: 1199,
				settings: {
				  slidesToShow: 3,
				  slidesToScroll: 1,
				  fade: false
				}
			},
		  {
			breakpoint: 1023,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 1,
			  fade: false
			}
		  },
		  {
			breakpoint: 767,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  },
		  {
			breakpoint: 575,
			settings: {
				fade: true,
				slidesToShow: 1,
				slidesToScroll: 1
			}
		  }
		]
	});

	$(".price_top_btn").click(function() {
		$(".price_top_btn").removeClass("active");
		$(this).addClass("active");
		var id = $(this).attr("data-target");
		$(".price_wrap").removeClass("active");
		$(`#${id}`).addClass("active");
	});

	$(".price_wrap_item_top").click(function() {
		$(this).toggleClass("active");
		$(this).parent().find(".price_wrap_item_body").slideToggle();
	});

	if ($(window).width() < 1024) {
		$('.service_single_doctors_sliders').slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			dots: true,
			infinite: true,
			cssEase: 'linear',
			arrows: false,
			responsive: [
			  {
				breakpoint: 1023,
				settings: {
				  slidesToShow: 2,
				  slidesToScroll: 1,
				  fade: false
				}
			  },
			  {
				breakpoint: 767,
				settings: {
				  slidesToShow: 1,
				  fade: true,
				  slidesToScroll: 1
				}
			  }
			]
		});
	}

	$('.licenses_slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: true,
		infinite: true,
		cssEase: 'linear',
		arrows: true,
		prevArrow: $('.licenses_prev'),
		nextArrow: $('.licenses_next'),
		responsive: [
		  {
			breakpoint: 1023,
			settings: {
			  slidesToShow: 3,
			  slidesToScroll: 1,
			  fade: false
			}
		  },
		  {
			breakpoint: 767,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 1
			}
		  },
		  {
			breakpoint: 575,
			settings: {
				fade: true,
				slidesToShow: 1,
				slidesToScroll: 1
			}
		  }
		]
	});

	$('.photo_slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		fade: true,
		infinite: true,
		cssEase: 'linear',
		arrows: true,
		prevArrow: $('.photo_prev'),
		nextArrow: $('.photo_next')
	});

	$('.clinic_row_img_slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		fade: true,
		infinite: true,
		cssEase: 'linear',
		arrows: true,
		prevArrow: $('.clinic_prev'),
		nextArrow: $('.clinic_next')
	});

	$('.licenses_slider').magnificPopup({
		delegate: 'a',
		type: 'image',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
	});

	$('.photo_slider').magnificPopup({
		delegate: 'a',
		type: 'image',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
	});

});