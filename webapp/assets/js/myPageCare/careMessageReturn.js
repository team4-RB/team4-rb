// 페이지가 로드되면 실행
document.addEventListener('DOMContentLoaded', function () {
  // 상단 "전체 선택" 체크박스
  const headCb = document.querySelector('.mark_nav input[type="checkbox"]');

  // 각 행 체크박스들 가져오기
  function getRowCbs() {
    return Array.from(document.querySelectorAll('.mark_list input[type="checkbox"]'));
  }

  // 행들 상태 보고 상단 체크박스 상태 맞추기
  function syncHeaderFromRows() {
    const cbs = getRowCbs();
    const total = cbs.length;
    const checked = cbs.filter(cb => cb.checked).length;
    if (!headCb) return;
    headCb.checked = (total > 0 && checked === total);
  }

  // 상단 체크 유무로 전체 체크박스 스타일 변경
  if (headCb) {
    headCb.addEventListener('change', () => {
      getRowCbs().forEach(cb => (cb.checked = headCb.checked));
    });
  }

  // 읽기 모달
  const readModal = document.getElementById('msgModal');
  const readCloseX = readModal?.querySelector('.modal_close');
  function openReadModal()  { readModal?.classList.add('open'); }
  function closeReadModal() { readModal?.classList.remove('open'); }
  window.closeMsgModal = closeReadModal;

  let currentRow = null;
  // 리스트 클릭시 모달 열기
  document.querySelectorAll('.mark_list').forEach(row => {
    row.addEventListener('click', e => {
      if (e.target.closest('input[type="checkbox"]')) return;
      e.preventDefault();
      currentRow = row;
      openReadModal();
    });
  });

  // 모달 닫기
  readCloseX?.addEventListener('click', closeReadModal);
  readModal?.addEventListener('click', e => {
    if (e.target === readModal) closeReadModal();
  });

  // 삭제 안내 모달과 완료 모달
  const statusModal = document.getElementById('sendSuccessModal');
  const statusMsgEl = statusModal?.querySelector('.send_message');
  function openStatusModal(message) {
    if (statusMsgEl) statusMsgEl.textContent = message;
    statusModal?.classList.add('open');
  }
  function closeStatusModal() { statusModal?.classList.remove('open'); }
  window.closeSendModal = closeStatusModal;

  statusModal?.addEventListener('click', e => {
    if (e.target === statusModal) closeStatusModal();
  });

  // 삭제 확인 모달
  const deleteConfirmModal = document.getElementById('deleteMsgModal');
  function openDeleteConfirm()  { deleteConfirmModal?.classList.add('open'); }
  function closeDeleteConfirm() { deleteConfirmModal?.classList.remove('open'); }
  window.closeDeleteModal = closeDeleteConfirm;

  deleteConfirmModal?.addEventListener('click', e => {
    if (e.target === deleteConfirmModal) closeDeleteConfirm();
  });

  // 지울 것들 담는 배열
  let deleteTargets = [];

  // 읽기 모달안에 삭제 클릭시 리스트 삭제
  const deleteBtnInRead = document.querySelector('#msgModal .btn_delete');
  deleteBtnInRead?.addEventListener('click', () => {
    if (!currentRow) return;
    closeReadModal();
    deleteTargets = [currentRow];
    openDeleteConfirm();
  });

  // 목록 하단 "삭제" 버튼 → 체크된 행들 삭제 준비
  const mainDeleteBtn = document.querySelector('.btn_list_delete');
  mainDeleteBtn?.addEventListener('click', e => {
    e.preventDefault();
    const checkedCbs = getRowCbs().filter(cb => cb.checked);
    if (checkedCbs.length === 0) {
      openStatusModal('삭제할 쪽지를 선택하세요.');
      return;
    }
    deleteTargets = checkedCbs.map(cb => cb.closest('.mark_list')).filter(Boolean);
    openDeleteConfirm();
  });

  // 삭제확인 모달에서 확인버튼 클릭 시
  window.confirmDelete = function () {
    deleteTargets.forEach(el => el && el.remove());
    deleteTargets = [];
    currentRow = null;

    closeDeleteConfirm();
    syncHeaderFromRows();
    if (headCb) headCb.checked = false;

    openStatusModal('쪽지가 삭제되었습니다.');
  };

  // 리스트의 체크박스의 형태에 따라 바뀌게
  getRowCbs().forEach(cb => cb.addEventListener('change', syncHeaderFromRows));
  // 맨 처음 상태 마추기
  syncHeaderFromRows();
});
