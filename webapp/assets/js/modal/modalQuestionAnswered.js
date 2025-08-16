window.addEventListener("DOMContentLoaded", () => {
  // html 문서에 모달 불러오기
  fetch("./../../app/modal/modalQuestionAnswered.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("modalQuestionAnswered").innerHTML = data;
    });
});

//모달 요소 가져오기
const modalQuestionAnswered = document.getElementById("modalQuestionAnswered");

const link = "./../../app/admin/qeustion.html";
function linkHref() {
  location.href = link;
}

function cancle() {
  linkHref();
}
// 모달이 나타나는 함수(버튼에 추가하여 사용)
function modalQuestionAnsweredShow() {
  console.log("모달버튼클릭");
  modalQuestionAnswered.style.display = "flex";

  //엔터로 확인 버튼 누르기
  document.onkeydown = (event) => {
    if (event.key === "Enter") {
      modalQuestionAnsweredCheck();
    }
  };
  // cancle()
}

//모달 끄기 함수(모달 내부 x이미지에 추가되어 있음)
function modalQuestionAnsweredNone() {
  modalQuestionAnswered.style.display = "none";
  document.onkeydown = null; // onkeydown 이벤트 제거
}
//확인 버튼
function modalQuestionAnsweredCheck() {
  modalQuestionAnsweredNone();
  linkHref();
}
//취소 버튼
function modalQuestionAnsweredCancel() {
  modalQuestionAnsweredNone();
}
modalQuestionAnsweredNone();
