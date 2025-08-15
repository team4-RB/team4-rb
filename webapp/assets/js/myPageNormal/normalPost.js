const markList = document.getElementsByClassName("mark_list");
markList[0].innerHTML = "";



for (let i = 0; i < 8; i++) {
  const li = document.createElement("li");
  li.id = 'li_' + i;

  let str = ``;

  str += `<input class="checkbox_li" name="mark_check" type="checkbox" value = "`;
  str += `` + i;
  str += `"><div class="name"><div>이름` + i + `</div></div>`;
  str += `<a class="location" href="./../post/postDetaillogin.html"><div>위치</div></a>`;
  str += `<div class="phone"><div>전화번호</div></div>`;

  li.innerHTML = str;

  markList[0].appendChild(li);

}

function delMarks() {
  const checkbox = document.querySelectorAll('input[name="mark_check"]');
  console.log(checkbox, typeof checkbox);
  let j = 0;
  for (i of checkbox) {
    if (i.checked) {
      const ll = document.getElementById("li_" + i.value);
      console.log(document.getElementById("li_" + i.value));
      ll.remove();
      console.log("i값 : " + i.value);
    }
    j++;
  }
  const cc = document.getElementById("checkbox_col");
  cc.checked = false;
}

// function toggleMarksAll() {
//   const cc = document.getElementById("checkbox_col");
//   const marks = document.getElementsByName("mark_check");
//   if (cc.checked) {
//     let ggggg = 0;
//     for (c of marks) {
//       c.checked = true;
//       console.log('트루라네~' + ggggg);
//       ggggg++;
//     }
//   } else {
//     for (c of marks) {
//       c.checked = false;
//       console.log('뻘스.');
//     }
//   }
// }





// 페이지 켜지면 실행
document.addEventListener('DOMContentLoaded', function () {
  // 맨위에 전체 선택 체크박스
  const master = document.querySelector('.mark_nav input[type="checkbox"]');
  // 체크박스들 배열로 묶기
  const getRowCheckboxes = () =>
    Array.from(document.querySelectorAll('.mark_list input[type="checkbox"]'));
  // 체크박스 상태 맞추기
  function refreshMaster() {
    // 줄에 있는 체크박스 체크
    const rows = getRowCheckboxes();
    // 총 갯수 확인
    const total = rows.length;
    // 체크된 갯수들 확인
    const checked = rows.filter(cb => cb.checked).length;
    // 체크 안되면
    if (total === 0) {
      master.checked = false;
      return;
    }
    // 체크가 됐으면
    if (checked === total) {
      master.checked = true;
      // 체크가 없으면
    } else if (checked === 0) {
      master.checked = false;
      // 체크가 0도 아니고 다 된것도 아니면
    } else {
      master.checked = false;
    }
  }
  // 상태를 페이지 열릴때 맞추기
  refreshMaster();
  // 맨위의 mark_div 누르면 체크가 전체 되거나 안되거나
  master.addEventListener('change', () => {
    getRowCheckboxes().forEach(cb => (cb.checked = master.checked));
  });
  // 체크박스 상태가 바뀌면 바로 업데이트
  getRowCheckboxes().forEach(cb => cb.addEventListener('change', refreshMaster));
  // 버튼하고 모달 변수들(삭제, 삭제확인, 삭제완료, 확인, 취소, 완료)
  const deleteBtn = document.getElementById('btnDelete');
  const deleteModal = document.getElementById('deleteModal');
  const doneModal = document.getElementById('chek_deleteModal');
  const confirmDeleteBtn = document.getElementById('confirmDelete');
  const cancelDeleteBtn = document.getElementById('cancelDelete');
  const doneOkBtn = document.getElementById('check_confirmDelete');
  // 모달 열기
  function openModal(m) { m.classList.add('open'); }
  // 모달 닫기
  function closeModal(m) { m.classList.remove('open'); }
  // 삭제 버튼 클릭시
  deleteBtn.addEventListener('click', function (e) {
    e.preventDefault();
    // 체크된것이 있는지 확인
    const anyChecked = document.querySelector('.mark_list input[type="checkbox"]:checked');
    if (!anyChecked) {
      // 아무것도 없으면 띄우기
      alert('삭제할 항목을 선택하세요.');
      return;
    }
    // 체크된게 있음 띄우기
    openModal(deleteModal);
  });
  // 삭제확인 버튼 클릭시
  confirmDeleteBtn.addEventListener('click', function () {
    // 체크박스 있는 줄 삭제
    document.querySelectorAll('.mark_list input[type="checkbox"]:checked').forEach(cb => {
      const row = cb.closest('li');
      if (row) row.remove();
    });
    // 삭제 확인 모달 닫기
    closeModal(deleteModal);
    // 삭제 완료 모달 출력
    openModal(doneModal);
    master.checked = false;
    master.indeterminate = false;
    // 상태 새로고침
    refreshMaster();
  });
  // 삭제 취소 버튼
  cancelDeleteBtn.addEventListener('click', function () {
    closeModal(deleteModal);
  });
  // 완료 확인 버튼
  doneOkBtn.addEventListener('click', function () {
    closeModal(doneModal);
  });
});
