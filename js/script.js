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
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).removeClass('form-error');
        },
        errorPlacement: function(error, element) {

        },
        submitHandler: function(form) {
            subscribealert.html('<i class="fa fa-refresh fa-spin"></i> Success!!!');
            $.post("subscription.php", subscribeform.serialize(),
                function(data) {
                    var obj = jQuery.parseJSON(data);
                    subscribealert.html("<span class='" + obj.error + "'>" + obj.flash + "</span>");                    
                    if(obj.error != "error"){                       
                        subscribeform.trigger("reset");
                    }
                    
                    setTimeout(function(){
                        subscribealert.fadeOut("slow", function(){
                            subscribealert.html('').show();                         
                        });                       
                    }, 2000);
                });
            return false;
        }
        
    });

$(".btn-main").hover(function(){
        if(subscribeform == true){
            $(".btn-main").css("border-color", "#00FF42");
        }
        else{
             $(".btn-main").css("border-color", "red");
        }
        
        });

        $(".btn-main").focus(function(){
                if(subscribeform == true){
                    $(".btn-main").css("border-bottom-color", "#00FF42");
                }
                else{
                     $(".btn-main").css("border-bottom-color", "red");
                }
        });


   

    
});
