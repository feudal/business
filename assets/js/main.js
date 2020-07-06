$(document).ready(function() {
  $('.slider').slick({
    arrows: false,
    dots: true,
    adaptiveHeight: true
  });

  $('.carusel').slick({
    arrows: false,
    dots: false,
    asNavFor: ".carusel2"
  });
  $('.carusel2').slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    asNavFor: ".carusel"
  });

    $('.slider3').slick({
    arrows: true,
    dots: false,
  });

  $(".trigger").on('click', (function() {
    $menu__submenu = $(".menu__submenu");
    $trigger = $(".trigger");

    $menu__submenu.toggleClass("menu__submenu_active");
    $trigger.find('span').toggleClass('active');
  }));

  $(".menu-burger").on('click', function() {
    $menu = $(".menu");
    $menu__submenu = $(".menu__submenu");

    $menu.toggleClass('menu_active');
    if (!$menu.hasClass('menu_active')) {
      $menu__submenu.removeClass("menu__submenu_active");
    }

    $(window).resize(function() {
    	$(".menu").removeClass('menu_active');
    });
  })

});