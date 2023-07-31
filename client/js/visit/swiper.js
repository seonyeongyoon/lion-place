import { getNode, getNodes } from "../../lib/dom/getNode.js";

// const swiperContainer = getNode(".swiper");
const swiperWrapper = getNode(".swiper-wrapper");
const swiperSlide = getNodes(".swiper-slide");
const keywordButton = getNodes(".drop-shadow-lg");

const swiper = new Swiper(".swiper", {
  slidesPerView: 2,
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
  setWrapperSize: true,
});

swiperSlide.forEach((element) => {
  element.style.marginRight = "0";
});

console.log(keywordButton);
