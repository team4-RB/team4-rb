const markList = document.getElementsByClassName("mark_list");
markList[0].innerHTML = "";



for (let i = 0; i < 8; i++) {
  const li = document.createElement("li");
  li.id = 'li_' + i;

  let str = ``;

  str += `<input class="checkbox_li" name="mark_check" type="checkbox" value = "`;
  str += `` + i;
  str += `"><div class="name"><div>작성자` + i + `</div></div>`;
  str += `<div class="location" onclick="openmesseagemodal()"><div>제목</div></div>`;
  str += `<div class="phone"><div>날짜</div></div>`;
  str += `<div class="read"><div>읽음 상태</div></div>`;


  li.innerHTML = str;

  markList[0].appendChild(li);

}

// function delMarks() {
//   const checkbox = document.querySelectorAll('input[name="mark_check"]');
//   console.log(checkbox, typeof checkbox);
//   let j = 0;
//   for (i of checkbox) {
//     if (i.checked) {
//       const ll = document.getElementById("li_" + i.value);
//       console.log(document.getElementById("li_" + i.value));
//       ll.remove();
//       console.log("i값 : " + i.value);
//     }
//     j++;
//   }
//   const cc = document.getElementById("checkbox_col");
//   cc.checked = false;
// }

// function toggleMarksAll() {
//   const cc = document.getElementById("checkbox_col");
//   const marks = document.getElementsByName("mark_check");
//   if (cc.checked) {
//     let ggggg = 0;
//     for (c of marks) {
//       c.checked = true;
//       console.log('트루라네~' + ggggg);
//       ggggg++;
//     }
//   } else {
//     for (c of marks) {
//       c.checked = false;
//       console.log('뻘스.');
//     }
//   }
// }


// 페이지 로드 후 실행
document.addEventListener('DOMContentLoaded', function () {
  // 전체 선택 체크박스
  const headCb = document.querySelector('.mark_nav input[type="checkbox"]');
  // 체크박스 가져오기 함수
  function getRowCbs() {
    return Array.from(document.querySelectorAll('.mark_list input[type="checkbox"]'));
  }
  // 마크디브의 체크 박스 상태 맞추기
  function syncHeaderFromRows() {
    // 전체 체크박스
    const cbs = getRowCbs();
    // 전체 갯수
    const total = cbs.length;
    // 체크되 갯수
    const checked = cbs.filter(cb => cb.checked).length;
    if (!headCb) return;
    headCb.checked = (total > 0 && checked === total);
  }
  // 전체 체크박스의 상태 맞추기
  if (headCb) {
    headCb.addEventListener('change', () => {
      getRowCbs().forEach(cb => cb.checked = headCb.checked);
    });
  }
  // 받은 쪽지 읽기 모달
  const readModal = document.getElementById('msgModal');
  const readCloseX = readModal?.querySelector('.modal_close');
  // 읽기모달
  function openReadModal() { readModal?.classList.add('open'); }
  function closeReadModal() { readModal?.classList.remove('open'); }
  window.closeMsgModal = closeReadModal;
  // 쪽지 기억
  let currentRow = null;
  // 리스트 클릭시 쪽지 읽기 모달
  const rows = document.querySelectorAll('.mark_list');
  rows.forEach(row => {
    row.addEventListener('click', e => {
      if (e.target.closest('input[type="checkbox"]')) return;
      // 다른것들은 막기
      e.preventDefault();
      // 선택된 리스트만 저장
      currentRow = row;
      openReadModal();
    });
  });
  // 읽기 모달 닫기
  readCloseX?.addEventListener('click', closeReadModal);
  readModal?.addEventListener('click', e => {
    if (e.target === readModal) closeReadModal();
  });
  // 쪽지 보내기 모달
  const sendModal = document.getElementById('sendMsgModal');
  const sendCloseX = sendModal?.querySelector('.modal_close');
  const sendCancel = sendModal?.querySelector('.btn_cancel');
  const sendBtn = sendModal?.querySelector('.btn_send');
  const replyBtn = document.querySelector('#msgModal .btn_reply');
  // 보내기 모달 열고 닫기
  function openSendModal() { sendModal?.classList.add('open'); }
  function closeSendModal() { sendModal?.classList.remove('open'); }
  window.closeSendMsgModal = closeSendModal;
  // 답장 버튼 클릭시 모달 열기
  replyBtn?.addEventListener('click', () => {
    closeReadModal();
    openSendModal();
  });
  // 보내기 모달 닫기
  sendCloseX?.addEventListener('click', closeSendModal);
  sendCancel?.addEventListener('click', closeSendModal);
  sendModal?.addEventListener('click', e => {
    if (e.target === sendModal) closeSendModal();
  });
  // 전송 완료 모달
  const statusModal = document.getElementById('sendSuccessModal');
  const statusMsgEl = statusModal?.querySelector('.send_message');
  // 전송 완료모달 열기
  function openStatusModal(message) {
    if (statusMsgEl) statusMsgEl.textContent = message;
    statusModal?.classList.add('open');
  }
  // 모달 닫기
  function closeStatusModal() { statusModal?.classList.remove('open'); }
  // 둘다 동시에 닫기
  window.closeSendModal = function () {
    closeSendModal();
    closeStatusModal();
  };
  statusModal?.addEventListener('click', e => {
    if (e.target === statusModal) closeStatusModal();
  });
  // 쪽지 전송 버튼 클릭 시
  sendBtn?.addEventListener('click', () => {
    closeSendModal();
    openStatusModal('쪽지를 보냈습니다.');
    const ta = document.getElementById('message_textarea');
    if (ta) ta.value = '';
  });
  // 삭제 확인 모달
  const deleteConfirmModal = document.getElementById('deleteMsgModal');
  function openDeleteConfirm() { deleteConfirmModal?.classList.add('open'); }
  function closeDeleteConfirm() { deleteConfirmModal?.classList.remove('open'); }
  window.closeDeleteModal = closeDeleteConfirm;
  deleteConfirmModal?.addEventListener('click', e => {
    if (e.target === deleteConfirmModal) closeDeleteConfirm();
  });
  let deleteTargets = [];
  // 읽기 모달에서 삭제 버튼 클릭 시
  const deleteBtnInRead = document.querySelector('#msgModal .btn_delete');
  deleteBtnInRead?.addEventListener('click', () => {
    if (!currentRow) return;
    closeReadModal();
    deleteTargets = [currentRow];
    openDeleteConfirm();
  });

  // 목록 페이지에서 삭제 버튼 클릭 시
  const mainDeleteBtn = document.getElementById('delete');
  mainDeleteBtn?.addEventListener('click', e => {
    e.preventDefault();
    const checkedCbs = getRowCbs().filter(cb => cb.checked);
    if (checkedCbs.length === 0) {
      openStatusModal('삭제할 쪽지를 선택하세요.');
      return;
    }
    deleteTargets = checkedCbs.map(cb => cb.closest('li')).filter(Boolean);
    openDeleteConfirm();
  });
  // 삭제 확인 실행
  window.confirmDelete = function () {
    deleteTargets.forEach(el => el && el.remove());
    deleteTargets = [];
    currentRow = null;
    closeDeleteConfirm();
    syncHeaderFromRows();
    if (headCb) headCb.checked = false;
    openStatusModal('쪽지가 삭제되었습니다.');
  };
  // 체크박스 상태랑 맞추기
  getRowCbs().forEach(cb => cb.addEventListener('change', syncHeaderFromRows));
  // 처음 상태 맞추기
  syncHeaderFromRows();
});
