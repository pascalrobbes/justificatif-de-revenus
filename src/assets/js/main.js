"use strict";

$(document).ready(function () {

  $('body').autoPadding({
    source: $('.js-header'),
  });

  if ($(".carousel-control-prev-icon ").css("display") == 'none') {
    mobileActions();
  } else {
    desktopActions();
  }

  $(".carousel-header>a").on("click", function () {
    $(".carousel-header>a").removeClass("carousel-header-active");
    $(this).addClass("carousel-header-active");
  });

});

function mobileActions() {
  
  $("div.carousel-header a[data-position=1]").addClass("carousel-header-active");
  $("div.carousel-header a[data-position=0]").removeClass("carousel-header-active");
  $("div#carousel-desktop-container").removeClass('show active');
  $("div#carousel-mobile-container").addClass('show active');
  $('.has_tooltip').tooltip({
    placement: 'bottom',
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>',
    html: true
  })}

function desktopActions() {
  $('.has_tooltip').tooltip({
    placement: 'right',
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>',
    html: true
  })
}
