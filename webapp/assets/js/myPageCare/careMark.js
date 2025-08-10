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
      master.indeterminate = true; 
    }
  }

  refreshMaster();
  window.addEventListener('load', refreshMaster);
  window.addEventListener('pageshow', refreshMaster);
  setTimeout(refreshMaster, 0);

  master?.addEventListener('change', () => {
    const rows = getRows();
    rows.forEach(cb => (cb.checked = master.checked));
    master.indeterminate = false;
  });

  document.addEventListener('change', (e) => {
    if (!e.target.matches('.row_chk')) return;
    refreshMaster();
  });
});
