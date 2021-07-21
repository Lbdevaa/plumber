$(function () {
  function get_cookie(cookie_name) {
    var results = document.cookie.match('(^|;) ?' + cookie_name + '=([^;]*)(;|$)');
    if (results)
      return (unescape(results[2]));
    else
      return null;
  }

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

  $(".open-service").click(function () {
    let serviceName = $(this).parent().children('.service__name').text();
    $('#call-service .popup-call__title span').text(serviceName);
  });

  $(".open-single-service").click(function () {
    let serviceName = $(this).parent().parent().children('.banner__title').text();
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
      0: {
        items: 1,
        nav: false,
        stagePadding: 40,
        margin: 20,
      },
      1200: {
        nav: true,
        items: 3,
        margin: 40,
        loop: true,
      }
    }
  });

  $('.specialists-slider').owlCarousel({
    dots: false,
    responsive: {
      0: {
        items: 1,
        nav: false,
        stagePadding: 65,
        margin: 20,
      },
      1000: {
        nav: true,
        items: 4,
        margin: 40,
        loop: true,
      }
    }
  });

  $('.reviews-slider').owlCarousel({
    dots: false,
    responsive: {
      0: {
        items: 1,
        nav: false,
        stagePadding: 40,
        margin: 20,
      },
      1200: {
        nav: true,
        items: 2,
        margin: 40,
        loop: true,
      }
    }
  })

  $(".fancybox").fancybox();

  $('.services__more-btn').click(function (e) {
    e.preventDefault();
    $(".services .service:nth-child(n+9)").addClass('active');
    $(".services__more-btn").hide();
  })

  $('.cities__link.active').click(function (e) {
    e.preventDefault();
    $('.cities').removeClass('active')
  })

  $('.loc__current').click(function (e) {
    e.preventDefault();
    $('.cities').toggleClass('active')
  })

  // current city
  if (get_cookie('clickCity')) {
    $('.quiz-city').addClass('hide');
  }
  $('.quiz-city__reject').click(function (e) {
    e.preventDefault();
    $('.header__quiz-city').addClass('hide');
    $('.cities').addClass('active')
    document.cookie = 'clickCity=true'
  })

  $('.quiz-city__accept').click(function (e) {
    e.preventDefault();
    $('.header__quiz-city').addClass('hide');
    document.cookie = 'clickCity=true'
  })

  let myCity = get_cookie('currentCity')

  ymaps.ready(function () {
    var geolocation = ymaps.geolocation.city;

    switch (geolocation) {
      case 'Екатеринбург':
        document.cookie = 'currentCity=Екатеринбург; domain=xn---24-5cdbjyys1ab8bp7bzb.xn--p1ai'
        if (!get_cookie('clickCity')) {
          location.host = 'xn---24-5cdbjyys1ab8bp7bzb.xn--p1ai'
        }
        break;
      case 'Челябинск':
        document.cookie = 'currentCity=Челябинск; domain=xn---24-5cdbjyys1ab8bp7bzb.xn--p1ai'
        if (!get_cookie('clickCity')) {
          location.host = 'xn--90ahkico2a6b9d.xn---24-5cdbjyys1ab8bp7bzb.xn--p1ai'
        }
        break;
      default:
        document.cookie = 'currentCity=Екатеринбург; domain=xn---24-5cdbjyys1ab8bp7bzb.xn--p1ai'
    }
  });
});
