window.addEventListener('DOMContentLoaded', () => {
  // html 문서에 모달 불러오기
  fetch('./restaurantModalLogin.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('restaurantModalLogin').innerHTML = data;
    });
});

//모달 요소 가져오기
const modalCareModifyRejected = document.getElementById("restaurantModalLogin");

// 모달이 나타나는 함수(버튼에 추가하여 사용)
function restaurantModalLoginShow() {
  console.log("모달버튼클릭");
    restaurantModalLogin.style.display = "flex";

  //엔터로 확인 버튼 누르기
  document.onkeydown = (event) => {
    if(event.key === "Enter"){
      restaurantModalLoginCheck();
    }
  };
}
//모달 끄기 함수(모달 내부 x이미지에 추가되어 있음)
function restaurantModalLoginNone(){
  restaurantModalLogin.style.display = "none";
  document.onkeydown = null; // onkeydown 이벤트 제거
}
//확인 버튼
function restaurantModalLoginCheck(){
  restaurantModalLoginNone();
  location.href="./../login/login.html";
}
//취소 버튼
function restaurantModalLoginCancel(){
  restaurantModalLoginNone();
}
// 모달 안 보이게 하기
restaurantModalLoginNone();