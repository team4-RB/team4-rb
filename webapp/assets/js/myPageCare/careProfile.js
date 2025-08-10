document.addEventListener('DOMContentLoaded', () => {
  // ===== 업로드 완료 모달 =====
  const uploadModal = document.getElementById('uploadSuccessModal');
  const uploadConfirmBtn = uploadModal?.querySelector('button');
  const openUploadModal = () => uploadModal?.classList.add('open');
  const closeUploadModal = () => uploadModal?.classList.remove('open');
  uploadConfirmBtn?.addEventListener('click', closeUploadModal);

  // 모든 file input - 파일 선택 시 모달
  const fileInputs = document.querySelectorAll('input[type="file"]');
  fileInputs.forEach(input => {
    input.addEventListener('change', () => {
      if (input.files && input.files.length > 0) openUploadModal();
    });
  });

  // ===== 저장 성공 모달 =====
  const saveModal = document.getElementById('saveSuccessModal');
  const saveModalOk = saveModal?.querySelector('button');
  const openSaveModal  = () => saveModal?.classList.add('open');
  const closeSaveModal = () => saveModal?.classList.remove('open');
  saveModalOk?.addEventListener('click', closeSaveModal);

  // ===== 요일 선택/저장 =====
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

  // ===== 지역 확인 버튼 → 저장모달 =====
  const placeConfirm = document.querySelector('.palce_detail ul li:last-child button');
  placeConfirm?.addEventListener('click', e => {
    e.preventDefault();
    openSaveModal();
  });

  // ===== 소개 확인 버튼 → 저장모달 =====
  const introduceConfirm = document.querySelector('.introduce_detail button');
  introduceConfirm?.addEventListener('click', e => {
    e.preventDefault();
    openSaveModal();
  });

  // ===== 주요 이력 확인 버튼 → 이력 수정 신청 완료 모달 =====
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
