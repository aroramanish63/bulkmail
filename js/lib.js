/*=================================*/
/* Square Slider (from https://squareup.com)
/* August 2012
/* By: Gilbert Pellegrom
/* http://dev7studios.com
/*=================================*/

(function($){

    $('.square-slider').each(function(){
        var slider = $(this),
            slides = slider.find('.slide'),
            currentSlide = 0;
            console.log(slides);
        slides.show();
        $(slides[currentSlide]).addClass('active');
        $('.next,.prev', slider).show();
            
        $('.prev', slider).on('click', function(){
            slides.removeClass('active');
            currentSlide--;
            if(currentSlide < 0) currentSlide = slides.length - 1;
            $(slides[currentSlide]).addClass('active');
            return false;
        });
        
        $('.next', slider).on('click', function(){
            slides.removeClass('active');
            currentSlide++;
            if(currentSlide > slides.length - 1) currentSlide = 0;
            $(slides[currentSlide]).addClass('active');
            return false;
        });
        
        setInterval(function(){
           $('.next', slider).trigger('click', function(){
            slides.removeClass('active');
            currentSlide++;
            if(currentSlide > slides.length - 1) currentSlide = 0;
            $(slides[currentSlide]).addClass('active');
            return false;
        });
        },3000);
    });

})(window.jQuery);