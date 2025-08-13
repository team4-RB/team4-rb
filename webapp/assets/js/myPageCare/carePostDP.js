// 페이지 열리면 시작
document.addEventListener("DOMContentLoaded", function () {
  // 삭제 확인 버튼
  const confirmDeleteBtn = document.getElementById("confirmDelete");
  // 삭제 취소 버튼
  const cancelDeleteBtn = document.getElementById("cancelDelete");
  // 확인 누르면 목록 페이지로 이동
  confirmDeleteBtn.addEventListener("click", function (e) {
    e.preventDefault(); 
    window.location.href = "./carePost.html";
  });
  // 취소 누르면 모달 닫기 효과
  cancelDeleteBtn.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.hash = "";
  });
});
