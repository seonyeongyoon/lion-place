import { getNode, getNodes } from "/lib/dom/getNode.js";

getNode;
getNodes;

// const tabContainer = getNode(".container");
// const tabButtons = getNodes(".tabButton");
// const tabContents = getNodes(".tabContents");

// function handleTab(e) {
//   const target = e.target.closest(".tabButton");

//   if (!target) return;

//   const list = getNodes(".tabContents");
//   // target의 index 넘버
//   // const index = attr(target, "data-index");

//   list.forEach((section) => {
//     console.log(list);
//     removeClass(section, "hidden");
//   });

//   addClass(section, "hidden");

//   // // 비주얼 이미지 변경
//   // visualImage.src = attr(thumb, "src", `./../assets/${data.name}`.src);
//   // // 비주얼 이미지 alt 값 변경
//   // visualImage.alt = attr(thumb, "alt", `./${data.alt}`.alt);

//   // // 닉네임 변경
//   // nickName.textContent = data[index - 1].name;
// }

// tabContainer.addEventListener("click", handleTab);
function addClass(element, className) {
  if (!element.classList.contains(className)) {
    element.classList.add(className);
  }
}

function removeClass(element, className) {
  if (element.classList.contains(className)) {
    element.classList.remove(className);
  }
}

const tabContainer = getNode(".container");
const tabButtons = getNodes(".tabButton");
const tabContents = getNodes(".tabContents");

function handleTab(e) {
  const target = e.target.closest(".tabButton");

  if (!target) return;

  // target의 data-list 값을 가져옵니다.
  const targetDataList = target.getAttribute("data-list");

  // 모든 탭 내용을 숨깁니다.
  tabContents.forEach((content) => {
    addClass(content, "hidden");
  });

  // 해당하는 data-order 속성을 가진 탭 내용만 보여줍니다.
  const targetTabContent = document.querySelector(
    `[data-order="${targetDataList}"]`,
  );
  removeClass(targetTabContent, "hidden");
}

tabContainer.addEventListener("click", handleTab);
