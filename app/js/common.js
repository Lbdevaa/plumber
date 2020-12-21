$(function() {
  //input mask phone
  $("input[name*='phone']").inputmask("+7 (999) 999-99-99");

  // accordion
  for (let item of document.querySelectorAll('.accordion__title')) {
    item.addEventListener('click', function () {
      this.nextElementSibling.classList.toggle('active');
      this.classList.toggle('active');
    });
  }
  // popup
  $(".open-popup").magnificPopup({
    type: "inline",
    midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
  });

  $(".open-service").click(function (){
    let serviceName =  $(this).parent().children('.service__name').text();
    $('#call-service .popup-call__title span').text(serviceName);
  });

  $(".open-single-service").click(function (){
    let serviceName =  $(this).parent().parent().children('.banner__title').text();
    $('#call-service .popup-call__title span').text(serviceName);
  });
   

  

  //burger
  $(".burger").click(function () {
    $(this).toggleClass("active");
    $(".mobile-menu").fadeToggle();
    $(".mobile-menu").toggleClass('active');
    $('body').toggleClass('fixed');
  });
  
  $(".mobile-menu__url").click(function () {
    $(".mobile-menu").removeClass('active');
    $(".mobile-menu").fadeToggle();
    $('body').removeClass('fixed');
    $(".burger").removeClass("active");
  });
 

  //sliders

  $('.works-slider').owlCarousel({
    dots: false, 
    responsive: {
        0:{
            items:1, 
            nav: false,
            stagePadding: 40,
            margin: 20, 
        }, 
        1200:{
            nav: true,
            items:3,
            margin:40,
            loop: true,
        }
    }
  });

  $('.specialists-slider').owlCarousel({
    dots: false, 
    responsive: {
        0:{
            items:1,
            nav: false,
            stagePadding: 65,
            margin: 20, 
        }, 
        1200:{
            nav: true,
            items:4,
            margin:40,
            loop: true,
        }
    }
  });

  $('.reviews-slider').owlCarousel({
    dots: false, 
    responsive: {
        0:{
            items:1,
            nav: false,
            stagePadding: 40,
            margin: 20, 
        }, 
        1200:{
            nav: true,
            items:2,
            margin:40,
            loop: true,
        }
    }
  })

});
