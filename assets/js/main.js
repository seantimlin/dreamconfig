$(document).ready(function() {

	// FIXED NAV
	var navbar = $('.main-nav'),
	distance = navbar.offset().top + 55,
	$window = $(window);

	$window.scroll(function() {
		if ($window.scrollTop() >= distance) {
			navbar.removeClass('navbar-fixed-top').addClass('navbar-fixed-top');
			$('header').removeClass('header-fixed').addClass('header-fixed');
		} else {
			navbar.removeClass('navbar-fixed-top');
			$('header').removeClass('header-fixed');
			if($(".main-nav ul li a").is(":focus")) {
				$(".main-nav ul li a").blur();
			} 
		}
	});

	var team    = $('#about').offset().top - 100,
		work    = $('#work').offset().top - 100,
		contact = $('#contact').offset().top - 100,
	    view    = $(window);

	$( window ).resize(function() {
		team    = $('#about').offset().top - 100;
		work    = $('#work').offset().top - 100;
		contact = $('#contact').offset().top - 100;
	});

	$(window).scroll(function() {
	    if ( view.scrollTop() >= team && view.scrollTop() <= work) {
	       	$(".main-nav ul li a").blur(); 
			$(".main-nav ul li a.team").focus();
	    } else if ( view.scrollTop() >= work && view.scrollTop() <= contact) {
	       	$(".main-nav ul li a").blur(); 
			$(".main-nav ul li a.work").focus();
	    } else if ( view.scrollTop() >= contact ) {
	       	$(".main-nav ul li a").blur(); 
			$(".main-nav ul li a.contact").focus();
	    } else {
	    	$(".main-nav ul li a").blur(); 
	    }
	});

	// SCROLLTO
    $(".scroll").click(function(e){     
        e.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top }, 1000);
        $('.mobile-nav ul').toggleClass('show');
    });

	// PORFOLIO
	$('.portfolio-nav li a').on('click', function(e) {
		e.preventDefault();

		$('.portfolio-nav li a').removeClass('active');
		$(this).addClass('active');

		var category = $(this).attr('id');
		workExamples(category);

		return false;
	});

	function workExamples(category) {
		$('.work').each(function() {
			if ($(this).hasClass(category)) {
				$(this).show();
			} else {
				$(this).hide();
			}
		});
	}

	// NAVICON
	$("a.navicon-button").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("open");
		$('.mobile-nav ul').toggleClass('show');
		return false;
	});


	$('#contact-form').validate({
	    rules: {
	      name: {
	        minlength: 2,
	        required: true
	      },
	      email: {
	        required: true,
	        email: true
	      },
	      message: {
	        minlength: 2,
	        required: true
	      }
	    },
		highlight: function(element) {
			$(element).closest('.control-group').removeClass('success').addClass('error');
		},
		success: function(element) {
			element
			.text('OK!').addClass('valid')
			.closest('.control-group').removeClass('error').addClass('success');
		}
	});
});