jQuery(document).ready(function($) {
	
	// Modal settings
	$(".modal-body").mCustomScrollbar({
	   theme: "rounded-dots-dark"
	});

 // Countdown timmer
  $('.counter').countdown('2016/12/25', function(event) {
        var offset = event.offset;
        $('#cday').text(offset.totalDays);
        $('#chours').text(''.concat(offset.hours < 10 ? '0' : '', offset.hours));
        $('#cminutes').text(''.concat(offset.minutes < 10 ? '0' : '', offset.minutes));
        $('#cseconds').text(''.concat(offset.seconds < 10 ? '0' : '', offset.seconds));
    });

	
});


