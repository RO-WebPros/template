jQuery(document).ready(function($) {
	
	/*  Modal settings  */
	$(".modal-body").mCustomScrollbar({
	   theme: "rounded-dots-dark"
	});

    /*  Countdown timmer  */
  $('.counter').countdown('2016/12/25', function(event) {
        var offset = event.offset;
        $('#cday').text(offset.totalDays);
        $('#chours').text(''.concat(offset.hours < 10 ? '0' : '', offset.hours));
        $('#cminutes').text(''.concat(offset.minutes < 10 ? '0' : '', offset.minutes));
        $('#cseconds').text(''.concat(offset.seconds < 10 ? '0' : '', offset.seconds));
    });

	/*  Subscribe Box  */ 
    var newsletterform = $('.newsletter-form');
    var newsletteralert = $('.newsletter-form .alert-message');    
    newsletterform.validate({
        rules: {
            newsletter_email: {
                required: true,
                email: true
            }
        },
        highlight: function(element, errorClass, validClass) {
            $(element).addClass('form-error');
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).removeClass('form-error');
        },
        errorPlacement: function(error, element) {

        },
        submitHandler: function(form) {
            newsletteralert.html('<i class="fa fa-refresh fa-spin"></i> Success!!!');
            $.post("subscription.php", newsletterform.serialize(),
                function(data) {
                    var obj = jQuery.parseJSON(data);
                    newsletteralert.html("<span class='" + obj.error + "'>" + obj.flash + "</span>");                    
                    if(obj.error != "error"){                       
                        newsletterform.trigger("reset");
                    }
                    
                    setTimeout(function(){
                        newsletteralert.fadeOut("slow", function(){
                            newsletteralert.html('').show();                         
                        });                       
                    }, 2000);
                });
            return false;
        }
    });



    
});




   