document.addEventListener('DOMContentLoaded', function () {
  let monthBtns = document.querySelectorAll('.month');
  let listBox = document.querySelector('.matching_list');
  let addBtn = document.querySelector('.div_add button');
  let addModal = document.getElementById('matching_add');
  let cancelBtn = document.getElementById('cansel_modal');
  let saveBtn = document.getElementById('success_modal');
  let doneModal = document.getElementById('complete_modal');
  let okBtn = document.getElementById('success_button');
  let form = addModal.querySelector('form');

  let data = JSON.parse(localStorage.getItem('match_data') || '{}');
  let nowMonth = new Date().getMonth() + 1;

  monthBtns.forEach(function (btn, idx) {
    btn.addEventListener('click', function () {
      nowMonth = idx + 1;
      monthBtns.forEach(b => b.removeAttribute('id'));
      btn.id = 'active';
      showList();
    });
  });

  monthBtns[nowMonth - 1].id = 'active';
  showList();

  addBtn.addEventListener('click', function () {
    addModal.style.display = 'flex';
  });

  cancelBtn.addEventListener('click', function (e) {
    e.preventDefault();
    addModal.style.display = 'none';
  });

  saveBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let name = form.querySelectorAll('input')[0].value.trim();
    let date = form.querySelectorAll('input')[1].value.trim();
    let time = form.querySelectorAll('input')[2].value.trim();
    let point = form.querySelectorAll('input')[3].value.trim();

    if (!name || !date || !time || !point) {
      alert('Please fill all!');
      return;
    }

    let dateObj = new Date(date);
    let monthNum = dateObj.getMonth() + 1;
    let dayText = dateObj.getDate() + '일';

    let newItem = {
      day: dayText,
      name: name,
      time: '이용 시간: ' + time,
      point: '포인트 사용: ' + Number(point).toLocaleString(),
      status: '완료 / 취소 / 진행중'
    };

    if (!data[monthNum]) data[monthNum] = [];
    data[monthNum].push(newItem);
    localStorage.setItem('match_data', JSON.stringify(data));

    addModal.style.display = 'none';
    doneModal.style.display = 'flex';

    nowMonth = monthNum;
    monthBtns.forEach(b => b.removeAttribute('id'));
    monthBtns[nowMonth - 1].id = 'active';
    showList();

    form.reset();
  });

  okBtn.addEventListener('click', function () {
    doneModal.style.display = 'none';
  });

  function showList() {
    listBox.innerHTML = '';
    let arr = data[nowMonth] || [];
    if (arr.length === 0) {
      listBox.innerHTML = '<li class="matching"><div style="width:100%; text-align:center;">등록된 일정 없음</div></li>';
      return;
    }
    arr.forEach(function (item) {
      let li = document.createElement('li');
      li.className = 'matching';
      li.innerHTML = `
        <div class="matching_day">${item.day}</div>
        <div class="matching_member">${item.name}</div>
        <div class="matching_time">${item.time}</div>
        <div class="matching_point">${item.point}</div>
        <div class="check">${item.status}</div>
      `;
      listBox.appendChild(li);
    });
  }
});
