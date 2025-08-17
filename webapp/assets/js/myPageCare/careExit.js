// 페이지 시작 시에 실행
document.addEventListener("DOMContentLoaded", () => {
  // 다음버튼 선택
  const nextBtn = document.querySelector(".exit-button");
  // 탈퇴 사유 선택하기
  const reasonSelect = document.querySelector(".exit-select");
  // 에러 믄그
  const errorText = document.getElementById("reasonError");
  // 모달 열기
  function openModal(id) {
    // 해당하는 모달을 찾아가기
    const el = document.getElementById(id);
    // 없으면 닫기
    if (!el) return;
    // 있으면 그 해당 모달 보이게
    el.classList.add("open");
    // 숨김이가 아니다
    el.setAttribute("aria-hidden", "false");
  }
  // 모달 닫기
  window.closeModal = function (id) {
    // 해당 모달 찾기
    const el = document.getElementById(id);
    //없으면 닫기
    if (!el) return;
    //해당 모달 숨기기
    el.classList.remove("open");
    el.setAttribute("aria-hidden", "true");
  };
  // 탈퇴 확인하기
  window.checkWithdrawal = function () {
    // 예약이 있는지 없는지 확인용 이것이가 ture면 거동 불편자 있고 false면 없음
    const hasReservation = true;
    // 확인하는 모달 닫기
    closeModal('modalConfirm');
    // 33번째 줄이 트루인지 false인지에 따라 달라짐
    openModal(hasReservation ? 'modalFail' : 'modalSuccess');
  };
  // 다음버튼 클릭시에 나오는 것
  nextBtn.addEventListener("click", () => {
    // 플레이스 홀더를 빼고 인식하게 설정
    const isPlaceholder = reasonSelect.selectedIndex === 0;
    // 선택이 되어 있으면 표시
    if (isPlaceholder) {
      errorText.style.display = "block";
      return;
    }
    // 선택이 되어 있지 않으면 숨기기
    errorText.style.display = "none";
    // 모달 열리기
    openModal('modalConfirm');
  });
});
