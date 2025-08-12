// 페이지 켜지면 실행
document.addEventListener('DOMContentLoaded', function () {
  // 삭제 버튼
  var delBtn = document.querySelector('.btn_list_delete');
  // 모달들
  var deleteModal = document.getElementById('deleteModal');
  var checkModal  = document.getElementById('checkModal');
  var doneModal   = document.getElementById('chek_deleteModal');
  // 모달 안 버튼들
  var cancelDeleteButton = document.getElementById('cancelDelete');
  var confirmDeleteButton = document.getElementById('confirmDelete');
  var confirmDeleteCheckButton = document.getElementById('confirmDelete_check');
  var doneConfirmButton = document.getElementById('check_confirmDelete');
  // 맨 위 전체 선택 체크박스
  var masterCB = document.querySelector('.mark_nav input[type="checkbox"]');
  // 모달 열기
  function openM(modal) {
    modal.classList.add('open');
  }
  // 모달 닫기
  function closeM(modal) {
    modal.classList.remove('open');
  }
  // 체크박스들 모으기
  function getRowCheckboxes() {
    return Array.prototype.slice.call(
      document.querySelectorAll('.mark_list input[type="checkbox"]')
    );
  }
  // 체크된 개수 세기
  function countChecked() {
    return getRowCheckboxes().filter(function (cb) { return cb.checked; }).length;
  }
  // 위쪽 전체 선택 상태 맞추기
  function refreshMaster() {
    var boxes = getRowCheckboxes();
    var total = boxes.length;
    var checked = countChecked();
    if (masterCB) {
      masterCB.checked = (checked === total && total > 0);
    }
  }
  // 처음 한 번 상태 맞추기
  refreshMaster();
  // 위쪽 전체 선택을 바꾸면 아래도 따라가도록
  if (masterCB) {
    masterCB.addEventListener('change', function () {
      var boxes = getRowCheckboxes();
      boxes.forEach(function (cb) { cb.checked = masterCB.checked; });
      refreshMaster();
    });
  }
  // 체크박스에 변화 감지 달기
  function bindRowCheckboxEvents() {
    getRowCheckboxes().forEach(function (cb) {
      if (cb._bound) return;
      cb.addEventListener('change', refreshMaster);
      cb._bound = true;
    });
  }
  bindRowCheckboxEvents();
  // 삭제 버튼 클릭
  if (delBtn) {
    delBtn.addEventListener('click', function (e) {
      e.preventDefault();
      if (countChecked() === 0) {
        // 고른것이 없을때
        openM(checkModal);
      } else {
        //고른것이 있을때
        openM(deleteModal);
      }
    });
  }
  // 삭제 모달에서 취소
  if (cancelDeleteButton) {
    cancelDeleteButton.addEventListener('click', function () {
      closeM(deleteModal);
    });
  }
  // 삭제 모달에서 확인
  if (confirmDeleteButton) {
    confirmDeleteButton.addEventListener('click', function () {
      closeM(deleteModal);
      // 체크된 것들 지우기
      var checkedRows = document.querySelectorAll('.mark_list input[type="checkbox"]:checked');
      checkedRows.forEach(function (cb) {
        var row = cb.closest('.mark_list');
        if (row) row.remove();
      });
      openM(doneModal);
      refreshMaster();
      bindRowCheckboxEvents();
    });
  }
  // 선택 없음 안내에서 확인
  if (confirmDeleteCheckButton) {
    confirmDeleteCheckButton.addEventListener('click', function () {
      closeM(checkModal);
    });
  }
  // 삭제 완료 안내에서 확인
  if (doneConfirmButton) {
    doneConfirmButton.addEventListener('click', function () {
      closeM(doneModal);
    });
  }
});
