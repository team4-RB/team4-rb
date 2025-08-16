window.addEventListener("DOMContentLoaded", () => {
  // html 문서에 모달 불러오기
  fetch("./../../app/modal/modalCareModifyFinished.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("modalCareModifyFinished").innerHTML = data;
    });
});

const link = "./../../app/admin/careCareer.html";
function linkHref() {
  location.href = link;
}

//모달 요소 가져오기
const modalCareModifyFinished = document.getElementById(
  "modalCareModifyFinished"
);

// 모달이 나타나는 함수(버튼에 추가하여 사용)
function modalCareModifyFinishedShow() {
  console.log("모달버튼클릭");
  modalCareModifyFinished.style.display = "flex";

  //엔터로 확인 버튼 누르기
  document.onkeydown = (event) => {
    if (event.key === "Enter") {
      modalCareModifyFinishedCheck();
    }
  };
}
//모달 끄기 함수(모달 내부 x이미지에 추가되어 있음)
function modalCareModifyFinishedNone() {
  modalCareModifyFinished.style.display = "none";
  document.onkeydown = null; // onkeydown 이벤트 제거
}
//확인 버튼
function modalCareModifyFinishedCheck() {
  modalCareModifyFinishedNone();
  linkHref();
}
//취소 버튼
function modalCareModifyFinishedCancel() {
  modalCareModifyFinishedNone();
}
modalCareModifyFinishedNone();

window.addEventListener("DOMContentLoaded", () => {
  // html 문서에 모달 불러오기
  fetch("./../../app/modal/modalCareModifyReject.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("modalCareModifyReject").innerHTML = data;
    });
});

//모달 요소 가져오기
const modalCareModifyReject = document.getElementById("modalCareModifyReject");

//input 요소 담을 변수
let input;

// 모달이 나타나는 함수(버튼에 추가하여 사용)
function modalCareModifyRejectShow() {
  event.preventDefault();
  console.log("모달버튼클릭");
  modalCareModifyReject.style.display = "flex";
  input = document.getElementById("reason_reject");
  input.focus();

  input.onkeyup = (e) => {
    if (e.key === "Enter") {
      modalCareModifyRejectCheck();
    }
  };
}

//모달 끄기 함수(모달 내부 x이미지에 추가되어 있음)
function modalCareModifyRejectNone() {
  if (input) {
    input.onkeyup = null; // 이벤트 제거
  }
  modalCareModifyReject.style.display = "none";
}
function modalCareModifyRejectCheck() {
  const value = input.value.trim();
  if (!value) {
    alert("반려 사유를 입력하세요.");
    return;
  }
  console.log("전달할 값 : ", value);
  alert("입력됨 - " + value);
  modalCareModifyRejectNone();
  linkHref();
}
function modalCareModifyRejectCancel() {
  modalCareModifyRejectNone();
}
modalCareModifyRejectNone();
