document.addEventListener('DOMContentLoaded', function () {
  // 모달 부분 (기존 코드)
  const deleteButton = document.querySelector('.div_delete button');
  const deleteModal = document.getElementById('deleteModal');
  const cancelDeleteButton = document.getElementById('cancelDelete');
  const confirmDeleteButton = document.getElementById('confirmDelete');

  // 폼 submit 막기 (버튼 누를 때 페이지 새로고침 방지)
  deleteButton.addEventListener('click', function (e) {
    e.preventDefault();
    deleteModal.classList.add('open');
  });
  cancelDeleteButton.addEventListener('click', function () {
    deleteModal.classList.remove('open');
  });
  confirmDeleteButton.addEventListener('click', function () {
    console.log('게시글 삭제 완료');
    deleteModal.classList.remove('open');
  });

  // ===== 체크박스 로직 =====
  const master = document.querySelector('.mark_nav input[type="checkbox"]'); // 전체
  const rows = Array.from(document.querySelectorAll('.mark_list input[type="checkbox"]')); // 개별

  function refreshMaster() {
    const total = rows.length;
    const checked = rows.filter(cb => cb.checked).length;

    if (checked === 0) {
      master.checked = false;
      master.indeterminate = false;
    } else if (checked === total) {
      master.checked = true;
      master.indeterminate = false;
    } else {
      master.checked = false;
    }
  }

  refreshMaster();

  master.addEventListener('change', () => {
    rows.forEach(cb => (cb.checked = master.checked));
    master.indeterminate = false;
  });

  rows.forEach(cb => cb.addEventListener('change', refreshMaster));
});

