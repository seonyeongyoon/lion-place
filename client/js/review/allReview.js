import { getNode } from "./../../lib/dom/getNode.js";

const bar = getNode(".bar");

console.log(bar);
bar.classList.add("hidden");

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
