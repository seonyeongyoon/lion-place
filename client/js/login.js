import { getNode } from "../lib/dom/getNode.js";
import { enableElement } from "../lib/dom/controlElement.js";
import { dom } from "../lib/dom";

const loginTable = document.querySelector(".loginTable");
const inputId = document.querySelector(".loginId");
const inputPw = document.querySelector(".loginPw");
const loginBtn = document.querySelector(".loginBtn");

const checkF = (e) => {
  if (
    inputId.value.includes("@") && inputPw.value.length >= 5
      ? (loginBtn.disabled = false)
      : (loginBtn.disabled = true)
  ) {
    loginBtn.style.backgroundColor = "#c4e1fb";
  } else {
    loginBtn.style.backgroundColor = "#4390E7";
  }
};

loginTable.addEventListener("keyup", checkF);
//joinform_check 함수로 유효성 검사
// function addEventListener() {
//   //변수에 담아주기
//   var userid = document.getElementById("userid");
//   var userpw = document.getElementById("userpw");
//   // var repwd = document.getElementById("repwd");
//   // var email_id = document.getElementById("email_id");

//   if (userid.value == "userid") {
//     //해당 입력값이 없을 경우 같은말: if(!uid.value)
//     alert("아이디를 입력하세요.");
//     userid.focus(); //focus(): 커서가 깜빡이는 현상, blur(): 커서가 사라지는 현상
//     return false; //return: 반환하다 return false:  아무것도 반환하지 말아라 아래 코드부터 아무것도 진행하지 말것
//   }

//   if (userpw.value == "userpw") {
//     alert("비밀번호를 입력하세요.");
//     userpw.focus();
//     return false;
//   }
// }
// console.log(alert);
// -----------------------------------------------------------------------
//비밀번호 영문자+숫자+특수조합(8~25자리 입력) 정규식
// var pwdCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
// }
// const loginBtn = document.querySelector(".login_btn");
// const userId = document.querySelector(".user_id");

// window.addEventListener("keyup", () => {
//   const userPw = document.querySelector(".user_pw");
//   if (userPw.value.length > 0 && userId.value.length > 0) {
//     loginBtn.disabled = false;
//     loginBtn.classList.add("active");
//   } else {
//     loginBtn.disabled = true;
//     loginBtn.classList.remove("active");
//   }
// });
// let userName = prompt("사용자의 아이디를 입력해주세요.", "");

// Object.prototype.toString.call(userName).slice(8, -1);

// if (userName?.toLowerCase() === "admin") {
//   let pw = prompt("비밀번호를 입력해 주세요.", "");

//   if (pw?.toLowerCase() === "themaster") {
//     console.log("환영합니다.");themaster
//   } else {
//     console.log("취소되었습니다.");
//   }
//   123;

//   // 정규표현식
// } else if (userName?.replace(/\s*/g, "") === "" || userName === null) {
//   console.log("취소되었습니다.");
// } else {
//   console.log("인증되지 않은 사용자 입니다.");
// }

// function emailReg(text) {
//   const re =
//     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//   return re.test(String(text).toLowerCase());
// }

// function pwReg(text) {
//   const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
//   return re.test(String(text).toLowerCase());
// }

// const email = document.querySelector(".email");
// const pw = document.querySelector(".pw");
// const button = document.querySelector("button");

// let emailPass = false;

// email.addEventListener("input", function () {
//   if (emailReg(this.value)) {
//     this.classList.remove("is-active");

//     emailPass = true;
//   } else {
//     this.classList.add("is-active");
//     emailPass = false;
//   }
// });

// button.addEventListener("click", () => {
//   if (emailPass) {
//     console.log("로그인");
//   }
// });

// - 회원가입을 통해 사용자(user)를 생성하고 관리합니다.
//     - 랜덤 한 문자값 (10자 이상) 을 생성 후 사용자의 Unique ID 값으로 넣어주세요.
//     - 해당 유저의 Unique ID를 확인 후 로그인합니다.
//     - 응답받은 Unique ID는 `localStorage`에 저장해주세요
//     - 다음 번에 로그인 시 Unique ID가 존재한다면 루트 경로로 리디렉션 시켜주세요
//     - 어떤 경우든 Unique ID가 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리디렉션 시켜주세요
//     - 로그아웃은 클라이언트 단에서 `localStorage`에 저장된 Unique ID를 삭제하는 방식으로 구현합니다.
//     데이터 스키마
