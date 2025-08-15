window.addEventListener('DOMContentLoaded', () => {
  // html 문서에 모달 불러오기
  fetch('./../../app/modal/modalDeleteNotice.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('modalDeleteNotice').innerHTML = data;
    });
});

//모달 요소 가져오기
const modalDeleteNotice = document.getElementById("modalDeleteNotice");

// 모달이 나타나는 함수(버튼에 추가하여 사용)
function modalDeleteNoticeShow() {
  event.preventDefault();
  console.log("모달버튼클릭");
  modalDeleteNotice.style.display = "flex";

  //엔터로 확인 버튼 누르기
  document.onkeydown = (event) => {
    if(event.key === "Enter"){
      modalDeleteNoticeCheck();
    }
  };
}
//모달 끄기 함수(모달 내부 x이미지에 추가되어 있음)
function modalDeleteNoticeNone(){
  modalDeleteNotice.style.display = "none";
  document.onkeydown = null; // onkeydown 이벤트 제거
}

const link = "./../../app/admin/notice.html"
function linkHref() {
  location.href=link;
}

//확인 버튼
function modalDeleteNoticeCheck(){
  console.log("공지 삭제 선택");
  alert("공지 삭제 선택")
  modalDeleteNoticeNone();
  linkHref()
}
//취소 버튼
function modalDeleteNoticeCancel(){
  console.log("공지 삭제 취소");
  alert("공지 삭제 취소")
  modalDeleteNoticeNone();
}
modalDeleteNoticeNone();