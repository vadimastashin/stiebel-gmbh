$(document).ready(function(){
    $('.compare-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 3
  });
});
  var slideIndex = 3;
  $('.js-add-slide').on('click', function() {
    slideIndex++;
    $('.compare-slider').slick('slickAdd','<div>' + slideIndex + '</div>');
  });

  $('.js-remove-slide').on('click', function() {
    $('.compare-slider').slick('slickRemove',slideIndex - 1);
    if (slideIndex !== 0){
      slideIndex--;
    }
  });
