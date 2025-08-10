document.addEventListener('DOMContentLoaded', function () {
  const deleteButton = document.getElementById('deleteButton'); // 삭제 버튼
  const deleteModal = document.getElementById('deleteModal');  // 모달
  const cancelDeleteButton = document.getElementById('cancelDelete'); // 취소 버튼
  const confirmDeleteButton = document.getElementById('confirmDelete'); // 확인 버튼

  // 삭제 버튼 클릭 시 모달 열기
  if (deleteButton) {
    deleteButton.addEventListener('click', function () {
      deleteModal.classList.add('open');  // 모달 열기
    });
  }

  // 취소 버튼 클릭 시 모달 닫기
  if (cancelDeleteButton) {
    cancelDeleteButton.addEventListener('click', function () {
      deleteModal.classList.remove('open');  // 모달 닫기
    });
  }

  // 확인 버튼 클릭 시 삭제 작업 처리
  if (confirmDeleteButton) {
    confirmDeleteButton.addEventListener('click', function () {
      // 실제 삭제 작업을 여기에 추가 (예: 서버에 삭제 요청 등)
      console.log('게시글 삭제 완료');
      deleteModal.classList.remove('open');  // 모달 닫기
      // 추가적으로 삭제 후 페이지 리로드 등 추가 작업을 할 수 있습니다.
    });
  }
});
