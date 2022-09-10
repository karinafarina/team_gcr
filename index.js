$(document).ready(function() {
  let navHeight = $('nav').outerHeight();
  $('#main-nav li a').click(function(e) {
    let targetHref = $(this).attr('href');

    let additionalScroll = 0;
    if(window.innerWidth <= 550) {
      additionalScroll = 90;
    }

    $('html, body').animate({
      scrollTop: $(targetHref).offset().top - navHeight - additionalScroll
	}, 1000);
    e.preventDefault();
  });

  $(".nav-mobile").on("click", function() {
    $(".menu").animate({
      height: 'toggle'
    });
  });

  $(window).scroll(function() {
    var d = $('nav');
    if($('body').offset().top < 300) {
      d.fadeIn();
    } else {
      d.fadeOut();
    }
  })
});
