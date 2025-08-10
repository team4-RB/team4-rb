document.addEventListener('DOMContentLoaded', function () {
  const saveBtn = document.getElementById('saveBtn');   // 수정완료 버튼
  const modal   = document.getElementById('editModal'); // 모달 래퍼(.modal)
  const okBtn   = document.getElementById('check');     // 확인 버튼(id가 check)

  function openModal(){
    modal.classList.add('open');
    document.body.style.overflow = 'hidden'; // 배경 스크롤 잠금
  }
  function closeModal(){
    modal.classList.remove('open');
    document.body.style.overflow = '';       // 스크롤 복구
  }

  saveBtn && saveBtn.addEventListener('click', function(e){
    e.preventDefault();
    openModal();
  });

  okBtn && okBtn.addEventListener('click', function(){
    closeModal();
    // 필요하면 여기서 이동: location.href = './careReference.html';
  });

  // 배경 클릭 시 닫기
  modal && modal.addEventListener('click', function(e){
    if (e.target === modal) closeModal();
  });
});
