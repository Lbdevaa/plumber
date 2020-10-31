$(function() {
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
  //burger
  $(".burger").click(function () {
    $(this).toggleClass("active");
    $(".mobile-menu").fadeToggle();
    $('body').toggleClass('fixed')
  });

  $(".mobile-menu__url").click(function () {
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
        }, 
        1200:{
            nav: true,
            items:3,
            margin:40,
        }
    }
  });

  $('.specialists-slider').owlCarousel({
    dots: false, 
    responsive: {
        0:{
            items:1,
            nav: false,
        }, 
        1200:{
            nav: true,
            items:4,
            margin:40,
        }
    }
  });

  $('.reviews-slider').owlCarousel({
    dots: false, 
    responsive: {
        0:{
            items:1,
            nav: false,
        }, 
        1200:{
            nav: true,
            items:2,
            margin:40,
        }
    }
  })

});
