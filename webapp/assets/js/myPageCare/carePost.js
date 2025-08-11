document.addEventListener('DOMContentLoaded', function () {
  var delBtn = document.querySelector('.btn_list_delete');

  var deleteModal = document.getElementById('deleteModal');
  var checkModal  = document.getElementById('checkModal');
  var doneModal   = document.getElementById('chek_deleteModal'); 

  var cancelDeleteButton = document.getElementById('cancelDelete'); 
  var confirmDeleteButton = document.getElementById('confirmDelete');
  var confirmDeleteCheckButton = document.getElementById('confirmDelete_check');
  var doneConfirmButton = document.getElementById('check_confirmDelete');

  var masterCB = document.querySelector('.mark_nav input[type="checkbox"]');

  // 모달 열기/닫기 함수
  function openM(modal) {
    modal.classList.add('open');
  }
  function closeM(modal) {
    modal.classList.remove('open');
  }

  function getRowCheckboxes() {
    return Array.prototype.slice.call(document.querySelectorAll('.mark_list input[type="checkbox"]'));
  }

  function countChecked() {
    return getRowCheckboxes().filter(function (cb) { return cb.checked; }).length;
  }

  function refreshMaster() {
    var boxes = getRowCheckboxes();
    var total = boxes.length;
    var checked = countChecked();
    if (!masterCB) return;
    masterCB.checked = (checked === total && total > 0);
  }

  refreshMaster();

  masterCB && masterCB.addEventListener('change', function () {
    var boxes = getRowCheckboxes();
    boxes.forEach(function (cb) { cb.checked = masterCB.checked; });
    refreshMaster();
  });

  function bindRowCheckboxEvents() {
    getRowCheckboxes().forEach(function (cb) {
      if (cb._bound) return;
      cb.addEventListener('change', refreshMaster);
      cb._bound = true;
    });
  }
  bindRowCheckboxEvents();

  // 삭제 버튼 클릭 시
  delBtn && delBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if (countChecked() === 0) {
      openM(checkModal);
    } else {
      openM(deleteModal);
    }
  });

  cancelDeleteButton && cancelDeleteButton.addEventListener('click', function () {
    closeM(deleteModal);
  });

  // "삭제 확인" 버튼 → 삭제 처리 후 완료 모달
  confirmDeleteButton && confirmDeleteButton.addEventListener('click', function () {
    closeM(deleteModal);

    // 체크된 행 삭제
    var checkedRows = document.querySelectorAll('.mark_list input[type="checkbox"]:checked');
    checkedRows.forEach(function (cb) {
      var row = cb.closest('.mark_list');
      if (row) row.remove();
    });

    openM(doneModal);
    refreshMaster();
    bindRowCheckboxEvents();
  });

  confirmDeleteCheckButton && confirmDeleteCheckButton.addEventListener('click', function () {
    closeM(checkModal);
  });

  doneConfirmButton && doneConfirmButton.addEventListener('click', function () {
    closeM(doneModal);
  });
});
