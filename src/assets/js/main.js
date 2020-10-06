"use strict";

$(document).ready(function () {
  $('body').autoPadding({
    source: $('.js-header'),
  });

  // TOOLTIP

  $('.has_tooltip').tooltip({
    placement: 'right',
    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
    html : true
  })

  $(".carousel-header>a").on("click", function() {
    $(".carousel-header>a").removeClass("carousel-header-active");
    $(this).addClass("carousel-header-active");
    var position = parseInt($(this).attr("data-position"));
    $("#carousel").carousel(position);
  });


});
