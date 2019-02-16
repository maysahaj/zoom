$(document).ready(function(){
    
});
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots: true,
    nav:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:3,
        },
        1000:{
            items:5,
            loop:false
        }


    }
});
$(document).ready(function(){
    var scrollTop =0;
    $(window).scroll(function(){
        scrollTop = $(window).scrollTop();
        if (scrollTop > 100){
            $('.navbar').addClass ('scrollNav');
			$('.backToTop').addClass ('visible');
			
        }else if (scrollTop < 100){
            $('.navbar').removeClass('scrollNav');
			$('.backToTop').removeClass ('visible');
        };
    });
	$('.backToTop').click (function(){
		$('body , html').animate({
			scrollTop:0
		},800);
	});
});