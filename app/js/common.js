$(document).ready(function() {

		$(' h2').animated('fadeInLeft');
		$('.car img').animated('fadeIn');
		$('.fast h3').animated('fadeInRight');
		$('.fast p').animated('fadeInRight');
		$('.engine h3').animated('fadeInLeft');
		$('.engine p').animated('fadeInLeft');
		$('.ttx-item').each(function(){
			$(this).animated('fadeInDown');
		});
		$('.design h3').animated('fadeInDown');
		$('.design p').animated('fadeInUp');
		$('.design img').each(function(){
			$(this).animated('fadeInLeft');
		});
		$('footer').animated('slideInUp');

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	$('.button').click(function(){
		// var h = $(document).scrollTop();
		// $(document).scrollTop(h);
		my_scroll();
	});
	function my_scroll() {
		var h = $(document).scrollTop();
		h += 5;
		$(document).scrollTop(h);
		if(h < 684) {
			setTimeout(my_scroll, 2);
		}
	}

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

});
