// ./assets/js/myPageCare/careMark.js
document.addEventListener('DOMContentLoaded', () => {
  // ====== 유틸 ======
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const getRowChecks = () => $$('.row_chk');
  const getRows = () => $$('.mark_row');

  // ====== 행 클릭 → 상세로 이동 (체크박스 등 인터랙티브 요소는 제외) ======
  getRows().forEach(row => {
    row.addEventListener('click', e => {
      if (e.target.closest('input, button, a, label, svg, path')) return; // 인터랙티브 클릭이면 무시
      const href = row.dataset.href;
      if (href) location.href = href;
    });
  });

  // 체크박스 클릭 시 행 클릭 버블 막기
  getRowChecks().forEach(chk => {
    chk.addEventListener('click', e => e.stopPropagation());
  });

  // ====== 전체선택 / 부분선택(indeterminate) ======
  const master =
    $('#checkAll') ||
    $('.mark_nav input[type="checkbox"]'); // id 없으면 첫 번째 헤더 체크박스 사용

  const refreshMaster = () => {
    if (!master) return;
    const cks = getRowChecks();
    const total = cks.length;
    const checked = cks.filter(cb => cb.checked).length;

    if (checked === 0) {
      master.checked = false;
      master.indeterminate = false;
    } else if (checked === total) {
      master.checked = true;
      master.indeterminate = false;
    } else {
      master.checked = false;
      master.indeterminate = true; // 부분 선택 표시
    }
  };

  refreshMaster();

  master?.addEventListener('change', () => {
    const all = master.checked;
    getRowChecks().forEach(cb => (cb.checked = all));
    master.indeterminate = false;
  });

  // 개별 체크 시 마스터 상태 갱신
  document.addEventListener('change', e => {
    if (!e.target.matches('.row_chk')) return;
    refreshMaster();
  });

  // ====== 삭제 모달 ======
  const deleteButton = $('.div_delete button') || $('.btn_delete');
  const deleteModal = $('#deleteModal');
  const cancelDeleteButton = $('#cancelDelete');
  const confirmDeleteButton = $('#confirmDelete');

  // 삭제 버튼 → 선택 유무 확인 후 모달 오픈
  deleteButton?.addEventListener('click', e => {
    e.preventDefault();
    const selected = getRowChecks().filter(cb => cb.checked);
    if (selected.length === 0) {
      alert('삭제할 항목을 선택해주세요.');
      return;
    }
    deleteModal?.classList.add('open');
  });

  // 모달 닫기
  cancelDeleteButton?.addEventListener('click', () => {
    deleteModal?.classList.remove('open');
  });

  // 모달 확인 → 선택된 행 DOM 제거 (백엔드 연동 전 임시)
  confirmDeleteButton?.addEventListener('click', () => {
    const selected = getRowChecks().filter(cb => cb.checked);
    selected.forEach(cb => cb.closest('.mark_row')?.remove());
    deleteModal?.classList.remove('open');
    refreshMaster();
  });

  // (선택) 키보드 접근성: 행 포커스 후 Enter로 이동
  getRows().forEach(row => {
    row.tabIndex = 0;
    row.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        const href = row.dataset.href;
        if (href) location.href = href;
      }
    });
  });
});
