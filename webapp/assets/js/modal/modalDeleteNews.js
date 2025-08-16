window.addEventListener('DOMContentLoaded', () => {
  // html 문서에 모달 불러오기
  fetch('./../../app/modal/modalDeleteNews.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('modalDeleteNews').innerHTML = data;
    });
});

//모달 요소 가져오기
const modalDeleteNews = document.getElementById("modalDeleteNews");

// 모달이 나타나는 함수(버튼에 추가하여 사용)
function modalDeleteNewsShow() {
  console.log("모달버튼클릭");
  modalDeleteNews.style.display = "flex";

  //엔터로 확인 버튼 누르기
  document.onkeydown = (event) => {
    if(event.key === "Enter"){
      modalDeleteNewsCheck();
    }
  };
}
//모달 끄기 함수(모달 내부 x이미지에 추가되어 있음)
function modalDeleteNewsNone(){
  modalDeleteNews.style.display = "none";
  document.onkeydown = null; // onkeydown 이벤트 제거
}
//확인 버튼
function modalDeleteNewsCheck(){
  console.log("뉴스 삭제 선택");
  alert("뉴스 삭제 선택")
  modalDeleteNewsNone();
}
//취소 버튼
function modalDeleteNewsCancel(){
  console.log("뉴스 삭제 취소");
  alert("뉴스 삭제 취소")
  modalDeleteNewsNone();
}
modalDeleteNewsNone();