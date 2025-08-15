document.addEventListener('DOMContentLoaded', function () {
  // 입력요소 전달
  var fields = Array.from(document.querySelectorAll('.caremodify input, .caremodify select, .caremodify textarea'));

  // 모달
  var saveModal = document.getElementById('saveSuccessModal');
  var findModal = document.getElementById('findModal');
  var notCorrectModal = document.getElementById('notCorecetModal');

  // 비밀번호 입력 칸
  var pw1 = document.getElementById('rePw');
  var pw2 = document.getElementById('reCheckPw');
  var msgBox = document.getElementById('msg_box');
  var errorText = msgBox ? msgBox.querySelector('.error_pw_msg') : null;

  // 비밀번호 패턴 (영문, 숫자, 특수문자 포함 8~16자)
  const pattern = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,16}$/;

  // 페이지 처음 들어오면 전부 빈칸
  fields.forEach(function (el) {
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.value = '';
    if (el.tagName === 'SELECT') el.selectedIndex = 0;
  });
  if (msgBox) msgBox.style.display = 'none';

  // 폼 클릭 이벤트
  var form = document.querySelector('form');
  if (form) {
    form.addEventListener('click', function (e) {
      if (e.target.tagName !== 'BUTTON') return;
      e.preventDefault();

      // 우편번호 찾기 버튼
      if (e.target.textContent.includes('우편번호 찾기')) {
        if (findModal) findModal.style.display = 'flex';
        return;
      }

      // 비밀번호 재설정 섹션 안의 확인 버튼인지 확인
      var inPwSection = !!e.target.closest('.pw_reset');

      if (inPwSection) {
        // 형식 검사
        if (!pattern.test(pw1.value || '')) {
          if (msgBox) {
            msgBox.style.display = 'block';
            if (errorText) errorText.textContent = '형식에 맞게 입력해주세요.';
          }
          return;
        }
        // 일치 검사
        if ((pw1.value || '') !== (pw2.value || '')) {
          if (msgBox) {
            msgBox.style.display = 'block';
            if (errorText) errorText.textContent = '비밀번호가 맞지 않습니다.';
          }
          if (notCorrectModal) notCorrectModal.style.display = 'flex';
          return;
        }
        // 형식, 일치 둘 다 통과 → 저장 성공 모달
        if (saveModal) saveModal.style.display = 'flex';
        return;
      }

      // 나머지 버튼은 바로 저장 성공 모달
      if (saveModal) saveModal.style.display = 'flex';
    });
  }

  // 모달 닫기
  var saveOkBtn = document.getElementById('saveConfirmBtn');
  if (saveOkBtn) {
    saveOkBtn.addEventListener('click', function () {
      if (saveModal) saveModal.style.display = 'none';
    });
  }

  var findOkBtn = document.querySelector('#findModal button');
  if (findOkBtn) {
    findOkBtn.addEventListener('click', function () {
      if (findModal) findModal.style.display = 'none';
    });
  }

  var correctBtn = document.getElementById('CorrectBtn');
  if (correctBtn) {
    correctBtn.addEventListener('click', function () {
      if (notCorrectModal) notCorrectModal.style.display = 'none';
    });
  }
});
