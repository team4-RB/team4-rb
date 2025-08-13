// 페이지 켜지면 시작
document.addEventListener('DOMContentLoaded', function () {
  // 버튼 모달 찾기
  const saveBtn = document.getElementById('saveBtn');
  const modal = document.getElementById('proposeSuccessModal');
  const okBtn = document.getElementById('saveConfirmBtn');
  // 저장 버튼 누르면 모달 보이기
  if (saveBtn && modal) {
    saveBtn.addEventListener('click', function (e) {
      e.preventDefault();
      modal.classList.add('open');
    });
  }
  // 확인 버튼 누르면 모달 숨기기
  if (okBtn && modal) {
    okBtn.addEventListener('click', function () {
      modal.classList.remove('open');
    });
  }
});
