document.addEventListener('DOMContentLoaded', function () {
  var delBtn = document.querySelector('.btn_list_delete');
  var deleteModal = document.getElementById('deleteModal');
  var checkModal = document.getElementById('checkModal');
  var doneModal = document.getElementById('chek_deleteModal');

  var cancelDeleteButton = document.getElementById('cancelDelete');
  var confirmDeleteButton = document.getElementById('confirmDelete');
  var confirmDeleteCheckButton = document.getElementById('confirmDelete_check');
  var doneConfirmButton = document.getElementById('check_confirmDelete');

  var masterCB = document.querySelector('.mark_nav input[type="checkbox"]');
  var rows = Array.prototype.slice.call(document.querySelectorAll('.mark_list input[type="checkbox"]'));

  function countChecked() {
    var c = 0;
    for (var i = 0; i < rows.length; i++) {
      if (rows[i].checked) c++;
    }
    return c;
  }

  function refreshMaster() {
    var total = rows.length;
    var checked = countChecked();
    if (checked === 0) {
      masterCB.checked = false;
    } else if (checked === total) {
      masterCB.checked = true;
    } else {
      masterCB.checked = false;
    }
  }
  refreshMaster();

  masterCB && masterCB.addEventListener('change', function () {
    for (var i = 0; i < rows.length; i++) rows[i].checked = masterCB.checked;
  });

  rows.forEach(cb => cb.addEventListener('change', refreshMaster));

  function openM(m) { m && m.classList.add('open'); }
  function closeM(m) { m && m.classList.remove('open'); }

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

  confirmDeleteButton && confirmDeleteButton.addEventListener('click', function () {
    closeM(deleteModal);
    console.log('게시글 삭제 완료');
    openM(doneModal);
  });

  confirmDeleteCheckButton && confirmDeleteCheckButton.addEventListener('click', function () {
    closeM(checkModal);
  });

  doneConfirmButton && doneConfirmButton.addEventListener('click', function () {
    closeM(doneModal);
  });
});
