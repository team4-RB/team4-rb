window.addEventListener('DOMContentLoaded', () => {
  // html 문서에 모달 불러오기
  fetch('./../../app/modal/modalPointRefundLog.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('modalPointRefundLog').innerHTML = data;
    });
});

//모달 요소 가져오기
const modalPointRefundLog = document.getElementById("modalPointRefundLog");

// 모달이 나타나는 함수(버튼에 추가하여 사용)
function modalPointRefundLogShow() {
     event.preventDefault();
  console.log("모달버튼클릭");
  modalPointRefundLog.style.display = "flex";
}

//모달 끄기 함수(모달 내부 x이미지에 추가되어 있음)
function modalPointRefundLogNone(){
  modalPointRefundLog.style.display = "none";
}
function modalPointRefundLogCheck(){
  modalPointRefundLogNone();
}
function modalPointRefundLogCancel(){
  modalPointRefundLogNone();
}
modalPointRefundLogNone();
