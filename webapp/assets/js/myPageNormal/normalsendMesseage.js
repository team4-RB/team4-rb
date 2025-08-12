const markList = document.getElementsByClassName("mark_list");
markList[0].innerHTML = "";



for (let i = 0; i < 8; i++) {
  const li = document.createElement("li");
  li.id = 'li_' + i;

  let str = ``;

  str += `<input class="checkbox_li" name="mark_check" type="checkbox" value = "`;
  str += `` + i;
  str += `"><div class="name"><div>작성자` + i + `</div></div>`;
  str += `<div class="location" onclick="openmesseagemodal()"><div>제목</div></div>`;
  str += `<div class="phone"><div>날짜</div></div>`;
  str += `<div class="read"><div>읽음 상태</div></div>`;


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

function toggleMarksAll() {
  const cc = document.getElementById("checkbox_col");
  const marks = document.getElementsByName("mark_check");
  if (cc.checked) {
    let ggggg = 0;
    for (c of marks) {
      c.checked = true;
      console.log('트루라네~' + ggggg);
      ggggg++;
    }
  } else {
    for (c of marks) {
      c.checked = false;
      console.log('뻘스.');
    }
  }
}



//받은 쪽지 읽기 모달창
const sendmodal = document.querySelector('.modal');
//쪽지 보내기 모달창
const reseivemodal = document.querySelector('.modal_reseive');
//쪽지 보냈습니다 모달창
const messeagemodal = document.querySelector('.modal_messeage');
//답장 버튼
const sendbutton = document.getElementById("sendBtn");
//보내기 버튼
const reseivebutton = document.getElementById("reseiveBtn");
//취소 버튼
const canclebutton = document.getElementById("cancleBtn");
//확인 버튼
const messeagecheckbutton = document.getElementById("messeagecheckBtn");
const deletecheckbutton = document.getElementById("deletecheckBtn");

//X 버튼
const sendclose = document.getElementById("sendxbutton");
const reseiveclose = document.getElementById("reseivexbutton");


function openmesseagemodal(){
  sendmodal.style.display = 'block';
}


sendbutton.addEventListener('click', function () {
  sendmodal.style.display = 'none';
  reseivemodal.style.display = 'block';
});

reseivebutton.addEventListener('click', function () {
  reseivemodal.style.display = 'none';
  messeagemodal.style.display = 'block';
});

messeagecheckbutton.addEventListener('click', function () {
  messeagemodal.style.display = 'none';
});



canclebutton.addEventListener('click', function () {
  reseivemodal.style.display = 'none';
});

sendclose.addEventListener('click', function(){
  sendmodal.style.display = 'none';
});

reseiveclose.addEventListener('click', function () {
  reseivemodal.style.display = 'none';
});

