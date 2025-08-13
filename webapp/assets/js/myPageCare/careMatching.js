// 페이지 열리면 실행
document.addEventListener('DOMContentLoaded', function () {
  // 다양한 변수 만들기
  let monthBtns = document.querySelectorAll('.month');
  let listBox = document.querySelector('.matching_list');
  let addBtn = document.querySelector('.div_add button');
  let addModal = document.getElementById('matching_add');
  let cancelBtn = document.getElementById('cansel_modal');
  let saveBtn = document.getElementById('success_modal');
  let doneModal = document.getElementById('complete_modal');
  let okBtn = document.getElementById('success_button');
  let form = addModal.querySelector('form');
// 월별 데이터 가져오기
  let data = JSON.parse(localStorage.getItem('match_data') || '{}');
  let nowMonth = new Date().getMonth() + 1;
// 월 버튼 클릭시
  monthBtns.forEach(function (btn, idx) {
    btn.addEventListener('click', function () {
      // 클릭한 달로 바꾸기
      nowMonth = idx + 1;
      // 다른 달들은 id 없애기
      monthBtns.forEach(b => b.removeAttribute('id'));
      // 클릭한 달에 acitve 추가
      btn.id = 'active';
      // 리스트 보이게
      showList();
    });
  });
// 시작할 때 현재 달 보여주기
  monthBtns[nowMonth - 1].id = 'active';
  showList();
  // 추가 버튼 클릭시 모달
  addBtn.addEventListener('click', function () {
    addModal.style.display = 'flex';
  });
  // 취소 버튼 누를시에 꺼짐
  cancelBtn.addEventListener('click', function (e) {
    e.preventDefault();
    addModal.style.display = 'none';
  });
  // 저장 정보를 클릭
  saveBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let name = form.querySelectorAll('input')[0].value.trim();
    let date = form.querySelectorAll('input')[1].value.trim();
    let time = form.querySelectorAll('input')[2].value.trim();
    let point = form.querySelectorAll('input')[3].value.trim();
    // 비어있으면 알럿으로 알려주기
    if (!name || !date || !time || !point) {
      alert('다 선택하세요.');
      return;
    }
    // 월하고 일이 몇인지 구하기
    let dateObj = new Date(date);
    let monthNum = dateObj.getMonth() + 1;
    let dayText = dateObj.getDate() + '일';
    // 새 데이터 생성하기
    let newItem = {
      day: dayText,
      name: name,
      time: '이용 시간: ' + time,
      point: '포인트 사용: ' + Number(point).toLocaleString(),
      status: '완료 / 취소 / 진행중'
    };
    // 원 데이터 없으면 만들기
    if (!data[monthNum]) data[monthNum] = [];
    data[monthNum].push(newItem);
    localStorage.setItem('match_data', JSON.stringify(data));
    // 모달 닫고 완료 모달 열기
    addModal.style.display = 'none';
    doneModal.style.display = 'flex';
    // 월 선택하면 다시 새로운 것으로
    nowMonth = monthNum;
    monthBtns.forEach(b => b.removeAttribute('id'));
    monthBtns[nowMonth - 1].id = 'active';
    showList();
    // 입력칸 비우기
    form.reset();
  });
  // 완료모달 확인버튼 클릭
  okBtn.addEventListener('click', function () {
    doneModal.style.display = 'none';
  });
  // 리스트 보여주는 함수
  function showList() {
    //빈 상태로 만들기
    listBox.innerHTML = ''; 
    let arr = data[nowMonth] || [];
    if (arr.length === 0) {
      // 데이터 없으면 저 문구 출력
      listBox.innerHTML = '<li class="matching"><div style="width:100%; text-align:center;">등록된 일정 없음</div></li>';
      return;
    }
    // 데이터 있으면 보여주기
    arr.forEach(function (item) {
      let li = document.createElement('li');
      li.className = 'matching';
      li.innerHTML = 
      `<div class="matching_day">${item.day}</div>
      <div class="matching_member">${item.name}</div>
      <div class="matching_time">${item.time}</div>
      <div class="matching_point">${item.point}</div>
      <div class="check">${item.status}</div>`;
      listBox.appendChild(li);
    });
  }
});
