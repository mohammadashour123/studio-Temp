$(function(){
 // $("html").niceScroll(); 
    
    $('.header').height($(window).height());
    
    $('.arrow').click(function(){
        $('html,body').animate({
            scrollTop:$('.feachers').offset().top 
        },1000);
    });
   
    $('.ourwork-btn').click(function(){
       
        $('.hidden').fadeToggle(1000);
        
        
    });
    var left = $('.left'),
        rigth=$('.right');
    function clients(){
        
        
        if ($('.client:first').hasClass('active')){
            
          left.fadeOut (); 
            
        }else
           left.fadeIn ();
        
        if ($('.client:last').hasClass('active')){
            
          rigth.fadeOut (); 
            
        }else
           rigth.fadeIn ();   
        
    }
    
    clients(); 
    
    $('.icon').click(function(){
        
       if ($(this).hasClass('right')){
           $('.active').fadeOut(200,function(){
               $(this).removeClass('active').next('.client').addClass('active').fadeIn();
               clients(); 
           }) ; 
       }else
           {
               $('.active').fadeOut(200,function(){
               $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
               clients(); 
           }) ; 
           }
        
        
        
        
    });
});