document.addEventListener('DOMContentLoaded', function () {

  const master = document.querySelector('.mark_nav input[type="checkbox"]');
  const rows = Array.from(document.querySelectorAll('.mark_list input[type="checkbox"]'));

  function refreshMaster() {
    const total = rows.length;
    const checked = rows.filter(cb => cb.checked).length;

    if (checked === 0) {
      master.checked = false;
      master.indeterminate = false;
    } else if (checked === total) {
      master.checked = true;
      master.indeterminate = false;
    } else {
      master.checked = false;
    }
  }

  refreshMaster();

  master.addEventListener('change', () => {
    rows.forEach(cb => (cb.checked = master.checked));
    master.indeterminate = false;
  });
  rows.forEach(cb => cb.addEventListener('change', refreshMaster));

});
