/* ===================================================  

1. Modal function
2. Cowntdown timmer 
3. Subscribe Form
4. Contact Form
5. Youtube Background

 =================================================== */



jQuery(document).ready(function($) {
	
/* =================================================== */
/*                  1.Modal function 
/* =================================================== */
	$(".modal-body").mCustomScrollbar({
	   theme: "rounded-dots-dark"
	});



/* =================================================== */
/*                  6.Loader
/* =================================================== */




/* =================================================== */
/*                  2.Cowntdown timmer 
/* =================================================== */

  $('.counter').countdown('2017/01/20', function(event) {
        var offset = event.offset;
        $('#cday').text(offset.totalDays);
        $('#chours').text(''.concat(offset.hours < 10 ? '0' : '', offset.hours));
        $('#cminutes').text(''.concat(offset.minutes < 10 ? '0' : '', offset.minutes));
        $('#cseconds').text(''.concat(offset.seconds < 10 ? '0' : '', offset.seconds));
    });



/* =================================================== */
/*                 3.Subscribe Form
/* =================================================== */

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
                            email: 'Please enter a valid email address'
                        }
                    },

                    highlight: function(element, errorClass, validClass) {
                    $(element).addClass('form-error');
                        $(".form__button--subscribe").addClass('form-error');
                    },
                    unhighlight: function(element, errorClass, validClass) {
                    $(element).removeClass('form-error');
                        $(".form__button--subscribe").removeClass('form-error');
                    },
                    errorPlacement: function(error, element) {

                        offset = element.offset();
                        error.insertAfter(element)
                        error.addClass('error-message');  // add a class to the wrapper
                    },
                    

                });

    $('.sub__title').on('click', function(){
        $('.sub__content').toggleClass('sub__content--expanded');
    });



/* =================================================== */
/*                  4.Contact Form
/* =================================================== */

    var contact = $("#contact-form")
        contact.validate({    
                 rules: {
                        email: {
                            required: true,
                            email: true
                        }
                    },

                    messages: {
                        email: {
                            required: 'Please enter an email address',
                            email: 'Please enter a <em> valid </em> email address'
                        }
                    },

                    highlight: function(element, errorClass, validClass) {
                    $(element).addClass('form-error');
                        $(".form__button--contact").addClass('form-error');
                    },
                    unhighlight: function(element, errorClass, validClass) {
                    $(element).removeClass('form-error');
                        $(".form__button--contact").removeClass('form-error');
                    },
                    errorPlacement: function(error, element) {

                        offset = element.offset();
                        error.insertAfter(element)
                        error.addClass('error-message--contact');  // add a class to the wrapper
                        
                    },
                    
    });

    $.validator.methods.email = function( value, element ) {
        return this.optional( element ) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test( value );
    }



/* =================================================== */
/*                  5.Youtube Background
/* =================================================== */

     
    /*var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    
  
    if(isMobile.any()) {  
       var bg2 = $('#background2');
       if($.fn.backstretch && bg2.length){
            bg2.backstretch("images/about_thumb1.jpg");
       }  
    } else {
       var videobg = $('#video-background');
       if(videobg.length){
            videobg.YTPlayer({
                 fitToBackground: true,
                 videoId: 'zJ7hUvU-d2Q'
             }); 
       }   
    } 
    */


    particlesJS.load('particles-js', 'assets/particles.json', function() {
      console.log('callback - particles.js config loaded');
    }); 
          
});


/* =================================================== */
/*                  Main page tooltips
/* =================================================== */

add_tooltips();

/* =================================================== */
/*                  Make page scrollable
/* =================================================== */


checkSize();

$(window).resize(function(){
    checkSize();
});

function checkSize() {

    var media_queries = '(max-width: 768px), (max-height: 500px)';

    if (window.matchMedia(media_queries).matches) {

        $('html, body, .wrapper, .main-content').addClass('scrollable');

        $('[data-target="#about"]').tooltip("destroy");
        $('[data-target="#services"]').tooltip("destroy");
        $('[data-target="#contact"]').tooltip("destroy");

        $('.days').tooltip("destroy");
        $('.hours').tooltip("destroy");
        $('.minutes').tooltip("destroy");
        $('.seconds').tooltip("destroy");

    } else {
        $('html, body, .wrapper, .main-content').removeClass('scrollable');

        add_tooltips();
    }

}

function add_tooltips() {

    /* Navigation */
    $('[data-target="#about"]').tooltip({title: "About Us", placement: "top", delay: {show: 500, hide: 100} });
    $('[data-target="#services"]').tooltip({title: "Services", placement: "top", delay: {show: 500, hide: 100} });
    $('[data-target="#contact"]').tooltip({title: "Contact Us", placement: "top", delay: {show: 500, hide: 100} });

    /* Countdown */
    $('.days').tooltip({title: "days", placement: "bottom", delay: {show: 500, hide: 100} });
    $('.hours').tooltip({title: "hours", placement: "bottom", delay: {show: 500, hide: 100} });
    $('.minutes').tooltip({title: "minutes", placement: "bottom", delay: {show: 500, hide: 100} });
    $('.seconds').tooltip({title: "seconds", placement: "bottom", delay: {show: 500, hide: 100} });
    
}