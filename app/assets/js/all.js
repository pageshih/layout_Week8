

$(function() {
  console.log('Hello Bootstrap5');
});

const swiper = new Swiper('.course-swiper', {
  watchSlidesProgress: true,
  slidesPerView: 2,
  spaceBetween: 30,
});

var feedbackSwiper = new Swiper(".feedback-swiper", {
  slidesPerView: 3,
  slidesPerColumn: 2,
//slidesPerColumnFill: "row",
slidesPerGroup: 6,
  spaceBetween: 30,
});
