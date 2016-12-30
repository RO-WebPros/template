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

    /*Subscribe-form*/

    var subscribe = $("#subscribe-form")

        subscribe.validate({
                    rules: {
                        subscribe__email: {
                            required: true,
                            email: true
                        }
                    },
                    messages: {
                        subscribe__email:{
                            required: "Please enter an email address",
                            email: 'Please enter a <em> valid </em> email address'
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

                        offset = element.offset();
                        error.insertAfter(element)
                        error.addClass('error-message');  // add a class to the wrapper
                    },
                    

                });


    /*Contact-form*/
    var contact = $("#contact-form")
        contact.validate({    
                 rules: {
                        email: {
                            required: true,
                            email: true
                        },
                        
                        // name: {
                        //     required: true,
                        //     nowhitespace: true,
                        //     lettersonly: true
                        // }
                    },

                    messages: {
                        email: {
                            required: 'Please enter an email address',
                            email: 'Please enter a <em> valid </em> email address'
                        },
                    },

                    highlight: function(element, errorClass, validClass) {
                    $(element).addClass('form-error');
                        $(".contact__button").addClass('form-error');
                    },
                    unhighlight: function(element, errorClass, validClass) {
                    $(element).removeClass('form-error');
                        $(".contact__button").removeClass('form-error');
                    },
                    errorPlacement: function(error, element) {

                        offset = element.offset();
                        error.insertAfter(element)
                        error.addClass('error-message--contact');  // add a class to the wrapper
                        
                    },
                    
    });   

        var error_name = false;

        function check_username(){
            var username_lenght = $("#name").val().lenght;

            if (username_lenght < 5 || username_lenght > 20) {
                $(".alert-message").html("Should be between 5-20 characters");
                $(".alert-message").show();
                error_name = true;
            } else {
                $(".alert-message").hide();
            }



        }

$.validator.methods.email = function( value, element ) {
                     return this.optional( element ) || /[a-z]+@[a-z]+\.[a-z]+/.test( value );
                    }

});