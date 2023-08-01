import { getNode } from "./../../lib/dom/getNode.js";

/* global gsap */
gsap.registerPlugin(ScrollTrigger);

gsap.from(".bar", {
  y: -15,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".titleArea",
    markers: true,
    start: "top center",
    end: "bottom 20%",
    toggleActions: "restart pause play reverse",
    fastScrollEnd: true,
    endTrigger: ".mainContents",
  },
  pin: true,
  pinSpacing: false,
});

const bar = getNode(".bar");

console.log(bar);

function handleScroll() {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;

  if (scrollPosition > windowHeight * 0.1) {
    bar.classList.remove("hidden");
  } else {
    bar.classList.add("hidden");
  }
}

window.addEventListener("scroll", handleScroll);
