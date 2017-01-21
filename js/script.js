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

    $(".loader").delay(2500).fadeOut("slow");
    setTimeout( function() {
        $(".counter").addClass("loaded");
    }, 3000);

    setTimeout( function() {
        $(".header-info").addClass("loaded");
    }, 3400);

    setTimeout( function() {
        $(".subscribe").addClass("loaded");
    }, 3800);

    setTimeout( function() {
        $(".main-nav").addClass("loaded");
    }, 4200);
    


/* =================================================== */
/*                  2.Cowntdown timmer 
/* =================================================== */

  $('.counter').countdown('2017/01/27', function(event) {
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

           //Video background

           // $('#video').YTPlayer({
           //  videoId: 'yCwRLE5c9OM',
           //  fitToBackground: true,
           //  mute: true,
           //  repeat: true,
           //  pauseOnScroll: false,
           //  controls: 1,
           //  width: $(window).width(),
           //  wmode: 'opaque',
           //  playerVars: {
           //  start: 30
           //  }

           // });

    

    /* =================================================== */
    /*                  Particles
    /* =================================================== */

    if( $("#particles-js").length ){
        particlesJS.load('particles-js', 'js/particles.json', function() {
          console.log('callback - particles.js config loaded');
        });
    }
    
    if( $("#particles-snow-js").length ){
        particlesJS.load('particles-snow-js', 'js/particles-snow.json', function() {
          console.log('callback - particles.js config loaded');
        });
    }


    /* =================================================== */
    /*                  Kenburns
    /* =================================================== */

    if( $("#kenburns").length ) {

        var the_slides = new Array(
            "images/new_building.jpg",
            "images/old_building.jpg",
            "images/Covermainpage.jpg"
        );
          
        $('#kenburns').attr('width', $(window).width());
        $('#kenburns').attr('height', $(window).height());
          
        $('#kenburns').kenburned({
            images: the_slides,
            frames_per_second: 24,
            display_time: 8000,
            fade_time: 2000
        });

    }


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

