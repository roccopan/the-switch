$('button').on('click', function () {

	if ( $(this).hasClass('on') ) {
		// turn the light OFF using a class
		$(this).removeClass('on').addClass('off');

		// Change the test status
		$('.status').text('Who turned off the lights?!');

		// Now change the background-color
		$('body').removeClass('light').addClass('dark');
	}
	else if ( $(this).hasClass('off') ) {
		// Turn the light ON using a class
		$(this).removeClass('off').addClass('on');

		// Change the test status
		$('.status').text('It\'s so bright in here!');

		// Now change the background-color
		$('body').removeClass('dark').addClass('light');
	}
});