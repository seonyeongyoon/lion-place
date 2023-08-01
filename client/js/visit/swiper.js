import { getNode, getNodes } from "/lib/dom/getNode.js";
import { addClass, removeClass } from "./../../lib/dom/css.js";
import { attr } from "../../lib/dom/attr.js";

// const swiperContainer = getNode(".swiper");
const swiperWrapper = getNode(".swiper-wrapper");
const swiperSlide = getNodes(".swiper-slide");
const keywordButton = getNodes(".drop-shadow-lg");

// swiper
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

function handleActive(e) {
  e.preventDefault();

  let target = e.target.closest("button");
  let keyword = e.target.closest("span");
  // if (!target || !keyword) console.log(keyword);

  if (!target || keyword?.classList.contains("arrow") || !keyword) return;

  if (target) target.classList.toggle("bg-primary");

  if (keyword) {
    keyword.classList.toggle("text-white");
    keyword.classList.toggle("text-gray/500");
  }

  target.classList.toggle("bg-gray/50");
}

swiperWrapper.addEventListener("click", handleActive);
