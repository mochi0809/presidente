$(function() {
    $(window).scroll(function() {
      $(".fadeUp3").each(function() {
        var scroll = $(window).scrollTop();
        var blockPosition = $(this).offset().top;
        var windowHeihgt = $(window).height();
        if (scroll > blockPosition - windowHeihgt + 300) {
          $(this).addClass("blockIn");
        }
      });
    });
  });