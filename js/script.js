jQuery(document).ready(function($) {
	
	/*  Modal settings  */
	$(".modal-body").mCustomScrollbar({
	   theme: "rounded-dots-dark"
	});

    /*  Countdown timmer  */
  $('.counter').countdown('2017/01/3', function(event) {
        var offset = event.offset;
        $('#cday').text(offset.totalDays);
        $('#chours').text(''.concat(offset.hours < 10 ? '0' : '', offset.hours));
        $('#cminutes').text(''.concat(offset.minutes < 10 ? '0' : '', offset.minutes));
        $('#cseconds').text(''.concat(offset.seconds < 10 ? '0' : '', offset.seconds));
    });

	/*  Subscribe Box  */ 
    var subscribeform = $('#subscribe-form');
    var subscribealert = $('#subscribe-form .alert-message');    
    
    subscribeform.validate({
        rules: {
            subscribe__email: {
                required: true,
                email: true
            }
        },
        highlight: function(element, errorClass, validClass) {
            $(element).addClass('form-error');
            $(".subscribe__button").addClass('form-error');
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).removeClass('form-error');
            $(".subscribe__button").removeClass('form-error');
        },
        errorPlacement: function(error, element) {

        }
    });



    /* Modal effect */

    /*$(document).on('click', function() {

        if( $('.modal-effect').hasClass('in') ) {

            $('.modal-effect').removeClass('out');

        } else {

            $('.modal-effect').addClass('out');
            
        };

    });*/
    
});
