
$(document).ready(function(){

    /* Slider */
    $('#img-slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000
    
    });   

    $('#quotes-slider').slick({
        autoplay: true,
        autoplaySpeed: 6000
    
    });   

    /* fadeIn  */
    $(window).scroll( function(){
        $('.fade-in').each( function(i){            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_object ){                
                $(this).animate({'opacity':'1'},800);                    
            }            
        }); 
    });

});