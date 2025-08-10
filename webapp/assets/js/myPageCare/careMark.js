// ./assets/js/myPageCare/careMark.js
document.addEventListener('DOMContentLoaded', function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  const master = document.getElementById('checkAll')
    || $('.mark_nav input[type="checkbox"]');

  const getRows = () => $$('.row_chk');

  function refreshMaster() {
    if (!master) return;
    const rows = getRows();
    const total = rows.length;
    const checked = rows.filter(cb => cb.checked).length;

    if (total === 0 || checked === 0) {
      master.checked = false;
      master.indeterminate = false;
    } else if (checked === total) {
      master.checked = true;
      master.indeterminate = false;
    } else {
      master.checked = false;
      master.indeterminate = true; // 부분 선택
    }
  }

  // 초기/복원 타이밍 모두 동기화
  refreshMaster();
  window.addEventListener('load', refreshMaster);
  window.addEventListener('pageshow', refreshMaster);
  setTimeout(refreshMaster, 0);

  // 마스터 → 전체 토글
  master?.addEventListener('change', () => {
    const rows = getRows();
    rows.forEach(cb => (cb.checked = master.checked));
    master.indeterminate = false;
  });

  // 개별 체크 → 마스터 갱신 (위임)
  document.addEventListener('change', (e) => {
    if (!e.target.matches('.row_chk')) return;
    refreshMaster();
  });
});
