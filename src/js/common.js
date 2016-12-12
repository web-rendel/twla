$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	$('.single-item').slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		slickPrev: false,
		adaptiveHeight: true,
		mobileFirst: true,
		infinite: true
	});




$('.slick-track').on('afterChange', function(event, slick, currentSlide){
  if (currentSlide == 5) {
    $('.sliderMain').slick('slickPause');
    myVideo.play();
  }
});

	$('.wraper-testimonials').slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false
	});

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".wraper-menu-mobile").slideToggle();
		return false;
	});

	$('.popup-with-logo-company').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

});
