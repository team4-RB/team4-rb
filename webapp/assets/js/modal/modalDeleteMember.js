window.addEventListener('DOMContentLoaded', () => {
  // html 문서에 모달 불러오기
  fetch('/team04-RB_frontend/webapp/app/modal/modalDeleteMember.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('modalDeleteMember').innerHTML = data;
    });
});

//모달 요소 가져오기
const modalDeleteMember = document.getElementById("modalDeleteMember");

// 모달이 나타나는 함수(버튼에 추가하여 사용)
function modalDeleteMemberShow() {
  console.log("모달버튼클릭");
  modalDeleteMember.style.display = "flex";

  //엔터로 확인 버튼 누르기
  document.onkeydown = (event) => {
    if(event.key === "Enter"){
      modalDeleteMemberCheck();
    }
  };
}
//모달 끄기 함수(모달 내부 x이미지에 추가되어 있음)
function modalDeleteMemberNone(){
  modalDeleteMember.style.display = "none";
  document.onkeydown = null; // onkeydown 이벤트 제거
}
//확인 버튼
function modalDeleteMemberCheck(){
  console.log("회원 삭제 선택");
  alert("회원 삭제 선택")
  modalDeleteMemberNone();
}
//취소 버튼
function modalDeleteMemberCancel(){
  console.log("회원 삭제 취소");
  alert("회원 삭제 취소")
  modalDeleteMemberNone();
}
modalDeleteMemberNone();