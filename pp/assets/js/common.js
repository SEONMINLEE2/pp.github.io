$(function () {
  //上へ戻る
  $(".c-pagetop").hide();
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $(".c-pagetop").fadeIn(500);
    } else {
      $(".c-pagetop").fadeOut();
    }
  });
  $(".c-pagetop").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 500);
    return false;
  });

  //hamburger
  $(".l-hamburger__toggle").on("click", function () {
    $("body").toggleClass("open");
  });
  $(".l-hamburger__link").on("click", function () {
    $("body").removeClass("open");
  });
});
$('.l-hamburger__link').on('click', function () {
  $('body').removeClass('open');
});

//hover無効
var touch = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
if(touch) {
  try {
    for (var si in document.styleSheets) {
      var styleSheet = document.styleSheets[si];
      if (!styleSheet.rules) continue;

      for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
        if (!styleSheet.rules[ri].selectorText) continue;

        if (styleSheet.rules[ri].selectorText.match(':hover')) {
          styleSheet.deleteRule(ri);
        }
      }
    }
  } catch (ex) {}
}


$(document).ready(function () {
     
     
   
   
  $(window).on('scroll', function (){

 var percent_80 = $('.percent_80');
 var percent_80_animation = 'percent_80_animation';

 percent_80.each(function () {

   var percent_80Offset = $(this).offset().top;
   var scrollPos = $(window).scrollTop();
   var wh = $(window).height();

   if(scrollPos > percent_80Offset - wh + (wh / 5) ){
     $(this).addClass(percent_80_animation);
   }
 });
});

  $(window).on('scroll', function (){

 var percent_60 = $('.percent_60');
 var percent_60_animation = 'percent_60_animation';

 percent_60.each(function () {

   var percent_60Offset = $(this).offset().top;
   var scrollPos = $(window).scrollTop();
   var wh = $(window).height();

   if(scrollPos > percent_60Offset - wh + (wh / 5) ){
     $(this).addClass(percent_60_animation);
   }
 });
});

$(window).on('scroll', function (){

 var percent_50 = $('.percent_50');
 var percent_50_animation = 'percent_50_animation';

 percent_50.each(function () {

   var percent_50Offset = $(this).offset().top;
   var scrollPos = $(window).scrollTop();
   var wh = $(window).height();

   if(scrollPos > percent_50Offset - wh + (wh / 5) ){
     $(this).addClass(percent_50_animation);
   }
 });
});

$(window).on('scroll', function (){

 var percent_40 = $('.percent_40');
 var percent_40_animation = 'percent_40_animation';

 percent_40.each(function () {

   var percent_40Offset = $(this).offset().top;
   var scrollPos = $(window).scrollTop();
   var wh = $(window).height();

   if(scrollPos > percent_40Offset - wh + (wh / 5) ){
     $(this).addClass(percent_40_animation);
   }
 });
});

$(window).on('scroll', function (){

 var percent_15 = $('.percent_15');
 var percent_15_animation = 'percent_15_animation';

 percent_15.each(function () {

   var percent_15Offset = $(this).offset().top;
   var scrollPos = $(window).scrollTop();
   var wh = $(window).height();

   if(scrollPos > percent_15Offset - wh + (wh / 5) ){
     $(this).addClass(percent_15_animation);
   }
 });
});
  
  
    $('.nav_wrap > li .linkProfile, .linkProfile').click(function () {
       var offset = $('#Profile').offset();
       $('body,html').animate({
           scrollTop: offset.top
       }, 400);
   });

     
    $('.nav_wrap > li .linkSkill, .linkSkill').click(function () {
       var offset = $('#Skill').offset();
       $('body,html').animate({
           scrollTop: offset.top
       }, 400);
   });
  
      
    $('.nav_wrap > li .linkSkill, .linkSkill').click(function () {
       var offset = $('#Skill').offset();
       $('body,html').animate({
           scrollTop: offset.top
       }, 400);
   });

    $('.nav_wrap > li .linkProject, .linkProject').click(function () {
       var offset = $('#Project').offset();
       $('body,html').animate({
           scrollTop: offset.top
       }, 400);
   });
       $('.nav_wrap > li .linkContact, .linkContact').click(function () {
       var offset = $('#Contact').offset();
       $('body,html').animate({
           scrollTop: offset.top
       }, 400);
   });

  
  (function() {
 const image = document.querySelectorAll('.img-wrap');

 const observer = new IntersectionObserver(function(entries) {
   entries.forEach(function(entry) {
     if (entry.intersectionRatio > 0) {
       entry.target.classList.add('img-animation');
     } else {
       entry.target.classList.remove('img-animation');
     }
   });
 });

 Array.prototype.forEach.call(image, function(img) {
   observer.observe(img);
 });
})();
  
      $(window).scroll(function () {
       $('.fade_in').each(function () {
           var elemPos = $(this).offset().top,
               scroll = $(window).scrollTop(),
               windowHeight = $(window).height();
           if (scroll > elemPos - windowHeight + 50) {
               $(this).addClass('scrollin');
           }
       });
   });
    
}); //end