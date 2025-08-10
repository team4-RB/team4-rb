document.addEventListener('DOMContentLoaded', function () {
  const saveBtn = document.getElementById('saveBtn');
  const modal = document.getElementById('proposeSuccessModal');
  const okBtn = document.getElementById('saveConfirmBtn');

  if (saveBtn && modal) {
    saveBtn.addEventListener('click', function (e) {
      e.preventDefault();
      modal.classList.add('open'); 
    });
  }

  if (okBtn && modal) {
    okBtn.addEventListener('click', function () {
      modal.classList.remove('open');
    });
  }
  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        modal.classList.remove('open');
      }
    });
  }
});
