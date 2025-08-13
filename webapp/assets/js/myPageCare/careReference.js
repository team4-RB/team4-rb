// 위쪽 전체 선택 체크박스
const master = document.querySelector('.mark_nav input[type="checkbox"]');
// 리스트의 체크박스들
const rows = Array.from(document.querySelectorAll('.mark_list input[type="checkbox"]'));
// 위쪽 체크박스 상태 맞추기
function refreshMaster() {
  // 전체 개수
  const total = rows.length;
  // 체크된 개수
  const checked = rows.filter(cb => cb.checked).length;
  // 하나도 선택 안 됨
  if (checked === 0) {
    master.checked = false;
    master.indeterminate = false;
  // 전부 선택됨
  } else if (checked === total) {
    master.checked = true;
    master.indeterminate = false;
  } else {
    master.checked = false;
  }
};
// 처음에 상태 한번 정리
refreshMaster();
// 위쪽 체크박스를 바꾸면 아래도 똑같이 바뀜
master.addEventListener('change', () => {
  rows.forEach(cb => (cb.checked = master.checked));
  master.indeterminate = false;
});
// 체크박스가 바뀌면 위쪽 상태 다시 계산
rows.forEach(cb => cb.addEventListener('change', refreshMaster));
