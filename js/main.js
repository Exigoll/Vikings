$(function(){
   $('[data-fancybox]').fancybox({
      youtybe: {
         controls: 0,
         showinfo: 0
      },
   })
   $('.heroes__slider-img').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.heroes__slider-text',
      prevArrow: '<button class="slick-btn slick-prev"><img src="/img/arrow-left.png" alt="prev"></button>',
      nextArrow: '<button class="slick-btn slick-next"><img src="/img/arrow-right.png" alt="next"></button>',
    });
    $('.heroes__slider-text').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.heroes__slider-img',
      fade: true,
      arrows: false,
    });
});