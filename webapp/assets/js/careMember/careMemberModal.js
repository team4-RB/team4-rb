window.addEventListener('DOMContentLoaded', () => {
  // html 문서에 모달 불러오기
  fetch('./careMemberModal.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('modal').innerHTML = data;
    });
});

//모달 요소 가져오기
const modal = document.getElementById("modal");

//input 요소 담을 변수
let input;

// 모달이 나타나는 함수(버튼에 추가하여 사용)
function confirmShowup() {
  console.log("쪽지보내기 모달 클릭!!!");
  modal.style.display = "flex";
  console.log(modal);
  console.log("플렉스로 변경!!!");
  input = document.getElementById("letter_text");
  input.focus();
}

//모달 끄기 함수(모달 내부 x이미지에 추가되어 있음)
function turnOffModal(){
  modal.style.display = "none";
}
function modalCheck(){
  const value = input.value.trim();
  if(!value){
    alert("반려 사유를 입력하세요.");
    return;
  }
  console.log("전달할 값 : ", value);
  alert("입력됨 - " + value);
  turnOffModal();
  input.value = null;
}
function modalCancel(){
  turnOffModal();
}

turnOffModal();