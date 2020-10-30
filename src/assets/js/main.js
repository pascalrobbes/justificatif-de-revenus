"use strict";

$(document).ready(function () {

  $('body').autoPadding({
    source: $('.js-header'),
  });

  $(".carousel-header>a").on("click", function () {
    $(".carousel-header>a").removeClass("carousel-header-active");
    $(this).addClass("carousel-header-active");
    var position = parseInt($(this).attr("data-position"));
    $("#carousel").carousel(position);
  });

  var is_mobile = $(".carousel-control-prev-icon ").css("display") == 'none';
  if (is_mobile) {
    $("#carousel").carousel(1);
    $("div.carousel-header a[data-position=1]").addClass("carousel-header-active");
    $("div.carousel-header a[data-position=0]").removeClass("carousel-header-active");

    $('.has_tooltip').tooltip({
      placement: 'auto',
      template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>',
      html: true
    })

  } else {
    $('.has_tooltip').tooltip({
      placement: 'right',
      template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>',
      html: true
    })
  }


});
