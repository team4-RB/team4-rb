document.addEventListener('DOMContentLoaded', function () {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const headCb = $('.mark_nav input[type="checkbox"]');
  const getRowCbs = () => $$('.mark_list input[type="checkbox"]');

  function syncHeaderFromRows() {
    const cbs = getRowCbs();
    const total = cbs.length;
    const checked = cbs.filter(cb => cb.checked).length;
    if (!headCb) return;
    headCb.checked = (total > 0 && checked === total);
  }

  headCb?.addEventListener('change', () => {
    getRowCbs().forEach(cb => cb.checked = headCb.checked);
  });

  const readModal = $('#msgModal');
  const readCloseX = readModal?.querySelector('.modal_close');
  function openReadModal() { readModal?.classList.add('open'); }
  function closeReadModal() { readModal?.classList.remove('open'); }
  window.closeMsgModal = closeReadModal;

  let currentRow = null;

  const rows = $$('.mark_list');
  rows.forEach(row => {
    row.addEventListener('click', e => {
      if (e.target.closest('input[type="checkbox"]')) return;
      e.preventDefault();
      currentRow = row;
      openReadModal();
    });
  });

  readCloseX?.addEventListener('click', closeReadModal);
  readModal?.addEventListener('click', e => {
    if (e.target === readModal) closeReadModal();
  });

  const sendModal = $('#sendMsgModal');
  const sendCloseX = sendModal?.querySelector('.modal_close');
  const sendCancel = sendModal?.querySelector('.btn_cancel');
  const sendBtn = sendModal?.querySelector('.btn_send');
  const replyBtn = $('#msgModal .btn_reply');

  function openSendModal() { sendModal?.classList.add('open'); }
  function closeSendModal() { sendModal?.classList.remove('open'); }
  window.closeSendMsgModal = closeSendModal;

  replyBtn?.addEventListener('click', () => {
    closeReadModal();
    openSendModal();
  });

  sendCloseX?.addEventListener('click', closeSendModal);
  sendCancel?.addEventListener('click', closeSendModal);
  sendModal?.addEventListener('click', e => {
    if (e.target === sendModal) closeSendModal();
  });

  const statusModal = $('#sendSuccessModal');
  const statusMsgEl = statusModal?.querySelector('.send_message');
  function openStatusModal(message) {
    if (statusMsgEl) statusMsgEl.textContent = message;
    statusModal?.classList.add('open');
  }
  function closeStatusModal() { statusModal?.classList.remove('open'); }
  window.closeSendModal = function () {
    closeSendModal();
    closeStatusModal();
  };
  statusModal?.addEventListener('click', e => {
    if (e.target === statusModal) closeStatusModal();
  });

  sendBtn?.addEventListener('click', () => {
    closeSendModal();
    openStatusModal('쪽지를 보냈습니다.');
    const ta = document.getElementById('message_textarea');
    if (ta) ta.value = '';
  });

  const deleteConfirmModal = $('#deleteMsgModal');
  function openDeleteConfirm() { deleteConfirmModal?.classList.add('open'); }
  function closeDeleteConfirm() { deleteConfirmModal?.classList.remove('open'); }
  window.closeDeleteModal = closeDeleteConfirm;
  deleteConfirmModal?.addEventListener('click', e => {
    if (e.target === deleteConfirmModal) closeDeleteConfirm();
  });

  let deleteTargets = [];

  const deleteBtnInRead = $('#msgModal .btn_delete');
  deleteBtnInRead?.addEventListener('click', () => {
    if (!currentRow) return;
    closeReadModal();
    deleteTargets = [currentRow];
    openDeleteConfirm();
  });

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

  window.confirmDelete = function () {
    deleteTargets.forEach(el => el && el.remove());
    deleteTargets = [];
    currentRow = null;

    closeDeleteConfirm();
    syncHeaderFromRows();
    if (headCb) headCb.checked = false;

    openStatusModal('쪽지가 삭제되었습니다.');
  };

  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    const openModals = $$('.modal_bg.open');
    if (!openModals.length) return;
    openModals[openModals.length - 1].classList.remove('open');
  });

  getRowCbs().forEach(cb => cb.addEventListener('change', syncHeaderFromRows));
  syncHeaderFromRows();
});
