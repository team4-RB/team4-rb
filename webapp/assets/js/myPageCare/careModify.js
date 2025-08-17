// 페이지 열리면 실행
document.addEventListener('DOMContentLoaded', () => {
  // ===== 모달 참조 =====
  const saveModal = document.getElementById('saveSuccessModal');
  const findModal = document.getElementById('findModal');
  const notCorrectModal = document.getElementById('notCorecetModal');

  const openSaveModal = () => saveModal?.classList.add('open');
  const closeSaveModal = () => saveModal?.classList.remove('open');
  const openFindModal = () => findModal?.classList.add('open');
  const closeFindModal = () => findModal?.classList.remove('open');

  // 닫기 버튼
  document.getElementById('saveConfirmBtn')?.addEventListener('click', closeSaveModal);
  document.querySelector('#findModal button')?.addEventListener('click', closeFindModal);
  document.getElementById('CorrectBtn')?.addEventListener('click', () => notCorrectModal?.classList.remove('open'));

  // ===== 파일 업로드 모달 =====
  const uploadModal = document.getElementById('uploadSuccessModal');
  const openUploadModal = () => uploadModal?.classList.add('open');
  const closeUploadModal = () => uploadModal?.classList.remove('open');
  uploadModal?.querySelector('button')?.addEventListener('click', closeUploadModal);
  document.querySelectorAll('input[type="file"]').forEach(input => {
    input.addEventListener('change', () => {
      if (input.files && input.files.length > 0) openUploadModal();
    });
  });

  // ===== 이메일 검사 (전역 함수) =====
  function emailCheck(email) {
    // 영문/숫자/._- + @ + 도메인 + 최종 TLD 2~4
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(email);
  }

  // ===== 폼 델리게이션 =====
  const form = document.querySelector('form');
  if (!form) return;

  form.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;
    e.preventDefault();

    // 1) 우편번호 찾기
    if (btn.textContent.includes('우편번호 찾기')) {
      openFindModal();
      return;
    }

    // 2) 주소 섹션의 "확인" → 상세주소만 필수
    if (btn.textContent === '확인' && btn.closest('.member')?.querySelector('.info')?.textContent === '주소') {
      const detailInput = btn.closest('ul')?.querySelector('input[placeholder="상세주소"]');
      if (!detailInput || !detailInput.value.trim()) {
        alert('빈 칸을 입력해 주세요.');
        detailInput?.focus();
        return;
      }
      openSaveModal();
      return;
    }

    // 3) 전화번호 섹션의 "수정" → 숫자/하이픈만, 숫자만 있으면 하이픈 요구, 최종 형식 `010-0000-0000`
    if (btn.textContent === '수정' && btn.closest('.member')?.querySelector('.info')?.textContent === '전화번호') {
      const phoneInput = btn.closest('.myinfo')?.querySelector('input[type="text"]');
      const v = (phoneInput?.value || '').trim();

      if (!v) {
        alert('빈 칸을 입력해 주세요.');
        phoneInput?.focus();
        return;
      }
      // 허용 문자: 숫자와 하이픈만
      if (!/^[0-9-]+$/.test(v)) {
        alert('전화번호에는 숫자와 하이픈(-)만 입력하세요.');
        phoneInput?.focus();
        return;
      }
      // 하이픈이 전혀 없으면
      if (/^\d+$/.test(v)) {
        alert('하이픈(-)을 포함해 입력해주세요. 예) 010-1234-5678');
        phoneInput?.focus();
        return;
      }
      // 최종 형식 체크
      if (!/^010-\d{4}-\d{4}$/.test(v)) {
        alert('전화번호 형식이 올바르지 않습니다. 예) 010-1234-5678');
        phoneInput?.focus();
        return;
      }
      openSaveModal();
      return;
    }

    // 4) 이메일 섹션의 "수정"
    if (btn.textContent === '수정' && btn.closest('.email')) {
      const emailInput = document.getElementById('email');
      const resultDiv = document.getElementById('result');
      const v = (emailInput?.value || '').trim();

      if (!v) {
        alert('빈 칸을 입력해 주세요.');
        emailInput?.focus();
        return;
      }
      if (!emailCheck(v)) {
        resultDiv && (resultDiv.textContent = '유효하지 않은 이메일 주소입니다.');
        alert('유효하지 않은 이메일 주소입니다.');
        emailInput?.focus();
        return;
      }
      resultDiv && (resultDiv.textContent = '유효한 이메일 주소입니다.');
      openSaveModal();
      return;
    }

    // 5) 비밀번호 재설정 섹션 안의 "확인"
    if (btn.textContent === '확인' && btn.closest('.pw_reset')) {
      const pw1 = document.getElementById('rePw');
      const pw2 = document.getElementById('reCheckPw');
      const msgBox = document.getElementById('msg_box');
      const errorText = msgBox?.querySelector('.error_pw_msg');

      const pattern = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,16}$/;

      // 형식
      if (!pattern.test((pw1?.value || '').trim())) {
        if (msgBox) {
          msgBox.style.display = 'block';
          if (errorText) errorText.textContent = '형식에 맞게 입력해주세요.';
        }
        return;
      }
      // 일치
      if ((pw1?.value || '') !== (pw2?.value || '')) {
        if (msgBox) {
          msgBox.style.display = 'block';
          if (errorText) errorText.textContent = '비밀번호가 맞지 않습니다.';
        }
        notCorrectModal?.classList.add('open');
        return;
      }
      // 성공
      msgBox && (msgBox.style.display = 'none');
      openSaveModal();
      return;
    }

    // 6) 그 외 버튼은 기본적으로 저장 모달 (필요 없으면 이 분기 제거하세요)
    openSaveModal();
  });

  // ===== 초기화: 페이지 처음 들어오면 입력 비우기(원하면 유지) =====
  document.querySelectorAll('.caremodify input, .caremodify select, .caremodify textarea')
    .forEach(el => {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.value = '';
      if (el.tagName === 'SELECT') el.selectedIndex = 0;
    });
});
