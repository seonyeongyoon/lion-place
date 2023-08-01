var userid = document.getElementById("userid");
var userpw = document.getElementById("userpw");
var pwcheck = document.getElementById("pwcheck");
var email = document.getElementById("email");

function OnlyIdCheck() {}

function uniqueId() {
  const alphabet = "energizozo";
}

// 아이디 정규식
function idReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{3,16}$/;
  return re.test(String(text));
}

// 비밀번호 정규식
function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{8,16}$/;
  return re.test(String(text).toLowerCase());
}

// 이메일 정규식
function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(text).toLowerCase());
}

loginBtn.addEventListener("click", () => {
  // if (useridPass) {
  console.log("로그인");
  // }
});

// 이메일 - /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
//비밀번호 영문자+숫자+특수조합(8~25자리 입력) 정규식
// var pwdCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
