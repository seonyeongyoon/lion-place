import { getNode, getNodes } from "./../lib/dom/getNode.js";

// slider 사이즈 설정
const swiperContainer = getNode(".swiper");
const swiperSlide = getNodes(".swiper-slide");

const swiper = new Swiper(".swiper", {
  slidesPerView: 1.7,
  spaceBetween: 12,
  freeMode: true,
  // sticky: false,
  breakpoints: {
    520: {
      slidesPerView: 2.3,
    },
    490: {
      slidesPerView: 2.2,
    },

    480: {
      slidesPerView: 2.1,
    },
    463: {
      slidesPerView: 2,
    },
    433: {
      slidesPerView: 1.8,
    },
    400: {
      slidesPerView: 1.7,
    },
    390: {
      slidesPerView: 1.6,
    },
    360: {
      slidesPerView: 1.5,
    },
    320: {
      slidesPerView: 1.3,
    },
  },
});

// swiperSlide.style.width = "200px";
