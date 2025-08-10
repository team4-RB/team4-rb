document.addEventListener('DOMContentLoaded', () => {
  const uploadModal = document.getElementById('uploadSuccessModal');
  const uploadConfirmBtn = uploadModal?.querySelector('button');
  const openUploadModal = () => uploadModal?.classList.add('open');
  const closeUploadModal = () => uploadModal?.classList.remove('open');
  uploadConfirmBtn?.addEventListener('click', closeUploadModal);

  const fileInputs = document.querySelectorAll('input[type="file"]');
  fileInputs.forEach(input => {
    input.addEventListener('change', () => {
      if (input.files && input.files.length > 0) openUploadModal();
    });
  });

  const saveModal = document.getElementById('saveSuccessModal');
  const saveModalOk = saveModal?.querySelector('button');
  const openSaveModal  = () => saveModal?.classList.add('open');
  const closeSaveModal = () => saveModal?.classList.remove('open');
  saveModalOk?.addEventListener('click', closeSaveModal);

  const dayButtons = document.querySelectorAll('.possible_date button:not(#check)');
  const dayConfirm = document.getElementById('check');
  const DAYS_STORAGE_KEY = 'careProfile.selectedDays';

  const savedDays = JSON.parse(localStorage.getItem(DAYS_STORAGE_KEY) || '[]');
  if (savedDays.length) {
    dayButtons.forEach(btn => {
      if (savedDays.includes(btn.textContent)) btn.classList.add('active');
    });
  }

  dayButtons.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      btn.classList.toggle('active');
    });
  });

  dayConfirm?.addEventListener('click', e => {
    e.preventDefault();
    const selectedDays = Array.from(dayButtons)
      .filter(b => b.classList.contains('active'))
      .map(b => b.textContent);
    localStorage.setItem(DAYS_STORAGE_KEY, JSON.stringify(selectedDays));
    openSaveModal();
  });

  const placeConfirm = document.querySelector('.palce_detail ul li:last-child button');
  placeConfirm?.addEventListener('click', e => {
    e.preventDefault();
    openSaveModal();
  });

  const introduceConfirm = document.querySelector('.introduce_detail button');
  introduceConfirm?.addEventListener('click', e => {
    e.preventDefault();
    openSaveModal();
  });

  const historyConfirmBtn = document.querySelector('.recode .confrim'); // HTML 그대로 confrim
  const proposeModal = document.getElementById('proposeSuccessModal');
  const proposeOkBtn = proposeModal?.querySelector('button');
  const openProposeModal  = () => proposeModal?.classList.add('open');
  const closeProposeModal = () => proposeModal?.classList.remove('open');

  historyConfirmBtn?.addEventListener('click', e => {
    e.preventDefault();
    openProposeModal();
  });
  proposeOkBtn?.addEventListener('click', closeProposeModal);
});
