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
    var target = $(this).attr("data-target");
    $(".carousel-header>a").removeClass("carousel-header-active");
    $(this).addClass("carousel-header-active");
    $("div.carousel-body > div").css("display","none");
    $("div#"+target).css("display","block");
  });

});

function mobileActions() {
  
  $("div.carousel-header a[data-target=carousel-mobile-container]").addClass("carousel-header-active");
  $("div.carousel-header a[data-target=carousel-desktop-container]").removeClass("carousel-header-active");
  $("div#carousel-desktop-container").addClass('is-hidden');
  $("div#carousel-mobile-container").removeClass('is-hidden');
  $('.has_tooltip').tooltip({
    placement: 'auto',
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>',
    html: true
  })}

function desktopActions() {
  $('.has_tooltip').tooltip({
    placement: 'bottom',
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>',
    html: true
  })
}
