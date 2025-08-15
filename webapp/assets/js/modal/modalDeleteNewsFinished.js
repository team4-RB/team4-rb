window.addEventListener('DOMContentLoaded', () => {
  // html 문서에 모달 불러오기
  fetch('./../../app/modal/modalDeleteNewsFinished.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('modalDeleteNewsFinished').innerHTML = data;
    });
});

//모달 요소 가져오기
const modalDeleteNewsFinished = document.getElementById("modalDeleteNewsFinished");


//뉴스 제목
const newsTitle = "오늘의 뉴스";


const link = "./../../app/admin/newsBoard.html";
const link2 = "./../../app/admin/bannerBoard.html";

function linkHref() {
  location.href=link;
}

function cancle() {
  linkHref();
}
function cancle2() {
  location.href=link2;
}
// 모달이 나타나는 함수(버튼에 추가하여 사용)
function modalDeleteNewsFinishedShow() {
  console.log("딜리트뉴스피니시드");
  modalDeleteNewsFinished.style.display = "flex";

  //모달 텍스트 요소 가져오기
  const modalText = document.getElementsByClassName("modal_text");

  let str = `제목 : ` + newsTitle + `\n뉴스를 삭제 완료했습니다.`;
  
  modalText[0].innerText = str;

  //엔터로 확인 버튼 누르기
  document.onkeydown = (event) => {
    if(event.key === "Enter"){
      modalDeleteNewsFinishedCheck();
    }
  };
}
//모달 끄기 함수(모달 내부 x이미지에 추가되어 있음)
function modalDeleteNewsFinishedNone(){
  modalDeleteNewsFinished.style.display = "none";
  document.onkeydown = null; // onkeydown 이벤트 제거
}
//확인 버튼
function modalDeleteNewsFinishedCheck(){
  modalDeleteNewsFinishedNone();
  linkHref();
}
//취소 버튼
function modalDeleteNewsFinishedCancel(){
  modalDeleteNewsFinishedNone();
}
modalDeleteNewsFinishedNone();