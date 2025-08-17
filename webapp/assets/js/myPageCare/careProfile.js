// 페이지 열리면 실행
document.addEventListener('DOMContentLoaded', () => {
  // 파일 업로드 모달
  const uploadModal = document.getElementById('uploadSuccessModal');
  const uploadConfirmBtn = uploadModal?.querySelector('button');
  // 업로드 모달 열기
  const openUploadModal = () => uploadModal?.classList.add('open');
  // 업로드 모달 닫기
  const closeUploadModal = () => uploadModal?.classList.remove('open');
  // 업로드 모달 확인 버튼 클릭하면 닫기
  uploadConfirmBtn?.addEventListener('click', closeUploadModal);
  // 파일 선택
  const fileInputs = document.querySelectorAll('input[type="file"]');
  // 업로드 모달 열기
  fileInputs.forEach(input => {
    input.addEventListener('change', () => {
      if (input.files && input.files.length > 0) openUploadModal();
    });
  });
  // 저장 완료 모달
  const saveModal = document.getElementById('saveSuccessModal');
  const saveModalOk = saveModal?.querySelector('button');
  // 저장 모달 열기
  const openSaveModal = () => saveModal?.classList.add('open');
  // 저장 모달 닫기
  const closeSaveModal = () => saveModal?.classList.remove('open');
  // 확인 버튼 클릭하면 닫기
  saveModalOk?.addEventListener('click', closeSaveModal);
  // 요일 선택 버튼
  const dayButtons = document.querySelectorAll('.possible_date button:not(#check)');
  // 요일 확인 버튼
  const dayConfirm = document.getElementById('check');
  const DAYS_STORAGE_KEY = 'careProfile.selectedDays';
  // 저장돼 있던 요일 불러와서 표시
  const savedDays = JSON.parse(localStorage.getItem(DAYS_STORAGE_KEY) || '[]');
  if (savedDays.length) {
    dayButtons.forEach(btn => {
      if (savedDays.includes(btn.textContent)) btn.classList.add('active');
    });
  }

  // 요일 버튼 누르면 선택
  dayButtons.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      btn.classList.toggle('active');
    });
  });

  // 선택된 요일 저장하고 저장 모달
  dayConfirm?.addEventListener('click', e => {
    e.preventDefault();
    const selectedDays = Array.from(dayButtons)
      .filter(b => b.classList.contains('active'))
      .map(b => b.textContent);
    localStorage.setItem(DAYS_STORAGE_KEY, JSON.stringify(selectedDays));
    openSaveModal();
  });

  // 확인 버튼
  // const placeConfirm = document.querySelector('.palce_detail ul li:last-child button');
  // // 저장 모달 열기
  // placeConfirm?.addEventListener('click', e => {
  //   e.preventDefault();
  //   openSaveModal();
  // });

  // 우편번호 찾기 버튼
  const placeFindBtn = document.querySelector('.palce_detail ul li:nth-child(2) button');
  // 우편번호 찾기 모달
  const findModal = document.getElementById('findModal');
  const findOkBtn = findModal?.querySelector('button');
  // 우편번호 모달 열기
  const openFindModal = () => findModal?.classList.add('open');
  // 우편번호 모달 닫기
  const closeFindModal = () => findModal?.classList.remove('open');
  // 우편번호 찾기 누르면 모달 열기
  placeFindBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    openFindModal();
  });
  // 우편번호 모달 확인 누르면 닫기
  findOkBtn?.addEventListener('click', closeFindModal);

  // 소개글 확인 버튼
  const introduceConfirm = document.querySelector('.introduce_detail button');
  // 저장 모달 열기
  //   introduceConfirm?.addEventListener('click', e => {
  //     e.preventDefault();
  //     openSaveModal();
  // });

  // 이력 확인 버튼
  const historyConfirmBtn = document.querySelector('.recode .confrim'); // HTML 철자 그대로 사용
  // 이력 수정 신청 완료 모달
  const proposeModal = document.getElementById('proposeSuccessModal');
  const proposeOkBtn = proposeModal?.querySelector('button');
  // 이력 모달 열기
  const openProposeModal = () => proposeModal?.classList.add('open');
  // 이력 모달 닫기
  const closeProposeModal = () => proposeModal?.classList.remove('open');

  // 확인 버튼 클릭 모달 열기
  // historyConfirmBtn?.addEventListener('click', e => {
  //   e.preventDefault();
  //   openProposeModal();
  // });
  // 확인 버튼 클릭시 닫기
  proposeOkBtn?.addEventListener('click', closeProposeModal);


  //빈칸 검증 칸 - 지역쪽
  const placeConfirm = document.querySelector('.palce_detail ul li:last-child button');
  placeConfirm?.addEventListener('click', e => {
    e.preventDefault();
    const detailInput = document.getElementById('detail');

    // 기본 테두리 복원
    if (detailInput) detailInput.style.borderColor = '#000';

    if (!detailInput?.value.trim()) {
      alert("빈 칸을 입력해 주세요.");
      if (detailInput) detailInput.style.borderColor = 'red';
      detailInput?.focus();
      return; 
    }

    openSaveModal();  
  });

  //빈칸 검증칸 = 소개글 쪽
  introduceConfirm?.addEventListener('click', e => {
    e.preventDefault();
    const introduceInput = document.querySelector('#detail');
    if (!introduceInput.value.trim()) {
      alert("빈 칸을 입력해 주세요.");
      return;
    }
    openSaveModal();
  });

  //빈칸검증칸 --이력
  historyConfirmBtn?.addEventListener('click', e => {
    e.preventDefault();
    const experienceInput = document.getElementById('experience');
    if (!experienceInput.value.trim()) {
      alert("빈 칸을 입력해 주세요.");
      return;
    }
    openProposeModal();
  });
});
