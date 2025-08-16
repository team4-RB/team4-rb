window.addEventListener('DOMContentLoaded', () => {
  // html 문서에 모달 불러오기
  fetch('./../../app/modal/modalRefundFinished.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('modalRefundFinished').innerHTML = data;
    });
});

//모달 요소 가져오기
const modalRefundFinished = document.getElementById("modalRefundFinished");

const link = "./../../app/admin/refund.html";
function linkHref() {
  location.href=link;
}

function cancle() {
  linkHref();
}

// 모달이 나타나는 함수(버튼에 추가하여 사용)
function modalRefundFinishedShow() {
  event.preventDefault();
  console.log("모달리펀드피니시드");
  modalRefundFinished.style.display = "flex";
  
  //엔터로 확인 버튼 누르기
  document.onkeydown = (event) => {
    if(event.key === "Enter"){
      modalRefundFinishedCheck();
    }
  };

}
//모달 끄기 함수(모달 내부 x이미지에 추가되어 있음)
function modalRefundFinishedNone(){
  modalRefundFinished.style.display = "none";
  document.onkeydown = null; // onkeydown 이벤트 제거
}
//확인 버튼
function modalRefundFinishedCheck(){
  linkHref()
  modalRefundFinishedNone();
}
//취소 버튼
function modalRefundFinishedCancel(){
  modalRefundFinishedNone();
}
modalRefundFinishedNone();