window.addEventListener("DOMContentLoaded", () => {
  fetch("../../app/admin/sidebar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("sidebar").innerHTML = data;
    });
});

const link = "./../../app/admin/notice.html";
function linkHref() {
  location.href = link;
}

function cancle() {
  linkHref();
}

window.addEventListener("DOMContentLoaded", () => {
  // html 문서에 모달 불러오기
  fetch("../../app/modal/modalUpdate.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("modalUpdate").innerHTML = data;
    });
});

//모달 요소 가져오기
const modalUpdate = document.getElementById("modalUpdate");

// 모달이 나타나는 함수(버튼에 추가하여 사용)
function modalUpdateShow() {
  console.log("모달버튼클릭");
  modalUpdate.style.display = "flex";

  //엔터로 확인 버튼 누르기
  document.onkeydown = (event) => {
    if (event.key === "Enter") {
      modalUpdateCheck();
    }
  };
}
//모달 끄기 함수(모달 내부 x이미지에 추가되어 있음)
function modalUpdateNone() {
  modalUpdate.style.display = "none";
  document.onkeydown = null; // onkeydown 이벤트 제거
}
//확인 버튼
function modalUpdateCheck() {
  modalUpdateNone();
  linkHref();
}
//취소 버튼
function modalUpdateCancel() {
  modalUpdateNone();
}
modalUpdateNone();
