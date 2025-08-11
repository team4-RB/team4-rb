window.addEventListener('DOMContentLoaded', () => {
  // html 문서에 모달 불러오기
  fetch('/team04-RB_frontend/webapp/app/modal/modalCareModifyFinished.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('modalCareModifyFinished').innerHTML = data;
    });
});

const link = "./../../app/admin/newsBoard.html";

function linkHref() {
  location.href=link;
}

function cancle() {
  linkHref();
}

//모달 요소 가져오기
const modalCareModifyFinished = document.getElementById("modalCareModifyFinished");

// 모달이 나타나는 함수(버튼에 추가하여 사용)
function modalCareModifyFinishedShow() {
  console.log("모달버튼클릭");
  modalCareModifyFinished.style.display = "flex";

  //엔터로 확인 버튼 누르기
  document.onkeydown = (event) => {
    if(event.key === "Enter"){
      modalCareModifyFinishedCheck();
    }
  };
}
//모달 끄기 함수(모달 내부 x이미지에 추가되어 있음)
function modalCareModifyFinishedNone(){
  modalCareModifyFinished.style.display = "none";
  document.onkeydown = null; // onkeydown 이벤트 제거
  linkHref()
}
//확인 버튼
function modalCareModifyFinishedCheck(){
  modalCareModifyFinishedNone();
}
//취소 버튼
function modalCareModifyFinishedCancel(){
  modalCareModifyFinishedNone();
}
modalCareModifyFinishedNone();

