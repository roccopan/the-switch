// The switch is on, so turn it off!
$(document).on('click', 'button.on', function(e) {

	console.log('turn off!');

	// turn the light OFF using a class
	$(this).removeClass('on').addClass('off');

	// Change the test status
	$('.status').text('Who turned off the lights?!');

	// Now change the background-color
	$('body').removeClass('light').addClass('dark');
});

// The switch is off, so turn it on! 
$(document).on('click', 'button.off', function(e) {

	console.log('turn on!');

	// Turn the light ON using a class
	$(this).removeClass('off').addClass('on');

	// Change the test status
	$('.status').text('It\'s so bright in here!');

	// Now change the background-color
	$('body').removeClass('dark').addClass('light');
});