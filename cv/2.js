$(function(){
    vitricontact=$('#contact').offset().top -200;
    vitrieducation=$('#education').offset().top -200;
    vitriskills=$('#skills').offset().top -200;
    vitriexperience=$('#experience').offset().top -200;
    vitritakenproject=$('#taken project').offset().top -200;
    vitricertificationst=$('#certifications').offset().top;

    console.log(vitricontact);
 
      $(".c").click(function()
      {
          $('body,html').animate({scrollTop:vitricontact},700);
          return false;
      })
 
 
      $(".ed").click(function()
      {
          $('body,html').animate({scrollTop:vitrieducation},700);
          return false;
      })
 
      $(".sk").click(function()
      {
          $('body,html').animate({scrollTop:vitriskills},700);
          return false;
      })
 
      $(".ex").click(function()
      {
          $('body,html').animate({scrollTop:vitriexperience},700);
          return false;
      })

      
      $(".ta").click(function()
      {
          $('body,html').animate({scrollTop:vitritakenproject},700);
          return false;
      })

      $(".ce").click(function()
      {
          $('body,html').animate({scrollTop:vitricertificationst},700);
          return false;
      })


 })  
  