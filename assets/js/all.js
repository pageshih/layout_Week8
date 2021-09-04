"use strict";

$(function () {
  console.log('Hello Bootstrap5');
});
var swiper = new Swiper('.course-swiper', {
  watchSlidesProgress: true,
  slidesPerView: 1.34,
  spaceBetween: 30
});
var feedbackSwiper = new Swiper(".feedback-swiper", {
  slidesPerView: 3,
  slidesPerColumn: 2,
  //slidesPerColumnFill: "row",
  slidesPerGroup: 6,
  spaceBetween: 16,
  breakpoints: {
    768: {
      slidesPerView: 1,
      slidesPerColumn: 3,
      //slidesPerColumnFill: "row",
      slidesPerGroup: 3,
      spaceBetween: 8,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    },
    992: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      //slidesPerColumnFill: "row",
      slidesPerGroup: 2,
      spaceBetween: 16
    }
  }
});
//# sourceMappingURL=all.js.map
