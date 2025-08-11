document.addEventListener('DOMContentLoaded', function () {
  const deleteButton = document.querySelector('.btn_list_delete');
  const deleteModal = document.getElementById('deleteModal');
  const cancelDeleteButton = document.getElementById('cancelDelete');
  const confirmDeleteButton = document.getElementById('confirmDelete');

  // deleteButton.addEventListener('click', function (e) {
  //   e.preventDefault();
  //   deleteModal.classList.add('open');
  // });
  cancelDeleteButton.addEventListener('click', function () {
    deleteModal.classList.remove('open');
  });
  confirmDeleteButton.addEventListener('click', function () {
    console.log('게시글 삭제 완료');
    deleteModal.classList.remove('open');
  });

  const master = document.querySelector('.mark_nav input[type="checkbox"]');
  const rows = Array.from(document.querySelectorAll('.mark_list input[type="checkbox"]'));

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

  deleteConfirmModal?.addEventListener('click', e => {
    if (e.target === deleteConfirmModal) closeDeleteConfirm();
  });

  window.confirmDelete = function () {
    closeDeleteConfirm();
    openStatusModal('쪽지가 삭제되었습니다.');
  };

  deleteButton?.addEventListener('click', e => {
    e.preventDefault();
    deleteModal.classList.add('open');
    const checked = getRowCbs().filter(cb => cb.checked);
    if (checked.length === 0) {
      openStatusModal('삭제할 쪽지를 선택하세요.');
      return;
    }
    openDeleteConfirm();
  });
});

