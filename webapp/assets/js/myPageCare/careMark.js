document.addEventListener('DOMContentLoaded', function () {
  const master = document.querySelector('.mark_nav input[type="checkbox"]');

  const getRowCheckboxes = () =>
    Array.from(document.querySelectorAll('.mark_list input[type="checkbox"]'));

  function refreshMaster() {
    const rows = getRowCheckboxes();
    const total = rows.length;
    const checked = rows.filter(cb => cb.checked).length;

    if (total === 0) {
      master.checked = false;
      return;
    }
    if (checked === total) {
      master.checked = true;
    } else if (checked === 0) {
      master.checked = false;
    } else {
      master.checked = false;
    }
  }

  refreshMaster();

  master.addEventListener('change', () => {
    getRowCheckboxes().forEach(cb => (cb.checked = master.checked));
    master.indeterminate = false;
  });

  getRowCheckboxes().forEach(cb => cb.addEventListener('change', refreshMaster));

  const deleteBtn = document.getElementById('btnDelete');
  const deleteModal = document.getElementById('deleteModal');
  const doneModal   = document.getElementById('chek_deleteModal');

  const confirmDeleteBtn = document.getElementById('confirmDelete');
  const cancelDeleteBtn  = document.getElementById('cancelDelete');
  const doneOkBtn        = document.getElementById('check_confirmDelete');

  function openModal(m)  { m.classList.add('open'); }
  function closeModal(m) { m.classList.remove('open'); }

  deleteBtn.addEventListener('click', function (e) {
    e.preventDefault();

    const anyChecked = document.querySelector('.mark_list input[type="checkbox"]:checked');
    if (!anyChecked) {
      alert('삭제할 항목을 선택하세요.');
      return;
    }
    openModal(deleteModal);
  });

  confirmDeleteBtn.addEventListener('click', function () {
    document.querySelectorAll('.mark_list input[type="checkbox"]:checked').forEach(cb => {
      const row = cb.closest('.mark_list');
      if (row) row.remove();
    });
    closeModal(deleteModal);
    openModal(doneModal);
    master.checked = false;
    master.indeterminate = false;
    refreshMaster();
  });

  cancelDeleteBtn.addEventListener('click', function () {
    closeModal(deleteModal);
  });

  doneOkBtn.addEventListener('click', function () {
    closeModal(doneModal);
  });
});
