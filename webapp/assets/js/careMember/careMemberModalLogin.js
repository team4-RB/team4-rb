window.addEventListener('DOMContentLoaded', () => {
  // html 문서에 모달 불러오기
  fetch('./careMemberModalLogin.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('careMemberModalLogin').innerHTML = data;
    });
});

//모달 요소 가져오기
const careMemberModalLogin = document.getElementById("careMemberModalLogin");

// 모달이 나타나는 함수(버튼에 추가하여 사용)
function careMemberModalLoginShow() {
  console.log("모달버튼클릭");
    careMemberModalLogin.style.display = "flex";

  //엔터로 확인 버튼 누르기
  document.onkeydown = (event) => {
    if(event.key === "Enter"){
      careMemberModalLoginCheck();
    }
  };
}
//모달 끄기 함수(모달 내부 x이미지에 추가되어 있음)
function careMemberModalLoginNone(){
  careMemberModalLogin.style.display = "none";
  document.onkeydown = null; // onkeydown 이벤트 제거
}
//확인 버튼
function careMemberModalLoginCheck(){
  careMemberModalLoginNone();
  location.href="./../login/login.html";
}
//취소 버튼
function careMemberModalLoginCancel(){
  careMemberModalLoginNone();
}
careMemberModalLoginNone();