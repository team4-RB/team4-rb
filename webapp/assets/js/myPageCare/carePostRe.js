document.addEventListener('DOMContentLoaded', function () {
  const saveBtn = document.getElementById('saveBtn');                // 수정완료 버튼
  const modal = document.getElementById('proposeSuccessModal');      // 모달 래퍼
  const okBtn = document.getElementById('saveConfirmBtn');           // 확인 버튼

  // 수정완료 → 모달 열기
  if (saveBtn && modal) {
    saveBtn.addEventListener('click', function (e) {
      e.preventDefault();           // 혹시 폼/링크 동작 방지
      modal.classList.add('open');  // 표시
    });
  }

  // 확인 → 모달 닫기
  if (okBtn && modal) {
    okBtn.addEventListener('click', function () {
      modal.classList.remove('open');
    });
  }

  // 배경(딤) 클릭 시 닫기 (모달 바깥 영역 클릭)
  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        modal.classList.remove('open');
      }
    });
  }
});
