// The switch is on, so turn it off!
$(document).on('click', 'button.on', function(e) {

	console.log('turn off!');
	$(this).removeClass('on').addClass('off');

	// Now what?
});

// The switch is off, so turn it on! 
$(document).on('click', 'button.off', function(e) {

	console.log('turn on!');
	$(this).removeClass('off').addClass('on');

	// Now what?
});