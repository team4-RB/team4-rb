window.addEventListener('DOMContentLoaded', () => {
  // html 문서에 모달 불러오기
  fetch('./../../app/modal/modalPointChargeLog.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('modalPointChargeLog').innerHTML = data;
    });
});

//모달 요소 가져오기
const modalPointChargeLog = document.getElementById("modalPointChargeLog");

// 모달이 나타나는 함수(버튼에 추가하여 사용)
function modalPointChargeLogShow() {
     event.preventDefault();
  console.log("모달버튼클릭");
  modalPointChargeLog.style.display = "flex";
}

//모달 끄기 함수(모달 내부 x이미지에 추가되어 있음)
function modalPointChargeLogNone(){
  modalPointChargeLog.style.display = "none";
}
function modalPointChargeLogCheck(){
  modalPointChargeLogNone();
}
function modalPointChargeLogCancel(){
  modalPointChargeLogNone();
}
modalPointChargeLogNone();
