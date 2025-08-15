window.addEventListener('DOMContentLoaded', () => {
  // html 문서에 모달 불러오기
  fetch('./../../app/modal/modalCareRejectFinished.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('modalCareRejectFinished').innerHTML = data;
    });
});

//모달 요소 가져오기
const modalCareRejectFinished = document.getElementById("modalCareRejectFinished");

// 모달이 나타나는 함수(버튼에 추가하여 사용)
function modalCareRejectFinishedShow() {
  console.log("모달버튼클릭");
  modalCareRejectFinished.style.display = "flex";

  //엔터로 확인 버튼 누르기
  document.onkeydown = (event) => {
    if(event.key === "Enter"){
      modalCareRejectFinishedCheck();
    }
  };
}
//모달 끄기 함수(모달 내부 x이미지에 추가되어 있음)
function modalCareRejectFinishedNone(){
  modalCareRejectFinished.style.display = "none";
  document.onkeydown = null; // onkeydown 이벤트 제거
}
//확인 버튼
function modalCareRejectFinishedCheck(){
  modalCareRejectFinishedNone();
}
//취소 버튼
function modalCareRejectFinishedCancel(){
  modalCareRejectFinishedNone();
}
modalCareRejectFinishedNone();