/* ハンバーガーメニュー */
$(function() {
  $('#toggle').on('click', function() {
    $('body').toggleClass('is-open');
  });
});


/* スクロール　TOPへ　*/
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

jQuery(function() {
  var appear = false;
  var pagetop = $('#page_top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {  
      if (appear == false) {
        appear = true;
        pagetop.stop().animate({
          'bottom': '50px' 
        }, 300); 
      }
    } else {
      if (appear) {
        appear = false;
        pagetop.stop().animate({
          'bottom': '-50px' 
        }, 300); 
      }
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500); 
    return false;
  });
});

/* スクロール　フェードイン　*/
$(function () {
      $(window).scroll(function () {
          const wHeight = $(window).height();
          const scrollAmount = $(window).scrollTop();
          $('.scrollanime').each(function () {
              const targetPosition = $(this).offset().top;
              if(scrollAmount > targetPosition - wHeight + 60) {
                  $(this).addClass("fadeInDown");
              }
          });
      });
  });
