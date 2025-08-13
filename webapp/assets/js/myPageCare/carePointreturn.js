// 모달 박스, 열기 버튼, 확인(닫기) 버튼 찾기
const modal = document.getElementById("refundModal");
const btn = document.getElementById("btn_return");
const close = document.getElementById("refundConfirm");
// 환급하기 버튼 클릭시 모달 출력
btn.onclick = function () {
  // 모달 켜기 (가운데 보이게 하려면 flex가 좋아요)
  modal.style.display = "flex";
};
// 확인 버튼 클릭시 모달 출력
close.onclick = function () {
  modal.style.display = "none";
};