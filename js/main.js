// The switch is on, so turn it off!
$(document).on('click', 'button.on', function(e) {

	console.log('turn off!');
	$(this).removeClass('on').addClass('off');

	$('.status').text('Who turned off the lights?!');
});

// The switch is off, so turn it on! 
$(document).on('click', 'button.off', function(e) {

	console.log('turn on!');
	$(this).removeClass('off').addClass('on');

	$('.status').text('It\'s so bright in here!');
});