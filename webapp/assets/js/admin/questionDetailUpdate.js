// 첫 번째 모달(삭제 사유) 불러오기
window.addEventListener("DOMContentLoaded", () => {
  fetch("/team04-RB_frontend/webapp/app/modal/modalDeletePostReason.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("modalDeletePostReason").innerHTML = data;
    });

  // 두 번째 모달(답변 완료) 불러오기
  fetch("/team04-RB_frontend/webapp/app/modal/modalQuestionAnsweredUpdate.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("modalQuestionAnsweredUpdate").innerHTML = data;
    });
});

// 모달 요소
const modalDeletePostReason = document.getElementById("modalDeletePostReason");
const modalQuestionAnswered = document.getElementById(
  "modalQuestionAnsweredUpdate"
);

let reasons = [
  "부적절한 문구가 포함되어 있습니다.",
  "반복적인 도배성 게시물입니다.",
  "광고성 게시물입니다.",
];

// -------------------------
// 첫 번째 모달 제어
// -------------------------
function modalDeletePostReasonShow() {
  modalDeletePostReason.style.display = "flex";
}

function modalDeletePostReasonNone() {
  modalDeletePostReason.style.display = "none";
}

function modalDeletePostReasonCheck() {
  const select = document.getElementById("reason_delete_post");
  const reasonValue = select.value;

  alert(reasons[reasonValue]);
  modalDeletePostReasonNone();

  // 여기서 두 번째 모달 실행
  modalQuestionAnsweredShow();
}

function modalDeletePostReasonCancel() {
  modalDeletePostReasonNone();
}

// -------------------------
// 두 번째 모달 제어
// -------------------------
function modalQuestionAnsweredShow() {
  modalQuestionAnswered.style.display = "flex";

  // 엔터로 확인 버튼 누르기
  document.onkeydown = (event) => {
    if (event.key === "Enter") {
      modalQuestionAnsweredCheck();
    }
  };
}

function modalQuestionAnsweredNone() {
  modalQuestionAnswered.style.display = "none";
  document.onkeydown = null;
  linkHref();
}

function modalQuestionAnsweredCheck() {
  modalQuestionAnsweredNone();
}

function modalQuestionAnsweredCancel() {
  modalQuestionAnsweredNone();
}

function linkHref() {
  location.href = "./../../app/admin/questionDetail.html";
}

// 초기 상태에서 두 모달 다 숨김
modalDeletePostReasonNone();
modalQuestionAnsweredNone();
