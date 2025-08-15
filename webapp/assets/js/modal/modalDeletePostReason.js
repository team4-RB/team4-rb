window.addEventListener('DOMContentLoaded', () => {
  // html 문서에 모달 불러오기
  fetch('./../../app/modal/modalDeletePostReason.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('modalDeletePostReason').innerHTML = data;
    });
});

//모달 요소 가져오기
const modalDeletePostReason = document.getElementById("modalDeletePostReason");

//input 요소 담을 변수
let select;

let reasons = ['부적절한 문구가 포함되어 있습니다.', '반복적인 도배성 게시물입니다.', '광고성 게시물입니다.']

// 모달이 나타나는 함수(버튼에 추가하여 사용)
function modalDeletePostReasonShow() {
  console.log("모달버튼클릭", "반복적인 도배성 게시물입니다.", );
  modalDeletePostReason.style.display = "flex";
}

const link = "./../../app/admin/report.html"
function linkHref() {
  location.href=link;
}

//모달 끄기 함수(모달 내부 x이미지에 추가되어 있음)
function modalDeletePostReasonNone(){
  modalDeletePostReason.style.display = "none";
}
function modalDeletePostReasonCheck(){
  const select = document.getElementById('reason_delete_post');
  const reasonValue = select.value;

  alert(reasons[reasonValue]);
  modalDeletePostReasonNone();
    linkHref()
}
function modalDeletePostReasonCancel(){
  modalDeletePostReasonNone();
}
modalDeletePostReasonNone();
