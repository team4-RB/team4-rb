// 페이지 열리면 시작
document.addEventListener('DOMContentLoaded', function () {
  // 변수 선언
  const saveBtn = document.getElementById('saveBtn');
  const modal   = document.getElementById('editModal');
  const okBtn   = document.getElementById('check');
  // 모달 켜기
  function openModal(){
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  // 모달 끄기
  function closeModal(){
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
  // 저장 버튼 클릭 시 모달 출력
  if (saveBtn) {
    saveBtn.addEventListener('click', function(e){
      e.preventDefault();
      openModal();
    });
  }
  // 확인 버튼 클릭 시 모달 닫기
  if (okBtn) {
    okBtn.addEventListener('click', function(){
      closeModal();
    });
  }

});
