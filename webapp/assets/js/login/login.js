const idInput = document.getElementById("id_input");
const pwInput = document.getElementById("pw_input");

let failCnt = 1;

function islogin() {
  if (idInput.value === "test" && pwInput.value === "test") {
    alert("로그인 성공!");
    location.href = "./../../main.html";
    failCnt = 1;
  } else {
    alert("아이디 또는 비밀번호가 올바르지 않습니다.");
    alert(failCnt + "회 입력오류");
    failCnt++;
    if (failCnt === 6) {
      modalAdminLoginFailedShow();
      failCnt = 1;
      return;
    }
  }
}

window.addEventListener("DOMContentLoaded", () => {
  // html 문서에 모달 불러오기
  fetch("/team04-RB_frontend/webapp/app/modal/modalAdminLoginFailed.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("modalAdminLoginFailed").innerHTML = data;
    });
});

//모달 요소 가져오기
const modalAdminLoginFailed = document.getElementById("modalAdminLoginFailed");

// 모달이 나타나는 함수(버튼에 추가하여 사용)
function modalAdminLoginFailedShow() {
  console.log("모달버튼클릭");
  modalAdminLoginFailed.style.display = "flex";

  //엔터로 확인 버튼 누르기
  document.onkeydown = (event) => {
    if (event.key === "Enter") {
      modalAdminLoginFailedCheck();
    }
  };
}
//모달 끄기 함수(모달 내부 x이미지에 추가되어 있음)
function modalAdminLoginFailedNone() {
  modalAdminLoginFailed.style.display = "none";
  document.onkeydown = null; // onkeydown 이벤트 제거
}
//확인 버튼
function modalAdminLoginFailedCheck() {
  modalAdminLoginFailedNone();
}
//취소 버튼
function modalCancel() {
  modalAdminLoginFailedNone();
}

modalAdminLoginFailedNone();
