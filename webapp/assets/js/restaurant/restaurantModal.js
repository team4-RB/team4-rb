window.addEventListener('DOMContentLoaded', () => {
  // html 문서에 모달 불러오기
  fetch('/team04-RB_frontend/webapp/modal.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('modal').innerHTML = data;
    });
});

//모달 요소 가져오기
const modal = document.getElementsByClassName("modal");

// 모달이 나타나는 함수(버튼에 추가하여 사용)
function confirmShowup(){
  console.log("모달버튼클릭");
  modal[0].style.display = "flex";
}

//모달 끄기 함수(모달 내부 x이미지에 추가되어 있음)
function turnOffModal(){
  modal[0].style.display = "none";
}

