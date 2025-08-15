window.addEventListener("DOMContentLoaded", () => {
  // html 문서에 모달 불러오기
  fetch('./../../app/modal/modalDeleteReportedPost.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('modalDeleteReportedPost').innerHTML = data;
    });
});

//모달 요소 가져오기
const modalDeleteReportedPost = document.getElementById(
  "modalDeleteReportedPost"
);

const link = "./../../app/admin/report.html";
function linkHref() {
  location.href = link;
}

function cancle() {
  linkHref();
}
// 모달이 나타나는 함수(버튼에 추가하여 사용)
function modalDeleteReportedPostShow() {
  console.log("모달버튼클릭");
  modalDeleteReportedPost.style.display = "flex";
  //엔터로 확인 버튼 누르기
  document.onkeydown = (event) => {
    if (event.key === "Enter") {
      modalDeleteReportedPostCheck();
    }
  };
}
//모달 끄기 함수(모달 내부 x이미지에 추가되어 있음)
function modalDeleteReportedPostNone() {
  modalDeleteReportedPost.style.display = "none";
  document.onkeydown = null; // onkeydown 이벤트 제거
}
//확인 버튼
function modalDeleteReportedPostCheck() {
  console.log("신고글 삭제 선택");
  alert("신고글 삭제 선택");
  modalDeleteReportedPostNone();
  linkHref();
}
//취소 버튼
function modalDeleteReportedPostCancel() {
  console.log("신고글 삭제 취소");
  alert("신고글 삭제 취소");
  modalDeleteReportedPostNone();
}
modalDeleteReportedPostNone();
