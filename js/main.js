jQuery(document).ready(function () {
    "use strict"
    $('.slider').ripples({
        dropRadius: 12,
        perturbance: 0.01,
    
      });

      var typed = new Typed('.text', {
        // Waits 1000ms after typing "First"
        strings: ['Love to<strong class="primary"> code?</strong>', 'Here you <strong class="primary"> start.</strong'],
        typespeed:0,
        loop:true,
        autoInsertCss:true
      });


      $(window).scroll(function(){
          var top = $(window).scrollTop();

          if(top >= 60){
              $("nav").addClass('secondary');
          }
          else
           if($("nav").hasClass('secondary')){
            $("nav").removeClass('secondary');

          }
      });


      $('.work').magnificPopup({
        delegate: 'a', 
        // child items selector, by clicking on it popup will open
        gallery: {
            enabled: true
          },
        type: 'image',
       
        // other options
      });


     
        $("#team-members").owlCarousel({
            items:3,
            autoplay: true,
            smartSpeed: 700,
            loop:true,
            autoplayHoverPause:true,
          
        });

   
        $('.counter').counterUp({
          delay: 10,
          time: 2000
      });

      $('a.smooth-scroll').smoothScroll();
      

         
      
});